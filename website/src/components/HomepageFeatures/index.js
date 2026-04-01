import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import EcosystemLinks from '@theme/EcosystemLinks';
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
      'To understand a message, follow the money. If the content is free, ask what\'s paying for it \u2014 often, your attention is the product being sold. Students learn to ask: is the creator trying to inform, to sell, or to provoke?',
  },
  {
    title: 'Algorithms Tend to Optimize for Engagement',
    description:
      'Digital platforms tend to prioritize content that keeps users engaged. This can mean high-emotion content gets promoted over more accurate or balanced material \u2014 not through malice, but through the mechanics of engagement-based ranking.',
  },
  {
    title: 'Context is the Metadata of Truth',
    description:
      'A video clip or a quote without its original context can mean anything. You can\'t judge information fairly if you don\'t know where it came from and what surrounds it.',
  },
  {
    title: 'Sharing is a "Write" Operation',
    description:
      'When you like, share, or comment, you aren\'t just watching \u2014 you are amplifying a message, much like writing changes a document. Every share sends information further into the network, and students learn the responsibility that comes with it.',
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
            Most kids (and adults) take in media without thinking about where it came from,
            why it was made, or how it was designed to make them feel. This curriculum helps
            young learners become thoughtful, active readers of the media around them.
            They learn to notice the choices behind every message — who made it, why, and
            what techniques were used — and to check information carefully before trusting
            or sharing it.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Part of the Literacy for Kids Ecosystem</Heading>
          <p className={styles.sectionLead}>
            This curriculum is part of{' '}
            <Link to="https://literacy-for-kids.github.io/literacy_for_kids/">Literacy for Kids</Link>,
            a collection of open-source curricula designed to help children ages 8–12
            understand the systems that shape the modern world.
          </p>
          <p className={styles.sectionLead}>
            Each curriculum explores a foundational literacy:
          </p>
          <ul className={styles.sectionLead}>
            <li>🧠 <strong>Decision Literacy</strong> — thinking clearly and evaluating choices</li>
            <li>💻 <strong>Computer Literacy</strong> — understanding technology and how computers work</li>
            <li>📰 <strong>Media Literacy</strong> — understanding information systems and evaluating sources</li>
            <li>💰 <strong>Financial Literacy</strong> — understanding money and financial decisions</li>
            <li>🏛 <strong>Civic Literacy</strong> — understanding governance and communities</li>
          </ul>
          <EcosystemLinks />
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Core Concepts</Heading>
          <p className={styles.sectionLead}>
            Five ideas that thread through every lesson, helping students move from
            passive media consumers to thoughtful, curious questioners.
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
          <Heading as="h2">Who This Is For</Heading>
          <p className={styles.sectionLead}>
            Designed for ages 8–12 and usable by any caring adult — no media expertise required.
          </p>
          <div className={styles.cardGrid}>
            {[
              { title: 'Parents & Caregivers', description: 'Work through lessons at home with one child or siblings. Sessions are designed for the kitchen table.' },
              { title: 'Teachers', description: 'Supplement ELA, social studies, or digital citizenship instruction with a structured weekly program.' },
              { title: 'Homeschool Educators', description: 'A ready-to-use unit with flexible pacing, built-in assessments, and standards-aligned outcomes.' },
              { title: 'Librarians & Youth Leaders', description: 'Run a weekly after-school or summer program with hands-on activities that work in groups.' },
            ].map((item, idx) => (
              <FeatureCard key={idx} {...item} />
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
            Each week includes two guided sessions and one independent session — about
            80–90 minutes total. No expertise required, minimal prep needed, and every
            lesson works with everyday media you already have at home or in the classroom.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/week01-week-1">
              Begin Week 1
            </Link>
          </div>
          <p className={styles.feedbackPrompt}>
            Found a mistake or have a suggestion?{' '}
            <Link to="https://github.com/literacy-for-kids/media_literacy_for_kids/issues">
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
