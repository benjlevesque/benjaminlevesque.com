import Head from "next/head";
import styles from "../styles/Layout.module.scss";

export const PageTitle: React.FC = ({ children }) => {
  return <h1 className={styles.pageTitle}>{children}</h1>;
};

export const PageContent: React.FC = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
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
