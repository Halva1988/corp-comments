import styles from "./Pattern.module.css";
import patternImg from "../../../../assets/pattern.svg";

const Pattern = () => {
	return <img src={patternImg} alt="pattern" className={styles.pattern} />;
};

export default Pattern;
