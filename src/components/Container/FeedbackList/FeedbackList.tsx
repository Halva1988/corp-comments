import FeedbackItem from "./FeedbackItem/FeedbackItem";
import styles from "./FeedbackList.module.css";
import Spinner from "./Spinner/Spinner";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { TFeedbackItem } from "../../../lib/types";

type FeedbackListProps = {
	filteredItems: TFeedbackItem[];
	feedbackItems: TFeedbackItem[];
	errorMessage: string;
	isLoading: boolean;
};

const FeedbackList = ({filteredItems, feedbackItems, isLoading, errorMessage }: FeedbackListProps) => {
	return (
		<ol className={styles["feedback-list"]}>
			
			{isLoading && <Spinner />}

			{errorMessage && <ErrorMessage message={errorMessage} />}

			{filteredItems.length > 0 ? filteredItems.map((item) => <FeedbackItem key={item.id} feedbackItem={item} />) : feedbackItems.map((item) => (
				<FeedbackItem key={item.id} feedbackItem={item} />
			))}
		</ol>
	);
};

export default FeedbackList;
