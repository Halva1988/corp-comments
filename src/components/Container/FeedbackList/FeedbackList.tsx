import FeedbackItem from "./FeedbackItem/FeedbackItem";
import styles from "./FeedbackList.module.css";
import Spinner from "./Spinner/Spinner";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { TFeedbackItem } from "../../../lib/types";

type FeedbackListProps = {
	feedbackItems: TFeedbackItem[];
	isLoading: boolean;
	errorMessage: string;
};

const FeedbackList = ({ feedbackItems, isLoading, errorMessage }: FeedbackListProps) => {
	return (
		<ol className={styles["feedback-list"]}>
			{isLoading && <Spinner />}

			{errorMessage && <ErrorMessage message={errorMessage} />}

			{feedbackItems.map((item) => (
				<FeedbackItem key={item.id} feedbackItem={item} />
			))}
		</ol>
	);
};

export default FeedbackList;
