import { Facebook, Instagram, Linkedin, MessageSquarePlus } from "lucide-react";
import { ReactElement } from "react";

type FooterProps = {
  company: { label: string; link: string }[];
  support: { label: string; link: string }[];
  store: { label: string; link: string }[];
  followUs: {
    title: string;
    description: string;
    icons: { link: string; icon: string }[];
  };
};

export const footerLinks = {
  company: [
    { label: "about us", link: "/about-us" },
    { label: "contact", link: "/contact" },
    { label: "store locations", link: "/locations" },
    { label: "careers", link: "/careers" },
  ],
  support: [
    { label: "about us", link: "/about-us" },
    { label: "contact", link: "/contact" },
    { label: "store locations", link: "/locations" },
    { label: "careers", link: "/careers" },
  ],
  store: [
    { label: "about us", link: "/about-us" },
    { label: "contact", link: "/contact" },
    { label: "store locations", link: "/locations" },
    { label: "careers", link: "/careers" },
  ],
  followUs: {
    title: "Follow menubar",
    description: "Follow us in social medias",
    icons: [{ link: "#", icon: "sdf" }],
  },
};
