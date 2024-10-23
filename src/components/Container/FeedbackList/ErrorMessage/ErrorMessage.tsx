import styles from "./ErrorMessage.module.css";

type errorMessageProps = {
  message: string;
}

const ErrorMessage = ({ message }: errorMessageProps) => {
	return <div className={styles.error}>{message}</div>;
};

export default ErrorMessage;
