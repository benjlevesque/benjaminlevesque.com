import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import HomeIcon from "./icons/home";
import BlogIcon from "./icons/blog";

export const PageTitle: React.FC = ({ children }) => {
  return <h1 className={styles.pageTitle}>{children}</h1>;
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
    </div>
  );
};
