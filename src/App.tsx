import HashtagItems from "./components/HashtagList/HashtagItems/HashtagItems";
import FeedbackList from "./components/Container/FeedbackList/FeedbackList";
import { useFeedbackItemsContext } from "./hooks/useFeedbackItemsContext";
import HashtagList from "./components/HashtagList/HashtagList";
import Header from "./components/Container/Header/Header";
import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";

function App() {
	const { allCompany } = useFeedbackItemsContext();

	return (
		<div className="app">
			<Footer />
			<Container>
				<Header />
				<FeedbackList />
			</Container>

			<HashtagList>
				{Array.from(allCompany).map((item, index) => (
					<HashtagItems key={index} company={item} />
				))}
			</HashtagList>
		</div>
	);
}
export default App;
