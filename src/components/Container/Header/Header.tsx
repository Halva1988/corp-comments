import FeedbackForm from "./FeedbackForm/FeedbackForm";
import PageHeading from "./PageHeading/PageHeading";
import styles from "./Header.module.css";
import Pattern from "./Pattern/Pattern";
import Logo from "./Logo/Logo";


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
