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
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.main_body}`}>
        <p>
          Hi, I&apos;m Matt Gefen! I&apos;m a developer living in Boulder, CO currently working at <span><Link className={`${styles.embedded_link}`} href={'roadtripnation.com'}>Roadtrip Nation</Link></span> crafting impactful software.
        </p>
        <p>
          I create accessible and educational experiences using best-in-class video content. These tools enable students looking for passion in their careers to find guidance fit for them.
        </p>
        <p>
          When I&apos;m not working, I&apos;m likely outside with my partner Olivia and our dog Basil, playing a tabletop game, or reading a book.
        </p>
        {/* <p>
         I'd love to talk to you about technology, tabletop games, fantasy books, video-games, and the outdoors!
        </p> */}
        <p>Reach out here: <Link className={`embedded_link`} href={'mailto:matt.gefen@gmail.com'} target="_blank">matt.gefen@gmail.com</Link></p>
        <div className={`${styles.image_container}`}>
          <div className={`${styles.image_portrait}`} style={{backgroundImage: "url(https://1u4j97n0laxnso2y.public.blob.vercel-storage.com/IMG_0979-dy2hRgg2FFhZLO5O2xxkCGqfdfdN8L.png)"}}/>
          <div className={`${styles.image_portrait}`} style={{backgroundImage: "url(https://1u4j97n0laxnso2y.public.blob.vercel-storage.com/IMG_4906-RUBVCAMlUqdymgv6f3ldVLgl6NH8bo.png)"}}/>
          <div className={`${styles.image_portrait}`} style={{backgroundImage: "url(https://1u4j97n0laxnso2y.public.blob.vercel-storage.com/IMG_8246-xJuE3IPkRHGDxb4QAsGAsoxxBuSkEa.png)"}}/>
          <div className={`${styles.image_portrait}`} style={{backgroundImage: "url(https://1u4j97n0laxnso2y.public.blob.vercel-storage.com/IMG_8164-k5xGDKVuYIghCJ5EbJ9o0nYSb3zWOO.png)"}}/>
        </div>
      </div>
    </main>
  );
}