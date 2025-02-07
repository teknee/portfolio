// WorkSection.tsx
import React from "react";
import styles from "./WorkSection.module.css";
import { CardGrid } from "@/components/CardGrid";
import * as Card from "@/components/Card";

export const WorkSection: React.FC = () => {
  return (
    <section id="work" className={styles.section}>
      <h2>Work</h2>
      <CardGrid>
        {Array.from({ length: 10 }).map((_, index) => (
          <Card.Root key={index}>
            <Card.Body>
              <Card.Image src="path/to/image.jpg" alt="Card image" />
              <Card.Title>Title {index + 1}</Card.Title>
              <Card.Description>Description {index + 1}</Card.Description>
            </Card.Body>
            <Card.Footer>
              <button className={styles.button}>See more</button>
            </Card.Footer>
          </Card.Root>
        ))}
      </CardGrid>
    </section>
  );
};

export default WorkSection;
