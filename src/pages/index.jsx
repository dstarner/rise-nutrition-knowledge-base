import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Getting Started</>,
    imageUrl: "img/getting-started.svg",
    description: (
      <>
        Get introduced to Rise Nutrition&apos;s components and software solutions, jump off to other
        parts of the documentation, and invite team members.
      </>
    ),
    pageUrl: "docs",
  },
  {
    title: <>Mobile App</>,
    imageUrl: "img/sdks-samples.svg",
    description: (
      <>
        As an athlete, learn how to navigate our mobile application to track your meals, trainings,
        and injuries to help your coaches and dietitians get the most of your lifestyle.
      </>
    ),
    pageUrl: "docs/mobile",
  },
  {
    title: <>Web Dashboard</>,
    imageUrl: "img/standard-compliance.svg",
    description: (
      <>
        As a coach, dietitians, or other team staff member, the Rise Nutrition web dashboard is
        your tooling to get access into your team&apso;s nutrition, training, and injury statistics.
      </>
    ),
    pageUrl: "docs/dashboard",
  },
];

function Feature({ imageUrl, title, description, pageUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="learn-more">
        <a href={pageUrl}>Learn more →</a>
      </p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title="Home"
      description="Providing the tools to gain insights into athlete diet and exercise to maximize performance."
    >
      <header className={classnames("hero hero--secondary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames("button cta-btn button--outline button--primary button--lg", styles.getStarted)}
              to={useBaseUrl("docs")}
            >
              <i className="feather icon-arrow-right"></i> Get started
            </Link>
            <Link
              className={classnames("button cta-btn button--outline button--success button--lg", styles.getStarted)}
              href="https://app.risenutrition.org"
            >
              <i className="feather icon-layout"></i> Explore Dashboard
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
