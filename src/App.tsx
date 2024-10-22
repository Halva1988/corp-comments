import Container from "./components/Container/Container";
import Footer from "./components/Footer/Footer";
import HashtagList from "./components/HashtagList/HashtagList";

function App() {
	return (
		<div className="app">
			<Footer />
			<Container />
			<HashtagList />
		</div>
	);
}

export default App;
