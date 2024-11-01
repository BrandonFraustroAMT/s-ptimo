import styles from "../page.module.css";
import BodySevenna from "../components/bodysevenna/BodySevenna";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";

export default function Page() {
  return(
    <div className={styles.page}>
        <Menu />
        <BodySevenna />
        <Footer />
    </div>
  )
}