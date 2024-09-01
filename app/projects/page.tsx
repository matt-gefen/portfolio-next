'use client';
import Link from 'next/link';
import styles from './page.module.css'
import ArrowOut from '../components/icons/ArrowOut';

export default function Projects() {
  return (
    <main>
      <div className={`${styles.hero}`}>
        <h1 className={`${styles.hero_header}`}>Projects</h1>
        {/* <p className={`${styles.hero_text}`}>
          Some things that I've worked on
        </p> */}
        <hr className="solid_line"/>
      </div>
      <div className={`${styles.projects_body}`}>
        <div className={`${styles.projects_body_child}`}>
          <h2 className={`${styles.project_title}`}>
            <Link href='https://roadtripnation.com/' target='_blank'>
              Roadtrip Nation
            </Link>
          </h2>
          <div className={`${styles.project}`}>
            <h3>Skills Navigator Workforce Hubs</h3>
            <div className={`${styles.project_body}`}>
            <div className={`${styles.project_description}`}>
            <p>
               A set of modular career hubs that provide students and young adults with tools to explore career options in their local communities. Each hub comes with a custom-tailored pathways experience that begins with a short quiz.
            </p>
            <br></br>
            <span><Link className={'embedded_link'} href={'https://roadtripnation.com/workforce/phl'} target='_blank'>Brighten Your Future Community Hub</Link></span>
            <span><Link className={'embedded_link'} href={'https://roadtripnation.com/workforce/wichita'} target='_blank'>Wichita Workforce Hub</Link></span>
            </div>
          </div>
          </div>
          <div className={`${styles.project}`}>
            <h3>Leader Profiles</h3>
            <div className={`${styles.project_body}`}>
            <div className={`${styles.project_description}`}>
            <p>
              At Roadtrip Nation, we've built an archive of over 8,000 interviews with unique leaders across the US, each detailing a one of a kind career journey. I spearheaded implementation of a new, modern, design that showcases these leaders.
            </p>
            <br></br>
            <span><Link className={'embedded_link'} href={'https://roadtripnation.com/leader/john-legend'} target='_blank'>John Legend</Link>, Singer/Songwriter</span>
            <span><Link className={'embedded_link'} href={'https://roadtripnation.com/leader/vonya-quarles'} target='_blank'>Vonya Quarles</Link>, Executive Director of Starting Over, Inc.</span>
            <span><Link className={'embedded_link'} href={'https://roadtripnation.com/leader/jimmy-chin'} target='_blank'>Jimmy Chin</Link>, Professional Mountain Climber/Filmmaker/Photographer</span>
            </div>
          </div>

          </div>
          <div className={`${styles.project}`}>
            <h3>Roadtrip Nation Experience Course</h3>
            <div className={`${styles.project_body}`}>
            <div className={`${styles.project_description}`}>
            <p>
               An in-depth, classroom-based immersive for students and educators. This course guides students through a reflection on their own skills and connects those with career options and real-world stories from the RTN interview archive.
            </p>
            <br></br>
            <span><Link className={'embedded_link'} href={'https://roadtripnation.com/experience/course/rtn/overview'} target='_blank'>RTN Core Course</Link></span>
 
            </div>
          </div>

          </div>
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
              {/* <li>
                <div className={`${styles.project_stack_element}`}>Storybook</div>
              </li> */}
            </ul>

          
        <hr className="solid_line"/>
        <div className={`${styles.projects_body_child}`}>
          <h2 className={`${styles.project_title}`}>
            <Link href='https://github.com/matt-gefen/' target='_blank'>
              Side Projects
            </Link>
          </h2>
          <div className={`${styles.project}`}>
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


            <div className={`${styles.project_description}`}>
              <p>
                A <span><Link className={'embedded_link'} href={'https://radiant-hack.vercel.app/'} target='_blank'>WIP documentation site</Link></span> for ttrpg house rules.
              </p>
              <br></br>
              <p>Based on The Black Hack and made with Nextra.</p>
            </div>
          </div>
        </div>
        <div className={`${styles.project}`}>
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
        {/* <div className={`${styles.project}`}>
          <h3>
            Junction
          </h3>
          <div className={`${styles.project_body}`}>
            <div className={`${styles.project_stack}`}>
              <p>React</p>
              <p>MongoDB</p>
              <p>Express</p>
            </div>
            <div className={`${styles.project_description}`}>
            <p>
              Super simple MERN <span><Link className={'embedded_link'} href={'https://github.com/matt-gefen/junction'} target='_blank'>Community Builder</Link></span>.
            </p>
            <p>Built as a team project at General Assembly.</p>
            </div>
          </div>
        </div> */}
        <div className={`${styles.project}`}>
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
        <div className={`${styles.project}`}>
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

          {/* <h3>
            <Link href={'https://github.com/matt-gefen/rm_pong'} target='_blank'>Junction</Link>
          </h3>
          <h3>
            <Link href={'https://github.com/matt-gefen/rm_pong'} target='_blank'>Poemverse</Link>
          </h3>
          <h3>
            <Link href={'https://github.com/matt-gefen/rm_pong'} target='_blank'>BirbWatcher</Link>
          </h3> */}
        </div>
        </div>
      </div>
    </main>
  );
}
