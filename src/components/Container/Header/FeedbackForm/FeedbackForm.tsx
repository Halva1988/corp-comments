import { useState } from "react";
import styles from "./FeedbackForm.module.css";
import { LIMIT_TEXT_LENGTH } from "../../../../lib/constants";

const FeedbackForm = () => {
	const [text, setText] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value);
	};

	// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
	// 	event.preventDefault();
	// 	const words = text.trim().split(" ");
	// 	const lastWord = words[words.length - 1];
	// 	const hashtag = lastWord.trim();

	// 	if (hashtag[0] !== "#") {
	// 		errorHashtag = true;
	// 		return;
	// 	}
	// 	setText("");
	// };

	return (
		<form className={styles.form}>
			<textarea
				value={text}
				onChange={(event) => handleChange(event)}
				placeholder="Enter your feedback here, remember to #hashtag company"
				maxLength={LIMIT_TEXT_LENGTH}
			/>
			<div>
				<p className={styles.counter}>{LIMIT_TEXT_LENGTH - text.length}</p>
				<button>
					<span>Submit</span>
				</button>
			</div>
		</form>
	);
};

export default FeedbackForm;
