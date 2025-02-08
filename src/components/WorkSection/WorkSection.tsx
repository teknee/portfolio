// WorkSection.tsx
import React from "react";
import styles from "./WorkSection.module.css";
import { CardGrid } from "@/components/CardGrid";
import * as Card from "@/components/Card";
import { Dialog } from "@/components/Dialog";
import { Section } from "@/components/Section";
import workData from "./workData.json";

type WorkDataType = {
  company: string;
  position: string;
  dateRange: string;
  image: string;
  description: string;
  skills: string[];
  technologies: string[];
};

export const WorkSection: React.FC = () => {
  return (
    <Section title="Work Experience" id="work">
      <CardGrid>
        {workData.map((entry: WorkDataType, index) => (
          <Card.Root key={index}>
            <Card.Body>
              <Card.Image
                src={`/images/logos/${entry.image}`}
                alt={`${entry.company} logo`}
              />
              <Card.SubText>{entry.dateRange}</Card.SubText>
              <Card.Title>{entry.position}</Card.Title>
              <Card.SubTitle>{entry.company}</Card.SubTitle>
              <Card.Description>{entry.description}</Card.Description>
            </Card.Body>
            <Card.Footer>
              <Dialog
                trigger={<button className={styles.button}>See more</button>}
              >
                <h2>Dialog content {index + 1}</h2>
                <p>This is content</p>
              </Dialog>
            </Card.Footer>
          </Card.Root>
        ))}
      </CardGrid>
    </Section>
  );
};

export default WorkSection;
