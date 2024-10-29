import styles from "../page.module.css";
import BodyNosotros from "../components/bodynosotros/BodyNosotros";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";

export default function Page() {
  return (
    <div className={styles.page}>
      <Menu />
      <BodyNosotros />
      <Footer />
    </div>
  )
}