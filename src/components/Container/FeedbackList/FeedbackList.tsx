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
	updateData: (id: number, newUpvoteCount: number) => void;
};

const FeedbackList = ({filteredItems, feedbackItems, isLoading, errorMessage, updateData }: FeedbackListProps) => {
	return (
		<ol className={styles["feedback-list"]}>
			
			{isLoading && <Spinner />}

			{errorMessage && <ErrorMessage message={errorMessage} />}

			{filteredItems.length > 0 ? filteredItems.map((item) => <FeedbackItem key={item.id} updateData={updateData} feedbackItem={item} />) : feedbackItems.map((item) => (
				<FeedbackItem key={item.id} updateData={updateData} feedbackItem={item} />
			))}
		</ol>
	);
};

export default FeedbackList;
