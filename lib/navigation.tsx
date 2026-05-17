import BlogIcon from "../components/icons/blog";
import GithubIcon from "../components/icons/github";
import MastodonIcon from "../components/icons/mastodon";
import HomeIcon from "../components/icons/home";
import MailIcon from "../components/icons/mail";

type NavigationItem = {
  name: string;
  href: string;
  icon?: (...props: any[]) => React.ReactNode;
};

export const navigation = {
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
  mastodon: {
    name: "Mastodon",
    href: "https://piaille.fr/@benji",
    icon: MastodonIcon,
  },
  github: {
    name: "Github",
    href: "https://github.com/benjlevesque",
    icon: GithubIcon,
  },
} satisfies Record<string, NavigationItem>;

export const navigationList: ({ key: string } & NavigationItem)[] =
  Object.entries(navigation).map(([key, nav]) => ({
    key,
    ...nav,
  }));
