'use client';
import Link from 'next/link';
import styles from './page.module.css'
import ArrowOut from '../components/icons/ArrowOut';

export default function Projects() {
  return (
    <main>
      <div className={`${styles.hero}`}>
        <h1 className={`${styles.hero_header}`}>Projects</h1>
        <p className={`${styles.hero_text}`}>
          Some things that I've worked on
        </p>
      </div>
      <hr className="solid_line"/>
      <div className={`${styles.projects_body}`}>
        <div className={`${styles.projects_body_child}`}>
          <h2 className={`${styles.project_title}`}>
            <Link href='https://roadtripnation.com/' target='_blank'>
              Roadtrip Nation
            </Link>
          </h2>
          <div className={`${styles.project}`}>
            <h3>Skills Navigator</h3>
          </div>
          <div className={`${styles.project}`}>
            <h3>Leader Profiles</h3>
          </div>
          <div className={`${styles.project}`}>
            <h3>Roadtrip Nation Experience Course</h3>
          </div>
          
          
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
            <div className={`${styles.project_stack}`}>
              <p>Typescript</p>
              <p>Next.js</p>
              <p>Markdown</p>
            </div>
            <div className={`${styles.project_description}`}>
              <p>
                A <span><Link className={'embedded_link'} href={'https://radiant-hack.vercel.app/'} target='_blank'>WIP documentation site</Link></span> for ttrpg house rules.
              </p>
              <p>Based on The Black Hack and made with Nextra.</p>
            </div>
          </div>
        </div>
        <div className={`${styles.project}`}>
          <h3>
            Pong
          </h3>
          <div className={`${styles.project_body}`}>
            <div className={`${styles.project_stack}`}>
              <p>C#</p>
              <p>Unity Game Engine</p>
            </div>
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
            <div className={`${styles.project_stack}`}>
              <p>Python</p>
              <p>Django</p>
              <p>PostgreSQL</p>
            </div>
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
            <div className={`${styles.project_stack}`}>
              <p>Javascript</p>
              <p>MongoDB</p>
              <p>Express</p>
            </div>
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
