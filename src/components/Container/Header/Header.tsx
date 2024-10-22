import FeedbackForm from "./FeedbackForm/FeedbackForm";
import styles from "./Header.module.css";
import Logo from "./Logo/Logo";
import PageHeading from "./PageHeading/PageHeading";
import Pattern from "./Pattern/Pattern";

const Header = () => {
	return (
		<header className={styles.header}>
			<Pattern />
			<Logo />
			<PageHeading />
			<FeedbackForm />
		</header>
	);
};

export default Header;
