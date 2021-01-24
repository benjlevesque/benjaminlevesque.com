import { motion } from "framer-motion";
import { FormEvent, useRef } from "react";
import {
  Layout,
  PageCloser,
  PageContent,
  PageTitle,
} from "../components/Layout";
import { useClient } from "../lib/client";

import styles from "../styles/Contact.module.scss";

const ContactPage = () => {
  const client = useClient();
  const formRef = useRef<HTMLFormElement>();
  const submit = async (ev: FormEvent<HTMLFormElement>) => {
    const { email, name, message } = (ev.target as any).elements;
    ev.preventDefault();
    await client("/contact", {
      data: { email: email.value, name: name.value, message: message.value },
    });
    formRef.current.reset();
  };
  return (
    <Layout title="Benjamin's contact">
      <PageTitle>Contact</PageTitle>
      <PageCloser />
      <PageContent>
        <form ref={formRef} className={styles.form} onSubmit={submit}>
          <motion.input
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Email"
          />
          <motion.input
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            name="name"
            autoComplete="off"
            placeholder="Name"
          />
          <motion.textarea
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            rows={10}
            name="message"
            placeholder="Write your message"
          />
          <p>
            <input type="submit" value="Send" />
          </p>
        </form>
      </PageContent>
    </Layout>
  );
};

export default ContactPage;
