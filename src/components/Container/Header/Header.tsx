import FeedbackForm from "./FeedbackForm/FeedbackForm";
import styles from "./Header.module.css";
import Logo from "./Logo/Logo";
import PageHeading from "./PageHeading/PageHeading";
import Pattern from "./Pattern/Pattern";

type HeaderProps = {
	handleAddToList: (text: string) => void
}

const Header = ({handleAddToList}: HeaderProps) => {
	return (
		<header className={styles.header}>
			<Pattern />
			<Logo />
			<PageHeading />
			<FeedbackForm handleAddToList={handleAddToList}/>
		</header>
	);
};

export default Header;
