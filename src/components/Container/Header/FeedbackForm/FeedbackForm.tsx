import { LIMIT_TEXT_LENGTH } from "../../../../lib/constants";
import styles from "./FeedbackForm.module.css";
import { useState } from "react";

type FeedbackFormProps = {
	handleAddToList: (text: string) => void;
}

const FeedbackForm = ({handleAddToList}: FeedbackFormProps) => {
	const [text, setText] = useState<string>("");

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		handleAddToList(text);
		setText("");
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<textarea
				value={text}
				onChange={(event) => handleChange(event)}
				placeholder="Enter your feedback here, remember to #hashtag company"
				maxLength={LIMIT_TEXT_LENGTH}
			/>
			<div>
				<p className={styles.counter}>{LIMIT_TEXT_LENGTH - text.length}</p>
				<button >
					<span>Submit</span>
				</button>
			</div>
		</form>
	);
};

export default FeedbackForm;
