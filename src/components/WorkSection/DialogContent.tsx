import styles from "./DialogContent.module.css";
import { WorkDataType } from "./WorkSection";
import { Image } from "@/components/Card";
import { Pill } from "@/components/Pill";

export type DialogContentProps = {
  entry: WorkDataType;
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className={styles.section}>
    <h3 className={styles.header}>{title}</h3>
    {children}
  </section>
);

const PillSection = ({ title, items }: { title: string; items: string[] }) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <Section title={title}>
      <div className={styles.pillContainer}>
        {items.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>
    </Section>
  );
};

const AccomplishmentSection = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  if (items.length === 0) {
    return null;
  }
  return (
    <Section title={title}>
      <ul className={styles.accomplishments}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Section>
  );
};

export const DialogContent = ({ entry }: DialogContentProps) => (
  <article className={styles.container}>
    <div className={styles.header}>
      <div className={styles.image}>
        <Image
          src={`/images/logos/${entry.image}`}
          alt={`${entry.company} logo`}
        />
      </div>
      <div className={styles.text}>
        <h2 className={styles.position}>{entry.position}</h2>
        <h3 className={styles.company}>{entry.company}</h3>
        <p className={styles.dates}>{entry.dateRange}</p>
      </div>
    </div>
    <div className={styles.content}>
      <PillSection title="Technologies" items={entry.technologies} />
      <PillSection title="Skills Developed" items={entry.skills} />
      <AccomplishmentSection
        title="Accomplishments"
        items={entry.accomplishments || []}
      />
    </div>
  </article>
);
