import styles from "../page.module.css";
import BodyPolitica from "../components/bodypolitica/BodyPolitica";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";

export default function Page() {
  return (
    <div className={styles.page}>
      <Menu />
      <BodyPolitica />
      <Footer />
    </div>
  )
}