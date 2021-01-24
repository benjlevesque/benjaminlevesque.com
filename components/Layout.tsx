import { useRouter } from "next/router";

import { useCallback, useEffect } from "react";

import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import HomeIcon from "./icons/home";
import BlogIcon from "./icons/blog";
import { motion } from "framer-motion";
import { CloseIcon } from "./icons/close";
import { KeyboardNav } from "./KeyboardNav";
import { useKeyListener } from "../lib/useKeyListener";

export const PageCloser: React.FC<{
  close?: () => void;
  closeRoute?: string;
}> = ({ close, closeRoute }) => {
  const router = useRouter();

  const defaultClose = useCallback(() => {
    router.push(closeRoute ? closeRoute : "/");
  }, [router, closeRoute]);

  useKeyListener("Escape", close || defaultClose);

  return (
    <motion.div whileHover={{ rotate: 90 }} className={styles.pageCloser}>
      <CloseIcon aria-label="close" onClick={() => close()} />
    </motion.div>
  );
};

export const PageTitle: React.FC<any> = ({ children, ...props }) => {
  return (
    <motion.h1 className={styles.pageTitle} {...props}>
      {children}
    </motion.h1>
  );
};

export const PageContent: React.FC = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export const PageMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <Link href="/">
        <a>
          <HomeIcon fill="white" /> Homepage
        </a>
      </Link>
      <Link href="/blog">
        <a>
          <BlogIcon fill="white" /> Blog
        </a>
      </Link>
    </div>
  );
};

export const Layout: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      <KeyboardNav />
    </div>
  );
};
