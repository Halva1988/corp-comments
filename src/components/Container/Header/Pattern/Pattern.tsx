import patternImg from "../../../../assets/pattern.svg";
import styles from "./Pattern.module.css";

const Pattern = () => {
	return <img src={patternImg} alt="pattern" className={styles.pattern} />;
};

export default Pattern;
