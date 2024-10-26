import { useCommentsStore } from "../../store/feedbackItemsStore";
import HashtagItems from "./HashtagItems/HashtagItems";
import styles from "./HashtagList.module.css";


const HashtagList = () => {
	const allCompany = useCommentsStore((state) => state.allCompany());
	const uniqueCompany = useCommentsStore((state) => state.uniqueCompany);
	
	return (
		<ul className={styles.hashtags}>
			{Array.from(uniqueCompany).map((item, index) => (
					<HashtagItems key={index} company={item} />
				))}
		</ul>
	);
};

export default HashtagList;
