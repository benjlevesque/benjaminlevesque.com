import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import DockerIcon from "../components/icons/docker";
import GolangIcon from "../components/icons/golang";
import KubernetesIcon from "../components/icons/kubernetes";
import ReactIcon from "../components/icons/react";
import TypescriptIcon from "../components/icons/typescript";
import { Layout, PageContent, PageTitle } from "../components/Layout";
import { Terminal, TerminalRow } from "../components/terminal";
import styles from "../styles/Home.module.scss";
import { navigation } from "../lib/navigation";

const DevIcon: React.FC<{
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  link: string;
}> = ({ title, icon: Icon, link }) => {
  return (
    <motion.span
      title={title}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.1 },
      }}
    >
      <a href={link}>
        <Icon className={styles.devicon} />
      </a>
    </motion.span>
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
              <DevIcon
                title="Typescript"
                icon={TypescriptIcon}
                link="https://www.typescriptlang.org/"
              />
              <DevIcon
                title="Go"
                icon={GolangIcon}
                link="https://golang.org/"
              />
              <DevIcon
                title="React"
                icon={ReactIcon}
                link="https://reactjs.org/"
              />
              <DevIcon
                title="Docker"
                icon={DockerIcon}
                link="https://www.docker.com/"
              />
              <DevIcon
                title="Kubernetes"
                icon={KubernetesIcon}
                link="https://kubernetes.io/"
              />
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
  icon?: (...props: any) => JSX.Element;
  text: string;
}> = ({ href, icon: Icon, text }) => {
  return (
    <Link href={href}>
      <a
        className={styles.social}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
      >
        {Icon && <Icon fill="#64b6ac" className={styles.icon} />}
        <span className={styles.code}>{text}</span>
      </a>
    </Link>
  );
};

export const Links = () => {
  return (
    <div className={styles.links}>
      <AppLink text="benjlevesque" {...navigation.github} />
      <AppLink text="benjlevesque" {...navigation.twitter} />
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
