import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin } from "lucide-react";

type FooterProps = {
  links: { [keys in string]: { label: string; link: string }[] };
  followUs: {
    title: string;
    description: string;
    icons: { link: string; icon: any }[];
  };
};

function Footer({ links, followUs }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container grid grid-cols-4 justify-center items-start py-16">
        {Object.entries(links).map(([keys, values]) => (
          <div key={keys}>
            <h3 className="uppercase">Company</h3>
            <ul>
              {values?.map((link) => (
                <li key={link.link}>
                  <Link href={link.link}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3>{followUs.title}</h3>
          <p>{followUs.description}</p>
          <div className="mt-4 flex justify-start items-center gap-2">
            <Link href="#">
              <Button
                variant={"outline"}
                className="bg-primary p-2 rounded-full duration-100"
              >
                <Facebook />
              </Button>
            </Link>
            <Link href="#">
              <Button
                variant={"outline"}
                className="bg-primary p-2 rounded-full duration-100"
              >
                <Instagram />
              </Button>
            </Link>
            <Link href="#">
              <Button
                variant={"outline"}
                className="bg-primary p-2 rounded-full duration-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 30 30"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
              </Button>
            </Link>
            <Link href="#">
              <Button
                variant={"outline"}
                className="bg-primary p-2 rounded-full duration-100"
              >
                <Linkedin />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-secondary" />
      <p className="py-4 text-center">2024@William Visibee</p>
    </footer>
  );
}
export default Footer;
