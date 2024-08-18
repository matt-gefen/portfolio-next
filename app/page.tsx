import Link from "next/link";
import styles from "./page.module.css";
import Github from "./components/icons/Github";
import LinkedIn from "./components/icons/LinkedIn";
import Mail from "./components/icons/Mail";

export default function Home() {
  return (
    <main>
      <div className={`${styles.hero}`}>
        <div className={`${styles.hero_text}`}>
          <h1>Matt Gefen</h1>
          <h2>Full-Stack Engineer</h2>
        </div>
        <div className={`${styles.social_links}`}>
          <Link href={'https://github.com/matt-gefen'} target="_blank" className={`${styles.social_link}`}>
            <Github/>
            Github
          </Link>
          <Link href={'https://www.linkedin.com/in/mattgefen/'} target="_blank" className={`${styles.social_link}`}>
            <LinkedIn/>
            LinkedIn
          </Link>
          {/* <Link href={'mailto: matt.gefen@gmail.com'} target="_blank" className={`${styles.social_link}`}>
            <Mail/>
            Mail
          </Link> */}
        </div>
      </div>
      <div>
        <p>
          {`Based in Boulder, Colorado with a passion for learning and problem solving. I'm currently working at Roadtrip Nation to build accessible, educational web-based experiences for students looking for career guidance. Talk to me about hiking, books, video games, and D&D.`}
        </p>
      </div>
      <div>Landing Page Footer</div>
    </main>
  );
}
