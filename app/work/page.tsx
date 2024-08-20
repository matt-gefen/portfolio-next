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
          Here's what I've done so far:
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
            Full-Stack Engineer
          </p>
          <p>
            A whole paragraph here about rtn and my  contribution
          </p>
        </div>
        <hr className="solid_line"/>
        <div className={`${styles.work_body_child}`}>
          <h2 className={`${styles.work_company}`}>
            <Link href='https://yearup.org/' target='_blank'>
              Year Up
            </Link>
          </h2>
          <p className={`${styles.work_role}`}>
            Analytics Engineer
          </p>
          <p>
            A whole paragraph here about YU and my contribution
          </p>
        </div>
      </div>
    </main>
  );
}
