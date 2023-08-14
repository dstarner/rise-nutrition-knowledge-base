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
    imageUrl: "img/home/getting-started.svg",
    description: (
      <>
        Get started with the Fuel to Rise<sup>TM</sup> platform. Learn what the platform has to offer, invite team members, and jump to other parts of the documentation.
      </>
    ),
    pageUrl: "docs",
  },
  {
    title: <>Mobile App</>,
    imageUrl: "img/home/mobile.svg",
    description: (
      <>
        As an athlete, learn how to navigate our mobile application to track your meals, trainings, injuries, and get valueable nutrition and performance insights.
      </>
    ),
    pageUrl: "docs/mobile",
  },
  {
    title: <>Web Dashboard</>,
    imageUrl: "img/home/dashboard.svg",
    description: (
      <>
        As a coach, dietitians, or other team staff member, the web dashboard is the place you can monitor the nutrition status of your athletes on an on-going basis. 
      </>
    ),
    pageUrl: "docs/dashboard",
  },
  {
    title: <>Tips &amp; FAQs</>,
    imageUrl: "img/home/getting-started.svg",
    description: (
      <>
        Check out tips and FAQs about features on the mobile app and web dashboard. 
      </>
    ),
    pageUrl: "docs/tips",
  },
  {
    title: <>Content Library</>,
    imageUrl: "img/home/getting-started.svg",
    description: (
      <>
        Check out the Rise Nutrition content library to view vidoes and materials on nutrition, performance, injury prevention, sports psychology, and so much more!
      </>
    ),
    pageUrl: "docs/tips",
  }
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
      description="Providing data-driven nutrition for optimized performance."
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
