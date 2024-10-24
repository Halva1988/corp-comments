import FeedbackForm from "./FeedbackForm/FeedbackForm";
import PageHeading from "./PageHeading/PageHeading";
import styles from "./Header.module.css";
import Pattern from "./Pattern/Pattern";
import Logo from "./Logo/Logo";

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
