import styles from "./Container.module.css"
import FeedbackList from "./FeedbackList/FeedbackList"
import Header from "./Header/Header"

const Container = () => {
  return (
    <main className={styles.container}>
      <Header />
      <FeedbackList />
    </main>
  )
}

export default Container