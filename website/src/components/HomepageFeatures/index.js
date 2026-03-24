import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const features = [
  {
    title: '',
    description: '',
  },
  {
    title: '',
    description: '',
  },
  {
    title: '',
    description: '',
  },
  {
    title: '',
    description: '',
  },
  {
    title: '',
    description: '',
  },
];

const roadmapSections = [
  {
    title: '',
    weeks: 'Weeks 1-4',
    description: '',
  },
  {
    title: '',
    weeks: 'Weeks 5-8',
    description: '',
  },
  {
    title: '',
    weeks: 'Weeks 9-11',
    description: '',
  },
  {
    title: '',
    weeks: 'Weeks 12-14',
    description: '',
  },
  {
    title: '',
    weeks: 'Weeks 15-18',
    description: '',
  },
];

function FeatureCard({title, description}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function RoadmapCard({title, weeks, description}) {
  return (
    <article className={styles.roadmapCard}>
      <p className={styles.eyebrow}>{weeks}</p>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

export default function HomepageFeatures() {
  const roadmapImageUrl = useBaseUrl('/img/roadmap.png');

  return (
    <div className={styles.pageSections}>
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Introduction</Heading>
          <p className={styles.sectionLead}>
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Core Concepts</Heading>
          <p className={styles.sectionLead}>
          </p>
          <div className={styles.cardGrid}>
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Curriculum Roadmap</Heading>
          <p className={styles.sectionLead}>
          </p>
          <div className={styles.roadmapVisual}>
            <img
              className={styles.roadmapImage}
              src={roadmapImageUrl}
              alt="Visual roadmap showing the Media Literacy for Kids curriculum sequence"
            />
          </div>
          <div className={styles.roadmapGrid}>
            {roadmapSections.map((section, idx) => (
              <RoadmapCard key={idx} {...section} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <Heading as="h2">Start Teaching Media Literacy</Heading>
          <p className={styles.sectionLead}>
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/week1">
              Begin Week 1
            </Link>
          </div>
          <p className={styles.feedbackPrompt}>
            Found a mistake or have a suggestion?{' '}
            <Link to="https://github.com/zcohen-nerd/media_literacy_for_kids/issues">
              Open an issue on GitHub.
            </Link>
          </p>
          <div className={styles.versionNote}>
            <p className={styles.versionLabel}>Version 1.0</p>
            <p>
              This curriculum is an open project and will continue to improve as
              teachers and families use it.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
