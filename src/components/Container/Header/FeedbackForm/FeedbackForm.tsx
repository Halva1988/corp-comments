import styles from "./FeedbackForm.module.css";

const FeedbackForm = () => {
	return (
		<form className={styles.form}>
			<textarea placeholder="Enter your feedback here, remember to #hashtag company" />
			<div>
				<p className={styles.counter}>150</p>
				<button>
					<span>Submit</span>
				</button>
			</div>
		</form>
	);
};

export default FeedbackForm;
