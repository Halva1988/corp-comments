import logo from "../../../../assets/logo.svg"
import styles from "./Logo.module.css"
const Logo = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src={logo} alt="logo" />
    </a>
  )
}

export default Logo