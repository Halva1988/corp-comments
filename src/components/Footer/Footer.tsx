import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<small>
				<p>
					Version <span>0.1</span>
				</p>
				<p>
					&copy; The copyright belongs to{" "}
					<a target="_blank" href="https://halva1988.github.io/myPortfolio/">
						Halva.
					</a>{" "}
					All rights reserved.
				</p>
			</small>
		</footer>
	);
};

export default Footer;
