import { SubmitEvent, useRef } from "react";
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
  const formRef = useRef<HTMLFormElement>(null);

  const submit = async (ev: SubmitEvent<HTMLFormElement>) => {
    await handleSubmit(ev);
  };

  return (
    <Layout title="Benjamin's contact">
      <PageTitle>Contact</PageTitle>
      <PageCloser />
      <PageContent>
        {state.succeeded ? (
          <p>Your message has been sent!</p>
        ) : (
          <form ref={formRef} className={styles.form} onSubmit={submit}>
            <input id="email" name="email" autoFocus placeholder="Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

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
        )}
      </PageContent>
    </Layout>
  );
};

export default ContactPage;
