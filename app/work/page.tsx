'use client';
import Link from 'next/link';
import styles from './page.module.css'
import experience from '../data/experience.json'

export default function Work() {
  return (
    <main>
      <div className={`${styles.hero}`}>
        <h1 className={`${styles.hero_header}`}>Work</h1>
        <p className={`${styles.hero_text}`}>
          Making an impact is the cornerstone of my career.
        </p>
        <p className={`${styles.hero_text}`}>
          {"Here's what I've done so far:"}
        </p>
        <hr className="solid_line"/>
      </div>
      <div className={`${styles.work_body}`}>
        <div className={`${styles.work_body_child}`}>
          <h2 className={`${styles.work_company}`}>
            <Link href='https://roadtripnation.com/' target='_blank'>
              Roadtrip Nation
            </Link>
          </h2>
          <p className={`${styles.work_role}`}>
            <span>Full-Stack Engineer</span> <span>2022 - Present</span>
          </p>
          <ul className={`${styles.work_list}`}>
            <li className={`${styles.work_li}`}>
              Build interactive and accessible web courses geared towards connecting over 15,000 students annually with tangible career paths using React/Typescript.
            </li>
            <li className={`${styles.work_li}`}>
              Craft RESTful APIs and supporting data infrastructure to provide custom resources to over 30unique partners.
            </li>
            <li className={`${styles.work_li}`}>
              Architect the back end and front end of a vertical video playlist feature inspired by YouTubeShorts, enabling the presentation of over 100 hours of unique video content to more than 2,000 daily users.
            </li>
            <li className={`${styles.work_li}`}>
              Leading the refactor and migration of products to a modern codebase using Next.js 14, improving performance and maintainability with a seamless user experience.
            </li>
          </ul>
        </div>
        <hr className="solid_line"/>
        <div className={`${styles.work_body_child}`}>
          <h2 className={`${styles.work_company}`}>
            <Link href='https://yearup.org/' target='_blank'>
              Year Up
            </Link>
          </h2>
          <p className={`${styles.work_role}`}>
            <span>Analytics Engineer</span> <span>2020 - 2021</span>
          </p>
          <p className={`${styles.work_role}`}>
            <span>Sales Analytics & Market Research</span> <span>2018 - 2020</span>
          </p>
          <p>
            A whole paragraph here about YU and my contribution
          </p>
        </div>
      </div>
    </main>
  );
}
