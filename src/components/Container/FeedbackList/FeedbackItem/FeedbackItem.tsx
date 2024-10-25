import { useFeedbackItemsContext } from "../../../../hooks/useFeedbackItemsContext";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../../../lib/types";
import styles from "./FeedbackItem.module.css";
import { useState } from "react";

type FeedbackItemProps = {
	feedbackItem: TFeedbackItem;
};

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
	const { updateUpvoteCount } = useFeedbackItemsContext();
	const [open, setOpen] = useState(false);
	const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

	const dateNow = Date.now();
	const currentDate = new Date(dateNow - feedbackItem.id).getDate();

	const handleClick = () => {
		setOpen(!open);
	};

	const handleUpvoteIncrease = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setUpvoteCount((prev) => ++prev);
		e.currentTarget.disabled = true;
		e.stopPropagation();

		updateUpvoteCount(feedbackItem.id, feedbackItem.upvoteCount + 1);
	};

	return (
		<li
			className={
				styles.feedback + (open ? " " + styles["feedback--expand"] : "")
			}
			onClick={handleClick}
		>
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

			<p>{currentDate <= 1 ? "New" : `${currentDate}d`}</p>
		</li>
	);
};

export default FeedbackItem;
