import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const features = [
  {
    title: 'All Media is Constructed',
    description:
      'Content doesn\'t just "happen." It is designed by someone with a specific goal. Every choice — from the camera angle to the background music — is meant to make you feel something.',
  },
  {
    title: 'The Incentive Dictates the Signal',
    description:
      'To understand a message, follow the money. If the content is free, your attention is the product being sold. Students learn to ask: is the creator trying to inform, to sell, or to enrage?',
  },
  {
    title: 'Algorithms Optimize for Engagement, Not Truth',
    description:
      'Digital platforms are designed to keep you watching. Algorithms push high-emotion content because it gets more clicks — whether or not it is accurate or valuable.',
  },
  {
    title: 'Context is the Metadata of Truth',
    description:
      'A video clip or a quote without its original context can mean anything. You can\'t judge information fairly if you don\'t know where it came from and what surrounds it.',
  },
  {
    title: 'Sharing is a "Write" Operation',
    description:
      'When you like, share, or comment, you aren\'t just watching — you are amplifying. Every share sends a message further into the network. Students learn the responsibility of spreading information.',
  },
];

const roadmapSections = [
  {
    title: 'The Anatomy of a Message',
    weeks: 'Weeks 1–4',
    description:
      'Deconstructing Construction — Students look at the "engineering" of media. We analyze how lighting, editing, and word choice change how a story feels.',
  },
  {
    title: 'The Attention Economy',
    weeks: 'Weeks 5–8',
    description:
      'The Monetization Protocol — How do YouTube, TikTok, and news sites stay in business? We explore clickbait, ads, and the business model behind "free" content.',
  },
  {
    title: 'Verification & Debugging',
    weeks: 'Weeks 9–11',
    description:
      'Signal-to-Noise Filtering — Students learn the tools of the trade: reverse image searches, lateral reading, and checking for manipulated or out-of-context media.',
  },
  {
    title: 'The Algorithmic Echo',
    weeks: 'Weeks 12–14',
    description:
      'Network Feedback Loops — We explore filter bubbles, confirmation bias, and how the "software" of a feed learns what you like and stops showing you anything else.',
  },
  {
    title: 'Intentional Production',
    weeks: 'Weeks 15–18',
    description:
      'Responsible Output — Students create their own media with a clear plan: Who is the audience? What is the goal? How do we build something honest and valuable?',
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
            Most kids (and adults) consume media as a passive, read-only operation.
            This curriculum shifts students into the role of <strong>analyst</strong>.
            They learn to see media not as a window into reality, but as a series of
            designed artifacts — built by people with specific goals, delivered through
            systems with their own incentives.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Core Concepts</Heading>
          <p className={styles.sectionLead}>
            These five mental models move students from being "users" to being
            "analysts" of the information they consume.
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
            An 18-week progression that moves from the mechanics of how messages
            are built to the dynamics of the digital network that delivers them.
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
            Each week includes two guided sessions and one independent session.
            No prior media expertise required — just curiosity and conversation.
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
