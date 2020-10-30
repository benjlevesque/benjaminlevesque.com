import Head from "next/head";
import Link from "next/link";
import React from "react";
import DockerIcon from "../components/icons/docker";
import GithubIcon from "../components/icons/github";
import GolangIcon from "../components/icons/golang";
import KubernetesIcon from "../components/icons/kubernetes";
import ReactIcon from "../components/icons/react";
import TwitterIcon from "../components/icons/twitter";
import TypescriptIcon from "../components/icons/typescript";
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
    <h1 className={styles.title}>
      <span className={styles.nowrap}>Hi there,</span>{" "}
      <span className={styles.nowrap}>I'm Benjamin.</span>
    </h1>
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

export const Links = () => {
  return (
    <div className={styles.links}>
      <Link href="https://github.com/benjlevesque">
        <a className={styles.social} target="_blank" rel="noopener noreferrer">
          <GithubIcon fill="#64b6ac" className={styles.icon} />
          <span className={styles.code}>benjlevesque</span>
        </a>
      </Link>
      <Link href="https://twitter.com/benjlevesque">
        <a className={styles.social} target="_blank" rel="noopener noreferrer">
          <TwitterIcon fill="#64b6ac" className={styles.icon} />
          <span className={styles.code}>benjlevesque</span>
        </a>
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Benjamin's page</title>
      </Head>

      <main className={styles.main}>
        <Header />
        <Summary />
        <Links />
      </main>
    </div>
  );
}
