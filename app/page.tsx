"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import Github from "./components/icons/Github";
import LinkedIn from "./components/icons/LinkedIn";
import ProfileIcon from "@/app/assets/M@Icon.png";
import { Skeleton, Title } from "@mantine/core";
import HomeImage from "./components/HomeImage";
import { useState } from "react";

export default function Home() {
  const [avatarLoading, setAvatarLoading] = useState(true);
  return (
    <main>
      <div className={`${styles.hero}`}>
        <div className={`${styles.hero_left}`}>
          <Skeleton visible={avatarLoading} circle={true} height={150}>
            <Image
              src={ProfileIcon}
              alt={"Matt Icon"}
              width={150}
              height={150}
              className={`${styles.hero_profile}`}
              onLoad={() => {
                setAvatarLoading(false);
              }}
            />
          </Skeleton>
        </div>
        <div className={`${styles.hero_right}`}>
          <div className={`${styles.hero_text}`}>
            <Title c="white">Matt Gefen</Title>
            <div className={`${styles.hero_subtitle}`}>
              <Title order={3} c="teal.2" className={`${styles.rotating_text}`}>
                Full-Stack Engineer
              </Title>
              <Title order={3} c="teal.2" className={`${styles.rotating_text}`}>
                Lifelong Learner
              </Title>
              <Title order={3} c="teal.2" className={`${styles.rotating_text}`}>
                Problem Solver
              </Title>
            </div>
            <div className={`${styles.social_links}`}>
              <Link
                href={"https://github.com/matt-gefen"}
                target="_blank"
                className={`${styles.social_link}`}
              >
                <Github />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/mattgefen/"}
                target="_blank"
                className={`${styles.social_link}`}
              >
                <LinkedIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.main_body}`}>
        <p>
          Hi, I&apos;m Matt Gefen! I&apos;m a developer living in Boulder, CO
          currently working at{" "}
          <span>
            <Link
              className={`${styles.embedded_link}`}
              href={"https://www.assemblyai.com/"}
            >
              AssemblyAI
            </Link>
          </span>
          . I work to craft seamless web experiences for people using Assembly
          to solve real problems.
        </p>
        <p>
          When I&apos;m not working, I&apos;m likely outside with my partner
          Olivia and our dog Basil, playing a tabletop game, or reading a book.
        </p>
        <p>
          Reach out here:{" "}
          <Link
            className={`embedded_link`}
            href={"mailto:matt.gefen@pm.me"}
            target="_blank"
          >
            matt.gefen@pm.me
          </Link>
        </p>
        <div className={`${styles.image_container}`}>
          <HomeImage src={"/wedding.png"} />
          <HomeImage src={"/rockies.png"} />
          <HomeImage src={"/dog.png"} />
          <HomeImage src={"/hike.png"} />
        </div>
      </div>
    </main>
  );
}
