import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import EcosystemLinks from '@theme/EcosystemLinks';

import styles from './index.module.css';

function HomepageHeader() {
  const heroImageUrl = useBaseUrl('/img/hero-image.png');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Free and open educational curriculum</p>
          <h1 className="hero__title">Media Literacy for Kids</h1>
          <p className="hero__subtitle">
            A free, open curriculum for navigating the information landscape and filtering the signal from the noise.
          </p>
          <p className={styles.heroLead}>
            18 weeks of guided lessons that teach young learners to see media
            not as a window into reality, but as a series of designed artifacts —
            built by people, delivered by algorithms, and amplified by sharing.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/week01-week-1">
              Start the Curriculum
            </Link>
            <Link
              className="button button--outline button--lg"
              to="https://github.com/zcohen-nerd/media_literacy_for_kids">
              View on GitHub
            </Link>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <img
            className={styles.heroImage}
            src={heroImageUrl}
            alt="Illustrated hero image for the media literacy curriculum"
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="A curriculum website for teaching kids media literacy skills.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <EcosystemLinks />
      </main>
    </Layout>
  );
}
