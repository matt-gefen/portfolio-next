"use client";
import Link from "next/link";
import styles from "./page.module.css";
import ArrowUp from "../components/icons/ArrowUp";
import { Accordion, Box } from "@mantine/core";
import projectsData from "../data/projects.json";

interface ProjectData {
  id: string;
  title: string;
  items: [
    {
      name: string;
      link: string;
      description: string;
      linkName?: string;
      image?: string;
    },
  ];
}

export default function Projects() {
  const projects = projectsData.projects as ProjectData[];
  const items = projects.map((item) => {
    return (
      <Accordion.Item key={item.id} value={item.id}>
        <Accordion.Control>
          <h2>{item.title}</h2>
        </Accordion.Control>
        <Accordion.Panel>
          <div id={item.title} className={`${styles.projects_body}`}>
            {item.items.map((panel, index) => {
              return (
                <div
                  className={`${styles.projects_body_child}`}
                  id={panel.name}
                  key={index}
                >
                  <div
                    className={`${styles.project} ${styles.project_adjusted_grid}`}
                  >
                    <Link
                      className={`embedded_link ${styles.project_link}`}
                      href={panel.link}
                      target="_blank"
                    >
                      {panel.name}
                      <span className={`${styles.project_icon}`}>
                        <ArrowUp size="18px" />
                      </span>
                    </Link>
                    <div className={`${styles.project_body}`}>
                      <div className={`${styles.project_description}`}>
                        <p>{panel.description}</p>
                      </div>
                    </div>
                  </div>
                  {panel.image && (
                    <div className={`${styles.project_image_link_container}`}>
                      <Link
                        className={`${styles.project_image_link}`}
                        href={panel.link}
                        target="_blank"
                        style={{
                          backgroundImage: `linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0),
                      rgba(0, 0, 0, 1)
                    ), url("${panel.image}")`,
                        }}
                      >
                        <p>{panel.linkName ?? ""}</p>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    );
  });
  return (
    <Box>
      <div className={`${styles.hero}`}>
        <h1 className={`${styles.hero_header}`}>Projects</h1>
        <hr className="solid_line" />
      </div>
      <div>
        <Accordion defaultValue={"aai"} variant="separated" radius="sm">
          {items}
        </Accordion>
      </div>
    </Box>
  );
}
