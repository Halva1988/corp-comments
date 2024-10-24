import FeedbackList from "./components/Container/FeedbackList/FeedbackList";
import HashtagList from "./components/HashtagList/HashtagList";
import Header from "./components/Container/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { TFeedbackItem } from "./lib/types";

function App() {
	const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
	const [filteredItems, setFilteredItems] = useState<TFeedbackItem[]>([]);
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

		await fetch(
			"https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newItem),
			}
		);
	};
	
	const handleFilter = (text: string) => {
		setFilteredItems(
			feedbackItems.filter((item) => item.company.includes(text))
		);
	};
	
	const allCompany: Set<string> = new Set(
		feedbackItems.map((item) => item.company)
	);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			try {
				const response = await fetch(
					"https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
					{
						cache: "no-store",
					}
				);

				const data = await response.json();

				setFeedbackItems(data.feedbacks);
			} catch (error) {
				setErrorMessage("Something went wrong!");
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<div className="app">
			<Footer />
			<Container>
				<Header handleAddToList={handleAddToList} />
				<FeedbackList
					filteredItems={filteredItems}
					feedbackItems={feedbackItems}
					isLoading={isLoading}
					errorMessage={errorMessage}
				/>
			</Container>
			<HashtagList handleFilter={handleFilter} allCompany={allCompany} />
		</div>
	);
}

export default App;
