import styles from "../page.module.css";
import BodyAcuerdo from "../components/bodyacuerdo/BodyAcuerdo";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";

export default function Page() {
  return (
    <div className={styles.page}>
      <Menu />
      <BodyAcuerdo />
      <Footer />
    </div>
  )
}