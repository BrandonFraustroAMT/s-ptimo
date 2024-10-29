import styles from "../page.module.css";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
import BodyVillasGaleira from "../components/bodyvillasgaleira/BodyVillasGaleira";

export default function Page() {
  return (
    <div className={styles.page}>
      <Menu />
      <BodyVillasGaleira />
      <Footer />
    </div>
  )
}