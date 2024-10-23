import { TriangleUpIcon } from "@radix-ui/react-icons";
import styles from "./FeedbackItem.module.css";
import { TFeedbackItem } from "../../../../lib/types";

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
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
				<p>{feedbackItem.company}</p>
				<p>{feedbackItem.text}</p>
			</div>

			<p>{feedbackItem.daysAgo}d</p>
		</li>
	);
};

export default FeedbackItem;
