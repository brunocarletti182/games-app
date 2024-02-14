import Footer from "../../components/Footer";
import Header from "../../components/Header";
import error404 from "./page-not-found.gif"
import styles from "./PageNotFound.module.css"

function PageNotFound() {
  return (
    <>
      <Header/>
      <section className={styles.container}>
        <h2>This page was not found</h2>
        <img src={error404} alt="Page not found"></img>
      </section>
      <Footer/>
    </>
  )
}

export default PageNotFound;