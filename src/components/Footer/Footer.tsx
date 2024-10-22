import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<small>
				<p>
					&copy; The copyright belongs to{" "}
					<a target="_blank" href="https://github.com/Halva">
						Halva.
					</a>{" "}
					All rights reserved.
				</p>
				<p>
					Version <span>0.1</span>
				</p>
			</small>
		</footer>
	);
};

export default Footer;
