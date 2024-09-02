'use client';
import Link from 'next/link';
import styles from './page.module.css'
import ArrowOut from '../components/icons/ArrowOut';
import Image from 'next/image';

export default function Projects() {
  return (
    <main>
      <div className={`${styles.hero}`}>
        <h1 className={`${styles.hero_header}`}>Projects</h1>
        {/* <p className={`${styles.hero_text}`}>
          Some things that I've worked on
        </p> */}
        <hr className="solid_line" />
      </div>
      <div className={`${styles.projects_body}`}>
        <div className={`${styles.projects_body_child}`}>
          <div className={`${styles.project} ${styles.project_adjusted_grid}`}>
            <h3>Skills Navigator Workforce Hubs</h3>
            <div className={`${styles.project_body}`}>
            <ul className={`${styles.project_stack}`}>
            <li>
            <div className={`${styles.project_stack_element}`}>TypeScript</div>
          </li>
          <li>
            <div className={`${styles.project_stack_element}`}>Next.js</div>
          </li>
          <li>
            <div className={`${styles.project_stack_element}`}>MongoDB</div>
          </li>
        </ul>
              <div className={`${styles.project_description}`}>
                <p>
                  A set of modular career hubs that provide students and young adults with tools to explore career options in their local communities. Each hub comes with a custom-tailored pathways experience that begins with a short quiz.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.project_image_link_container}`}>
                <Link
                  className={`${styles.project_image_link}`}
                  href={'https://roadtripnation.com/workforce/phl'}
                  target='_blank'
                  style={{
                    backgroundImage: `linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0),
                      rgba(0, 0, 0, 1)
                    ), url(https://1u4j97n0laxnso2y.public.blob.vercel-storage.com/phl%20image-c38BIz2KyUlYpokU5Bv5suzixJVJVj.jpg)`}}
                  >
                  <p>Brighen Your Future Hub</p>
                </Link>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`}>
          <div className={`${styles.project} ${styles.project_adjusted_grid}`}>
            <h3>Leader Profiles</h3>
            <div className={`${styles.project_body}`}>
            <ul className={`${styles.project_stack}`}>
          <li>
            <div className={`${styles.project_stack_element}`}>TypeScript</div>
          </li>
          <li>
            <div className={`${styles.project_stack_element}`}>Next.js</div>
          </li>
          <li>
            <div className={`${styles.project_stack_element}`}>MongoDB</div>
          </li>
        </ul>
              <div className={`${styles.project_description}`}>
                <p>
                  At Roadtrip Nation, we've built an archive of over 8,000 interviews with unique leaders across the US, each detailing a one of a kind career journey. I spearheaded implementation of a new, modern, design that showcases these leaders.
                </p>
              </div>
            </div>

          </div>
          <div className={`${styles.project_image_link_container}`}>
                <Link
                  className={`${styles.project_image_link}`}
                  href={'https://roadtripnation.com/leader/john-legend'}
                  target='_blank'
                  style={{
                    backgroundImage: `linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0),
                      rgba(0, 0, 0, 1)
                    ), url(https://1u4j97n0laxnso2y.public.blob.vercel-storage.com/John%20Legend%20Profile-DnYN7I6CxbLZuQiNZ2kuLfHrDd1p3t.webp)`}}
                  >
                  <p>John Legend Profile</p>
                </Link>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`}>
          <div className={`${styles.project} ${styles.project_adjusted_grid}`}>
            <h3>Roadtrip Nation Experience Course</h3>
            <div className={`${styles.project_body} ${styles.project_non_grid}`}>
            <ul className={`${styles.project_stack}`}>
          <li>
            <div className={`${styles.project_stack_element}`}>JavaScript</div>
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
                  An in-depth, classroom-based immersive for students and educators. This course guides students through a reflection on their own skills and connects those with career options and real-world stories from the RTN interview archive.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.project_image_link_container}`}>
                <Link
                  className={`${styles.project_image_link}`}
                  href={'https://roadtripnation.com/experience/course/rtn/overview'}
                  target='_blank'
                  style={{
                    backgroundImage: `linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0),
                      rgba(0, 0, 0, 1)
                    ), url(https://1u4j97n0laxnso2y.public.blob.vercel-storage.com/rtn%20course%20hero-WGpQUu1BWQAS1WUPhVhpgXtvVePFJV.jpg)`}}
                  >
                  <p>RTN Experience Course</p>
                </Link>
          </div>
        </div>
        <hr className="solid_line" />
        <div className={`${styles.projects_body_child}`}>
          <div className={`${styles.project} ${styles.project_non_grid}`}>
            <h3>
              Radiant Hack
            </h3>
            <div className={`${styles.project_body}`}>
              <ul className={`${styles.project_stack}`}>
                <li>
                  <div className={`${styles.project_stack_element}`}>TypeScript</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>Next.js</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>HTML & CSS</div>
                </li>
              </ul>
            </div>

            <div className={`${styles.project_description}`}>
              <p>
                A <span><Link className={'embedded_link'} href={'https://radiant-hack.vercel.app/'} target='_blank'>WIP documentation site</Link></span> for ttrpg house rules.
              </p>
              <br></br>
              <p>Based on The Black Hack and made with Nextra.</p>
            </div>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`}>
          <div className={`${styles.project} ${styles.project_non_grid}`}>
            <h3>
              Pong
            </h3>
            <div className={`${styles.project_body}`}>
              <ul className={`${styles.project_stack}`}>
                <li>
                  <div className={`${styles.project_stack_element}`}>C#</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>Unity Game Engine</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>HTML & CSS</div>
                </li>
              </ul>
              <div className={`${styles.project_description}`}>
                <p>
                  Simple game of <span><Link className={'embedded_link'} href={'https://github.com/matt-gefen/rm_pong'} target='_blank'>Pong</Link></span>, complete with music. Downloadable on MacOS.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`}>
          <div className={`${styles.project} ${styles.project_non_grid}`}>
            <h3>
              Poemverse
            </h3>
            <div className={`${styles.project_body}`}>
              <ul className={`${styles.project_stack}`}>
                <li>
                  <div className={`${styles.project_stack_element}`}>Python</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>Django</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>PostgreSQL</div>
                </li>
              </ul>
              <div className={`${styles.project_description}`}>
                <p>
                  Full-stack <span><Link className={'embedded_link'} href={'https://github.com/matt-gefen/poemverse'} target='_blank'>poetry anthology builder</Link></span> using poems sources from the PoetryDB api.
                </p>
                <p>Currently offline.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`}>
          <div className={`${styles.project} ${styles.project_non_grid}`}>
            <h3>
              BirbWatcher
            </h3>
            <div className={`${styles.project_body}`}>
              <ul className={`${styles.project_stack}`}>
                <li>
                  <div className={`${styles.project_stack_element}`}>JavaScript</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>MongoDB</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>Express</div>
                </li>
              </ul>
              <div className={`${styles.project_description}`}>
                <p>
                  Personal <span><Link className={'embedded_link'} href={'https://github.com/matt-gefen/birb-watcher'} target='_blank'>bird watching log</Link></span> with bird taxonomy and species detail sourced from Ebird.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
