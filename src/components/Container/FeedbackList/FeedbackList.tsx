import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem/FeedbackItem";
import styles from "./FeedbackList.module.css";
import Spinner from "./Spinner/Spinner";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const FeedbackList = () => {
	const [feedbackItems, setFeedbackItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);

			try {
				const response = await fetch("/corp-comments/JSON/base.json");

				if (!response.ok) {
					throw new Error();
				}

				const data = await response.json();
				setFeedbackItems(data);
			} catch (error) {
				setErrorMessage("Something went wrong!");
			}

			setIsLoading(false);
		};

		fetchData();
	}, []);

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
