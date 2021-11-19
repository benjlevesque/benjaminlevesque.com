import { FormEvent, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import {
  Layout,
  PageCloser,
  PageContent,
  PageTitle,
} from "../components/Layout";

import styles from "../styles/Contact.module.scss";

const ContactPage = () => {
  const [state, handleSubmit, resetForm] = useForm("mjvjndbd");
  const formRef = useRef<HTMLFormElement>();

  const submit = async (ev: FormEvent<HTMLFormElement>) => {
    const response = await handleSubmit(ev);
    if (!("errors" in response.body)) {
      formRef.current.reset();
      setTimeout(resetForm, 5000);
    }
  };
  return (
    <Layout title="Benjamin's contact">
      <PageTitle>Contact</PageTitle>
      <PageCloser />
      <PageContent>
        {state.succeeded && "Your message has been sent!"}
        <form ref={formRef} className={styles.form} onSubmit={submit}>
          <input id="email" name="email" autoFocus placeholder="Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input id="name" name="name" placeholder="Name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <textarea
            rows={10}
            id="message"
            name="message"
            placeholder="Write your message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <footer className="footer">
            <button type="submit" disabled={state.submitting}>
              Send
            </button>
          </footer>
        </form>
      </PageContent>
    </Layout>
  );
};

export default ContactPage;
