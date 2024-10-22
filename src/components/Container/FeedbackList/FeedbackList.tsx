import { TriangleUpIcon } from "@radix-ui/react-icons";
import styles from "./FeedbackList.module.css";
const FeedbackList = () => {
	return (
		<ol className={styles["feedback-list"]}>
			<li className={styles.feedback}>
				<button>
					<TriangleUpIcon />
					<span>593</span>
				</button>
				<div>
					<p>B</p>
				</div>

				<div>
					<p>MacDonald</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
						ipsum sed adipisci, ea aliquid ducimus.
					</p>
				</div>

				<p>4d</p>
			</li>
		</ol>
	);
};

export default FeedbackList;
