import express from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Получение пути к текущему файлу
const __filename = fileURLToPath(import.meta.url);
// Получение директории текущего файла
const __dirname = dirname(__filename);

const dataFilePath = join(__dirname, "public", "base.json");

app.post("/", (req, res) => {
	const newItem = req.body;

	fs.readFile(dataFilePath, "utf8", (err, data) => {
		if (err) {
			return res.status(500).json({ error: "Failed to read data file!!!" });
		}

		const items = JSON.parse(data);
		items.push(newItem);

		fs.writeFile(dataFilePath, JSON.stringify(items, null, 2), (err) => {
			if (err) {
				return res.status(500).json({ error: "Failed to write data file" });
			}

			res.status(201).json(newItem);
		});
	});
});

// запрос на изменение upvoteCount по id
app.patch("/", (req, res) => {
	const id = req.body.id;
	const upvoteCount = req.body.upvoteCount;

	fs.readFile(dataFilePath, "utf8", (err, data) => {
		if (err) {
			return res.status(500).json({ error: "Failed to read data file!!!" });
		}

		const items = JSON.parse(data);
		
		const itemToUpdate = items.find((item) => item.id === id);

		if (!itemToUpdate) {
			return res.status(404).json({ error: "Item not found" });
		}

		itemToUpdate.upvoteCount = upvoteCount ;

		fs.writeFile(dataFilePath, JSON.stringify(items, null, 2), (err) => {
			if (err) {
				return res.status(500).json({ error: "Failed to write data file" });
			}

			res.status(200).json(itemToUpdate);
		});
	});
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
