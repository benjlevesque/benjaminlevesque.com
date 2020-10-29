import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Benjamin's page</title>
      </Head>

      <main className={styles.main}>
        <form className={styles.form}>
          <input name="email" type="email" placeholder="Email" />
          <input name="name" placeholder="Name" />
          <textarea name="message" placeholder="Write your message" />
          <p>
            <input type="submit" value="Send" />
          </p>
        </form>
      </main>
    </div>
  );
};

export default ContactPage;
