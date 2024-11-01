import styles from "../page.module.css";
import Footer from "../components/footer/Footer";
import Menu from "../components/menu/Menu";
import BodyContacto from "../components/bodycontacto/BodyContacto";

export default function Page() {
  return (
    <div className={styles.page}>
      <Menu />
      <BodyContacto />
      <Footer />
    </div>
  )
}