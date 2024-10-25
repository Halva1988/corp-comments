import { TriangleUpIcon } from "@radix-ui/react-icons";
import styles from "./FeedbackItem.module.css";
import { TFeedbackItem } from "../../../../lib/types";
import { useState } from "react";

type FeedbackItemProps = {
  feedbackItem: TFeedbackItem;
}

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
	const [open, setOpen] = useState(false);
	const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

	const handleClick = () => {
		setOpen(!open);
	}

	const handleUpvoteIncrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setUpvoteCount(prev => ++prev);
		e.currentTarget.disabled = true;
		e.stopPropagation();
	}

	return (
		<li className={styles.feedback + (open ? " " + styles["feedback--expand"] : "")} onClick={handleClick}>
			<button onClick={handleUpvoteIncrease}>
				<TriangleUpIcon />
				<span>{upvoteCount}</span>
			</button>
			<div>
				<p>{feedbackItem.badgeLetter}</p>
			</div>

			<div>
				<p>{feedbackItem.company}</p>
				<p>{feedbackItem.text}</p>
			</div>

			<p>{feedbackItem.daysAgo === 0 ? "New" : `${feedbackItem.daysAgo}d`}</p>
		</li>
	);
};

export default FeedbackItem;
