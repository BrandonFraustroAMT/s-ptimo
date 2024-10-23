import styles from "./page.module.css";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div className={styles.page}>
      <Menu />
    </div>
  );
}
