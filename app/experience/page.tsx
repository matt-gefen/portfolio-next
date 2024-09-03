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
        <div className={`${styles.projects_body_child}`} id='Full Stack Engineer'>
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
                  In this role, I&apos;ve specialized in online learning platform development. I build interactive and accessible courses using React/Typescript. Other key aspects of the role have included building robust API infrastructure and an innovative vertical video playlist feature. Recently, I have been leading the migration to Next.js 14 and Typescript for enhanced performance.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`} id='Analytics Engineer'>
          <div className={`${styles.project_timeline}`}>
            <h4>2020 - 2021</h4>
          </div>

          <div className={`${styles.project}`}>
          <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://yearup.org/'}
              target='_blank'
            >
                Analytics Engineer at Year Up
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
                  I standardized data structures and crafted conformed dimensional models using dbt, allowing teams to access and use data more effectively. On top of this, I build decision support tools and accessible dashboards for teams across the organization. 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`} id='Sales and Market Research Analyst'>
          <div className={`${styles.project_timeline}`}>
            <h4>2018 - 2020</h4>
          </div>

          <div className={`${styles.project}`}>
          <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://yearup.org/'}
              target='_blank'
            >
                Sales and Market Research Analyst at Year Up
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
                  Automated the reporting of key sales metrics for internal leadership and board members using SQL and Python. I also developed standardized analytics tools in Tableau, providing corporate engagement specialists with accessible, real-time insights into demand KPIs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`} id='Marketing Analytics and Data Consulting Analyst'>
          <div className={`${styles.project_timeline}`}>
            <h4>2017 - 2018</h4>
          </div>

          <div className={`${styles.project}`}>
          <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://havasmedia.com/'}
              target='_blank'
            >
                Data Consulting Analyst at Havas Media
                <span className={`${styles.project_icon}`}>
                  <ArrowUp size='18px'/>
                </span>
            </Link>
            <div className={`${styles.project_body}`}>
              <ul className={`${styles.project_stack}`}>
                <li>
                  <div className={`${styles.project_stack_element}`}>Excel</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>Google Tag Manager/Analytics</div>
                </li>
              </ul>
              <div className={`${styles.project_description}`}>
                <p>
                  I analyzed the impact of media and marketing strategies across all channels for national retail clients, driving key optimizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
