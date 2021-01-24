import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import BlogIcon from "../components/icons/blog";
import DockerIcon from "../components/icons/docker";
import GithubIcon from "../components/icons/github";
import GolangIcon from "../components/icons/golang";
import KubernetesIcon from "../components/icons/kubernetes";
import ReactIcon from "../components/icons/react";
import TwitterIcon from "../components/icons/twitter";
import TypescriptIcon from "../components/icons/typescript";
import { Layout, PageContent, PageTitle } from "../components/Layout";
import { Terminal, TerminalRow } from "../components/terminal";
import styles from "../styles/Home.module.css";

const DevIcon = ({ title, icon: Icon }) => {
  return (
    <span title={title}>
      <Icon className={styles.devicon} />
    </span>
  );
};

const Header = () => {
  return (
    <div className={styles.header}>
      <motion.h1 layoutId="title" className={styles.title}>
        <span className={styles.nowrap}>Hi there,</span>{" "}
        <span className={styles.nowrap}>I'm Benjamin.</span>
      </motion.h1>
    </div>
  );
};

const Summary = () => {
  return (
    <div className={styles.summary}>
      <Terminal>
        <TerminalRow title="whoami">
          <div className={styles.whoami}>
            <p>I'm a software developer working with</p>
            <div className={styles.icons}>
              <DevIcon title="Typescript" icon={TypescriptIcon} />
              <DevIcon title="Go" icon={GolangIcon} />
              <DevIcon title="React" icon={ReactIcon} />
              <DevIcon title="Docker" icon={DockerIcon} />
              <DevIcon title="Kubernetes" icon={KubernetesIcon} />
            </div>
          </div>
        </TerminalRow>
        <TerminalRow cursor />
      </Terminal>
    </div>
  );
};

const AppLink: React.FC<{
  href: string;
  icon: any;
  text: string;
  target?: string;
}> = ({ href, icon: Icon, text, target }) => {
  return (
    <Link href={href}>
      <a className={styles.social} target={target} rel="noopener noreferrer">
        <Icon fill="#64b6ac" className={styles.icon} />
        <span className={styles.code}>{text}</span>
      </a>
    </Link>
  );
};

export const Links = () => {
  return (
    <div className={styles.links}>
      <AppLink
        text="benjlevesque"
        href="https://github.com/benjlevesque"
        icon={GithubIcon}
        target="_blank"
      />
      <AppLink
        text="benjlevesque"
        href="https://twitter.com/benjlevesque"
        icon={TwitterIcon}
        target="_blank"
      />
      <AppLink text="Blog" href="/blog" icon={BlogIcon} />
    </div>
  );
};

export default function Home() {
  return (
    <Layout title="Benjamin's page">
      <PageContent>
        <Header />
        <Summary />
        <Links />
      </PageContent>
    </Layout>
  );
}
