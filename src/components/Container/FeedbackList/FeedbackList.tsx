import { useFeedbackItemsContext } from "../../../hooks/useFeedbackItemsContext";
import FeedbackItem from "./FeedbackItem/FeedbackItem";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { TFeedbackItem } from "../../../lib/types";
import styles from "./FeedbackList.module.css";
import Spinner from "./Spinner/Spinner";


const FeedbackList = () => {
	const { isLoading, errorMessage, feedbackItems, filteredItems } = useFeedbackItemsContext()
	
	return (
		<ol className={styles["feedback-list"]}>
			{isLoading && <Spinner />}

			{errorMessage && <ErrorMessage message={errorMessage} />}

			{filteredItems.length > 0
				? filteredItems.map((item: TFeedbackItem) => (
						<FeedbackItem
							key={item.id}
							feedbackItem={item}
						/>))
				: feedbackItems.map((item: TFeedbackItem) => (
						<FeedbackItem
							key={item.id}
							feedbackItem={item}
						/>))}
		</ol>
	);
};

export default FeedbackList;
