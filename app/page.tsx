import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Matt Gefen Landing</h1>
      <div>Landing Page content</div>
      <div>Landing Page Footer</div>
    </main>
  );
}
