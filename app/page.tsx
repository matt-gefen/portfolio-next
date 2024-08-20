import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Github from "./components/icons/Github";
import LinkedIn from "./components/icons/LinkedIn";
import ProfileIcon from "@/app/assets/M@Icon.png"
import Mail from "./components/icons/Mail";

export default function Home() {
  return (
    <main>
      <div className={`${styles.hero}`}>
        <div className={`${styles.hero_left}`}>
          <Image src={ProfileIcon} alt={"Matt Icon"} width={150} height={150} className={`${styles.hero_profile}`}/>
        </div>
        <div className={`${styles.hero_right}`}>
          <div className={`${styles.hero_text}`}>
            <h1>Matt Gefen</h1>
            <div className={`${styles.hero_subtitle}`}>
              <h2 className={`${styles.rotating_text}`}>Full-Stack Engineer</h2>
              <h2 className={`${styles.rotating_text}`}>Lifelong Learner</h2>
              <h2 className={`${styles.rotating_text}`}>Problem Solver</h2>
            </div>
            <div className={`${styles.social_links}`}>
            <Link href={'https://github.com/matt-gefen'} target="_blank" className={`${styles.social_link}`}>
              <Github/>
            </Link>
            <Link href={'https://www.linkedin.com/in/mattgefen/'} target="_blank" className={`${styles.social_link}`}>
              <LinkedIn/>
            </Link>
            {/* <Link href={'mailto: matt.gefen@gmail.com'} target="_blank" className={`${styles.social_link}`}>
              <Mail/>
            </Link> */}
          </div>
          </div>
        </div>
      </div>
      <div className={`${styles.main_body}`}>
        <p>
          {"Hi, I\'m Matt Gefen! I\'m a developer currently working at "}<span><Link className={`${styles.embedded_link}`} href={'roadtripnation.com'}>Roadtrip Nation</Link></span> using Typescript, Next.js, and MongoDB to craft impactful software.
        </p>
        <p>
          I create accessible and educational experiences using best-in-class video content. These tools enable students looking for passion in their careers to find guidance fit for them.
        </p>
        <p>
          Talk to me about tabletop games, books, video-games, and the outdoors!
        </p>
      </div>
    </main>
  );
}
// to build accessible, educational experiences for students looking for career guidance.