import HashtagItems from "./HashtagItems/HashtagItems";
import styles from "./HashtagList.module.css";

type HashtagListProps = {
	allCompany: Set<string>;
	handleFilter: (text: string) => void;
};

const HashtagList = ({ handleFilter, allCompany }: HashtagListProps) => {

	return (
		<ul className={styles.hashtags}>
			{Array.from(allCompany).map((item, index) => (
				<HashtagItems handleFilter={handleFilter} key={index} company={item} />
			))}
		</ul>
	);
};

export default HashtagList;
