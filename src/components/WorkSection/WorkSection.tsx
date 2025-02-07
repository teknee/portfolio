// WorkSection.tsx
import React from "react";
import styles from "./WorkSection.module.css";
import { CardGrid } from "@/components/CardGrid";
import * as Card from "@/components/Card";
import { Dialog } from "@/components/Dialog";
import { Section } from "@/components/Section";

export const WorkSection: React.FC = () => {
  return (
    <Section title="Work Experience" id="work">
      <CardGrid>
        {Array.from({ length: 10 }).map((_, index) => (
          <Card.Root key={index}>
            <Card.Body>
              <Card.Image src="path/to/image.jpg" alt="Card image" />
              <Card.Title>Position/Role {index + 1}</Card.Title>
              <Card.SubTitle>Company {index + 1}</Card.SubTitle>
              <Card.Description>Description {index + 1}</Card.Description>
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
