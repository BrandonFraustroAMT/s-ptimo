import styles from "./page.module.css";
import Menu from "./components/menu/Menu";
import BodyHome from "./components/bodyhome/BodyHome";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Menu />
      <BodyHome />
      <Footer />
    </div>
  );
}
