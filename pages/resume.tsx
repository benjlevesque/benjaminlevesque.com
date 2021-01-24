import Head from "next/head";
import Slide from "react-reveal/Slide";
import { Layout, PageContent, PageTitle } from "../components/Layout";
import { Timeline, TimelineItem } from "../components/Timeline";

const ResumePage = () => {
  return (
    <Layout title="Benjamin's Resume">
      <PageTitle>Resume</PageTitle>

      <PageContent>
        <Timeline>
          <TimelineItem left>How</TimelineItem>
          <TimelineItem right>Are</TimelineItem>
          <TimelineItem left>You</TimelineItem>
          <TimelineItem right>Today?</TimelineItem>
        </Timeline>
      </PageContent>
    </Layout>
  );
};

export default ResumePage;
