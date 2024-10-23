import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import HashtagList from "./components/HashtagList/HashtagList";
import { TFeedbackItem } from "./lib/types";
import Header from "./components/Container/Header/Header";
import FeedbackList from "./components/Container/FeedbackList/FeedbackList";

function App() {
	const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleAddToList = async (text: string) => {
		const companyName = text
			.split(" ")
			.find((word) => word.includes("#"))!
			.substring(1);

		const newItem: TFeedbackItem = {
			id: Date.now(),
			upvoteCount: 0,
			badgeLetter: companyName.substring(0, 1).toUpperCase(),
			company: companyName,
			text: text,
			daysAgo: 0,
		};

		setFeedbackItems([...feedbackItems, newItem]);

		await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newItem),
		});
	};

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			try {
				const response = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks");

				if (!response.ok) {
					throw new Error();
				}

				const data = await response.json();
				
				setFeedbackItems(data.feedbacks);
				console.log(feedbackItems);
			} catch (error) {
				setErrorMessage("Something went wrong!");
			}

			setIsLoading(false);
		};

		fetchData();
	}, []);

	return (
		<div className="app">
			<Footer />
			<Container>
				<Header handleAddToList={handleAddToList} />
				<FeedbackList
					feedbackItems={feedbackItems}
					isLoading={isLoading}
					errorMessage={errorMessage}
				/>
			</Container>
			<HashtagList />
		</div>
	);
}

export default App;
