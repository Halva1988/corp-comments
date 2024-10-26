import FeedbackList from "./components/Container/FeedbackList/FeedbackList";
import HashtagList from "./components/HashtagList/HashtagList";
import Header from "./components/Container/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import { useCommentsStore } from "./store/feedbackItemsStore";
import { useEffect } from "react";

function App() {
	const fetchData = useCommentsStore((state) => state.fetchData);

	useEffect(() => {
		fetchData();
	},[fetchData])

	return (
		<div className="app">
			<Footer />
			<Container>
				<Header />
				<FeedbackList />
			</Container>

			<HashtagList />
		</div>
	);
}
export default App;
