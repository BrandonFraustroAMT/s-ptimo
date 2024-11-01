import styles from "../page.module.css";
import BodySelah from "../components/bodyselah/BodySelah";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";

export default function Page() {
  return (
    <div className={styles.page}>
      <Menu />
      <BodySelah />
      <Footer />
    </div>
  )
}