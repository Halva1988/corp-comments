import { useFeedbackItemsContext } from "../../../../hooks/useFeedbackItemsContext";
import { LIMIT_TEXT_LENGTH } from "../../../../lib/constants";
import styles from "./FeedbackForm.module.css";
import { useState } from "react";


const FeedbackForm = () => {
	const { handleAddToList } = useFeedbackItemsContext();
	const [text, setText] = useState<string>("");
	const [isValid, setIsValid] = useState<boolean>(false);
	const [isInvalid, setIsInvalid] = useState<boolean>(false);

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setText(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		if (text.includes("#") && text.length >= 5) {
			setIsValid(true);
			setTimeout(() => setIsValid(false), 1000);
		} else {
			setIsInvalid(true);
			setTimeout(() => setIsInvalid(false), 1000);
			return;
		}
		handleAddToList(text);
		setText("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={
				styles.form +
				(isInvalid ? " " + styles["form--invalid"] : "") +
				(isValid ? " " + styles["form--valid"] : "")
			}
		>
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
