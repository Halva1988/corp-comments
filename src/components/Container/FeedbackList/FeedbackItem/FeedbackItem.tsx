import { TriangleUpIcon } from "@radix-ui/react-icons";
import styles from "./FeedbackItem.module.css";

type FeedbackItemProps = {
  feedbackItem: {
    id: number;
    upvoteCount: number;
    badgeLetter: string;
    companyName: string;
    text: string;
    daysAgo: number;
  };
}

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
	return (
		<li className={styles.feedback}>
			<button>
				<TriangleUpIcon />
				<span>{feedbackItem.upvoteCount}</span>
			</button>
			<div>
				<p>{feedbackItem.badgeLetter}</p>
			</div>

			<div>
				<p>{feedbackItem.companyName}</p>
				<p>{feedbackItem.text}</p>
			</div>

			<p>{feedbackItem.daysAgo}d</p>
		</li>
	);
};

export default FeedbackItem;
