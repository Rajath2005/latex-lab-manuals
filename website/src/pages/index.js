import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/programs/program1">
            Get Started with Lab Programs 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentation for VTU LaTeX Lab Experiments (BCSL456D)">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <Heading as="h2">What is LaTeX?</Heading>
                <p>
                  LaTeX is a sophisticated document preparation system designed for high-quality typesetting. 
                  It is particularly well-suited for technical and scientific documentation.
                </p>
              </div>
              <div className="col col--6">
                <Heading as="h2">About This Course</Heading>
                <p>
                  <strong>Subject Code:</strong> BCSL456D<br />
                  <strong>Course Name:</strong> Technical Writing Using LaTeX<br />
                  <strong>University:</strong> Visvesvaraya Technological University (VTU)
                </p>
              </div>
            </div>
            <div className="row margin-top--lg">
              <div className="col col--12">
                <Heading as="h2">Lab Programs Overview</Heading>
                <p>
                  This repository covers all 12+ lab programs required for the course, 
                  complete with source code and output previews.
                </p>
                <ul>
                  <li>Document Structure (Sections, Headers, Footers)</li>
                  <li>Title & Certificate Page Design</li>
                  <li>Tables & Graphics</li>
                  <li>Mathematical Equations & Algorithms</li>
                  <li>Bibliography & Citations</li>
                  <li>Advanced Layouts (TikZ, Reports, Articles)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
