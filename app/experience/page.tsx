'use client';
import Link from 'next/link';
import styles from '../projects/page.module.css'
import ArrowUp from '../components/icons/ArrowUp';

export default function Experience() {
  return (
    <main>
      <div className={`${styles.hero}`}>
        <h1 className={`${styles.hero_header}`}>Experience</h1>
        {/* <p className={`${styles.hero_text}`}>
          Some things that I've worked on
        </p> */}
        <hr className="solid_line" />
      </div>
      <div className={`${styles.projects_body}`}>
        <div className={`${styles.projects_body_child}`}>
          <div className={`${styles.project_timeline}`}>
            <h4>2022 - Present</h4>
          </div>
          <div className={`${styles.project}`}>
            <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://roadtripnation.com/'}
              target='_blank'
            >
                Full-Stack Engineer at Roadtrip Nation
                <span className={`${styles.project_icon}`}>
                  <ArrowUp size='18px'/>
                </span>
            </Link>
            <div className={`${styles.project_body}`}>
              <ul className={`${styles.project_stack}`}>
                <li>
                  <div className={`${styles.project_stack_element}`}>JavaScript</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>TypeScript</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>Next.js</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>HTML & SCSS</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>React</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>MongoDB</div>
                </li>
              </ul>
              <div className={`${styles.project_description}`}>
                <p>
                  In this role, I've specialized in online learning platform development. I build interactive and accessible courses using React/Typescript. Other key aspects of the role have included building robust API infrastructure and an innovative vertical video playlist feature. Recently, I have been leading the migration to Next.js 14 and Typescript for enhanced performance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`}>
          <div className={`${styles.project_timeline}`}>
            <h4>2020 - 2021</h4>
          </div>

          <div className={`${styles.project}`}>
          <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://yearup.org/'}
              target='_blank'
            >
                Analytics Engineer at YearUp
                <span className={`${styles.project_icon}`}>
                  <ArrowUp size='18px'/>
                </span>
            </Link>
            <div className={`${styles.project_body}`}>
              <ul className={`${styles.project_stack}`}>
                <li>
                  <div className={`${styles.project_stack_element}`}>SQL</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>dbt</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>Snowflake</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>Tableau</div>
                </li>
              </ul>
              <div className={`${styles.project_description}`}>
                <p>
                  Some text about Year Up
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={`${styles.hero}`}>
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
          <div className={`${styles.work_text_container}`}>
          <p className={`${styles.work_text}`}>
            In this role, I've specialized in online learning platform development. I build interactive and accessible courses using React/Typescript. Other key aspects of the role have included building robust API infrastructure and an innovative vertical video playlist feature. Recently, I have been leading the migration to Next.js 14 and Typescript for enhanced performance.
          </p>
          </div>
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
      </div> */}
    </main>
  );
}
