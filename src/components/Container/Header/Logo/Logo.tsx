import styles from "./Logo.module.css"
import logo from "../../../../assets/logo.svg"
const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src={logo} alt="logo" />
    </a>
  )
}

export default Logo