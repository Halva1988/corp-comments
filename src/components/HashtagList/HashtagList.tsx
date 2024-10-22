import styles from "./HashtagList.module.css";

const HashtagList = () => {
	return (
		<ul className={styles.hashtags}>
			<li>
				<button>#GitHub</button>
			</li>
			<li>
				<button>#Instagram</button>
			</li>
			<li>
				<button>#MacDonald's</button>
			</li>
		</ul>
	);
};

export default HashtagList;
