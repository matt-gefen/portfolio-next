'use client';
import Link from 'next/link';
import styles from './page.module.css'
import ArrowOut from '../components/icons/ArrowOut';
import Image from 'next/image';
import ArrowUp from '../components/icons/ArrowUp';

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
        <div className={`${styles.projects_body_child}`} id='Skills Navigator'>
          <div className={`${styles.project} ${styles.project_adjusted_grid}`}>
            <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://roadtripnation.com/workforce/phl'}
              target='_blank'
            >
              Skills Navigator Workforce Hubs
              <span className={`${styles.project_icon}`}>
                <ArrowUp size='18px' />
              </span>
            </Link>
            <div className={`${styles.project_body}`}>
              {/* <ul className={`${styles.project_stack}`}>
                <li>
                  <div className={`${styles.project_stack_element}`}>TypeScript</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>Next.js</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>MongoDB</div>
                </li>
              </ul> */}
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
        <div className={`${styles.projects_body_child}`} id='Leader Profiles'>
          <div className={`${styles.project} ${styles.project_adjusted_grid}`}>
            <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://roadtripnation.com/leader/john-legend'}
              target='_blank'
            >
              Leader Profiles
              <span className={`${styles.project_icon}`}>
                <ArrowUp size='18px' />
              </span>
            </Link>
            <div className={`${styles.project_body}`}>
              {/* <ul className={`${styles.project_stack}`}>
                <li>
                  <div className={`${styles.project_stack_element}`}>TypeScript</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>Next.js</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>MongoDB</div>
                </li>
              </ul> */}
              <div className={`${styles.project_description}`}>
                <p>
                  At Roadtrip Nation, we&apos;ve built an archive of over 8,000 interviews with unique leaders across the US, each detailing a one of a kind career journey. I spearheaded implementation of a new, modern, design that showcases these leaders.
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
        <div className={`${styles.projects_body_child}`} id='rtne'>
          <div className={`${styles.project} ${styles.project_adjusted_grid}`}>
            <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://roadtripnation.com/experience/course/rtn/overview'}
              target='_blank'
            >
              Roadtrip Nation Experience Course
              <span className={`${styles.project_icon}`}>
                <ArrowUp size='18px' />
              </span>
            </Link>
            <div className={`${styles.project_body} ${styles.project_non_grid}`}>
              {/* <ul className={`${styles.project_stack}`}>
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
              </ul> */}
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
        <div className={`${styles.projects_body_child}`} id='rtn skills'>
          <div className={`${styles.project} ${styles.project_skills_only}`}>
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
          </div>
        </div>
        <hr className="solid_line" />
        <div className={`${styles.projects_body_child}`} id='Radiant Hack'>
          <div className={`${styles.project} ${styles.project_non_grid}`}>
            <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://radiant-hack.vercel.app/'}
              target='_blank'
            >
              Radiant Hack
              <span className={`${styles.project_icon}`}>
                <ArrowUp size='18px' />
              </span>
            </Link>
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

              <div className={`${styles.project_description}`}>
                <p>
                  A WIP documentation site for ttrpg house rules.
                </p>
                <p>Based on <i>The Black Hack</i> and made with <i>Nextra</i>.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`} id='Portfilio 1'>
          <div className={`${styles.project} ${styles.project_non_grid}`}>
            <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://mattgefen.netlify.app/'}
              target='_blank'
            >
              Original Portfolio Site
              <span className={`${styles.project_icon}`}>
                <ArrowUp size='18px' />
              </span>
            </Link>
            <div className={`${styles.project_body}`}>
              <ul className={`${styles.project_stack}`}>
                <li>
                  <div className={`${styles.project_stack_element}`}>React</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>HTML & SCSS</div>
                </li>
                <li>
                  <div className={`${styles.project_stack_element}`}>Netlify</div>
                </li>
              </ul>

              <div className={`${styles.project_description}`}>
                <p>
                  The previous iteration of my personal portfolio website!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`} id='Pong'>
          <div className={`${styles.project} ${styles.project_non_grid}`}>
            <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://github.com/matt-gefen/rm_pong'}
              target='_blank'
            >
              Pong
              <span className={`${styles.project_icon}`}>
                <ArrowUp size='18px' />
              </span>
            </Link>
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
                  Simple game of Pong, complete with music. Downloadable on MacOS.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`} id='Poemverse'>
          <div className={`${styles.project} ${styles.project_non_grid}`}>
            <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://github.com/matt-gefen/poemverse'}
              target='_blank'
            >
              Poemverse
              <span className={`${styles.project_icon}`}>
                <ArrowUp size='18px' />
              </span>
            </Link>
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
                  Full-stack poetry anthology builder using poems sources from the <i>PoetryDB</i> api.
                </p>
                <p>Currently offline.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.projects_body_child}`} id='BirbWatcher'>
          <div className={`${styles.project} ${styles.project_non_grid}`}>
            <Link
              className={`embedded_link ${styles.project_link}`}
              href={'https://github.com/matt-gefen/birb-watcher'}
              target='_blank'
            >
              Birbwatcher
              <span className={`${styles.project_icon}`}>
                <ArrowUp size='18px' />
              </span>
            </Link>
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
                  Personal bird watching log with bird taxonomy and species detail sourced from Ebird.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
