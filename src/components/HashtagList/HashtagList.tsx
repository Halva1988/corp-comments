import styles from "./HashtagList.module.css";

type HashtagListProps = {
	children: React.ReactNode
};

const HashtagList = ({ children }: HashtagListProps) => {

	return (
		<ul className={styles.hashtags}>
			{children}
		</ul>
	);
};

export default HashtagList;
