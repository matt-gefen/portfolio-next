"use client";
import Link from "next/link";
import styles from "../projects/page.module.css";
import ArrowUp from "../components/icons/ArrowUp";
import experienceData from "../data/experience.json";

export default function Experience() {
  interface ExperienceData {
    id: string;
    title: string;
    subtitle: string;
    time: string;
    link: string;
    description: string;
    skills: string[];
  }

  const experiences = experienceData.experiences as unknown as ExperienceData[];
  const items = experiences.map((item) => {
    return (
      <div
        key={item.id}
        className={`${styles.projects_body_child}`}
        id="Software Engineer"
      >
        <div className={`${styles.project_timeline}`}>
          <h4>{item.time}</h4>
        </div>
        <div className={`${styles.project}`}>
          <Link
            className={`embedded_link ${styles.project_link}`}
            href={item.link}
            target="_blank"
          >
            {item.title} at {item.subtitle}
            <span className={`${styles.project_icon}`}>
              <ArrowUp size="18px" />
            </span>
          </Link>
          <div className={`${styles.project_body}`}>
            <ul className={`${styles.project_stack}`}>
              {item.skills.map((skill, index) => {
                return (
                  <li key={index}>
                    <div className={`${styles.project_stack_element}`}>
                      {skill}
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={`${styles.project_description}`}>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <main>
      <div className={`${styles.hero}`}>
        <h1 className={`${styles.hero_header}`}>Experience</h1>
        <hr className="solid_line" />
      </div>
      <div className={`${styles.projects_body}`}>{items}</div>
    </main>
  );
}
