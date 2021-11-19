import BlogIcon from "../components/icons/blog";
import GithubIcon from "../components/icons/github";
import TwitterIcon from "../components/icons/twitter";
import HomeIcon from "../components/icons/home";
import MailIcon from "../components/icons/mail";

type NavigationItem = {
  name: string;
  href: string;
  icon?: (...props: any[]) => JSX.Element;
};

export const navigation: Record<string, NavigationItem> = {
  blog: {
    name: "Blog",
    href: "/blog",
    icon: BlogIcon,
  },
  home: {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  contact: {
    name: "Contact",
    href: "/contact",
    icon: MailIcon,
  },
  resume: {
    name: "Resume",
    href: "/resume",
  },
  twitter: {
    name: "Twitter",
    href: "https://twitter.com/benjlevesque",
    icon: TwitterIcon,
  },
  github: {
    name: "Github",
    href: "https://github.com/benjlevesque",
    icon: GithubIcon,
  },
};

export const navigationList = Object.entries(navigation).map(([key, nav]) => ({
  key,
  ...nav,
}));
