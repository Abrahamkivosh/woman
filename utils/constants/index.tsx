import { CONTACT_EMAIL } from "@/config";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TelIcon,
  XIcon,
  YoutubeIcon,
} from "../icons";

export const marginX = { base: "3%", sm: "5%", md: "6%", lg: "8%" };
export const socials = [
  {
    icon: FacebookIcon,
    link: "https://www.facebook.com/Cleanstartkenya/",
    name: "Facebook",
  },
  {
    icon: XIcon,
    link: "https://twitter.com/CleanStartKenya",
    name: "Twitter",
  },
  {
    icon: InstagramIcon,
    link: "https://www.instagram.com/cleanstartkenya/",
    name: "Instagram",
  },
  {
    icon: LinkedinIcon,
    link: "https://www.linkedin.com/company/clean-start-kenya/",
    name: "Linkedin",
  },
  {
    icon: YoutubeIcon,
    link: "https://www.youtube.com/channel/UCn9V4J3CdjrVemjVj4ZINpw",
    name: "Youtube",
  },
];

export const contactsData = [
  {
    label: CONTACT_EMAIL,
    title: "Email Address",
    icon: MailIcon,
    link: `mailto:${CONTACT_EMAIL}`,
    bg: "brand.white",
    color: "brand.black",
  },

  {
    label: "0707585566",
    title: " Phone",
    link: `tel:0707585566`,
    icon: TelIcon,
    bg: "brand.white",
    color: "brand.black",
  },
];

export const quickLinks = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Who we are",
    link: "/who-we-are/",
  },

  {
    label: "Latest News",
    link: "/latest-news",
  },
  {
    label: "Become a member",
    link: "/careers",
  },
];

export const navData: NavType[] = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    subItems: [
      {
        label: "Who We Are",
        link: "/who-we-are/",
      },
      {
        label: "What We Do",
        link: "/who-we-are/what-we-do",
      },
      {
        label: "Our Team",
        link: "/who-we-are/our-team",
      },
      {
        label: "Partners",
        link: "/who-we-are/partners",
      },
    ],
  },
  {
    label: "Our Programs",
    link: "/programs",
    subItems: [
      { label: "Education", link: "/programs/education" },
      { label: "Advocacy", link: "/programs/advocancy" },
      {
        label: "Business Empowerment",
        link: "/programs/business-empowerment",
      },
      {
        label: "Community",
        link: "/programs/community",
      },
    ],
  },
  {
    label: "Events",
    link: "/events",
  },
  {
    label: "Join Us",
    subItems: [
      {
        label: "Become a member",
        link: "/careers",
      },
      {
        label: "Sponsorships",
        link: "/sponsorships",
      },
      {
        label: "Mentorship",
        link: "/mentorship",
      },
      {
        label: "Become A Volunteer",
        link: "/become-a-volunteer",
      },
      {
        label: "Partner With Us",
        link: "/partner-with-us",
      },
    ],
  },
  {
    label: "News",
    link: "/news",
  },
  {
    label: "Contact Us",
    link: "/contact-us",
  },
];

export const partners = [
  {
    logo: "/partners/microsoft.png",
    link: "https://www.microsoft.com",
    title: "Microsoft",
  },
  {
    logo: "/partners/microsoft.png",
    link: "https://www.google.com",
    title: "Google",
  },
  {
    logo: "/partners/microsoft.png",
    link: "https://aws.amazon.com",
    title: "Amazon Web Services (AWS)",
  },
  {
    logo: "/partners/microsoft.png",
    link: "https://www.ibm.com",
    title: "IBM",
  },
  {
    logo: "/partners/microsoft.png",
    link: "https://www.oracle.com",
    title: "Oracle",
  },
  {
    logo: "/partners/microsoft.png",
    link: "https://www.apple.com",
    title: "Apple",
  },
  {
    logo: "/partners/microsoft.png",
    link: "https://www.salesforce.com",
    title: "Salesforce",
  },
  {
    logo: "/partners/microsoft.png",
    link: "https://www.meta.com",
    title: "Facebook (Meta)",
  },
  {
    logo: "/partners/microsoft.png",
    link: "https://www.adobe.com",
    title: "Adobe",
  },
  {
    logo: "/partners/microsoft.png",
    link: "https://www.cisco.com",
    title: "Cisco",
  },
];

export const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO",
    imgUrl: "/images/woman01.jpg",
    description:
      "Jane is a visionary leader with over 20 years of experience in the tech industry.",
  },
  {
    name: "John Smith",
    role: "CTO",
    imgUrl: "/images/woman01.jpg",
    description:
      "John oversees our technology and innovation efforts, ensuring we stay ahead in the market.",
  },
  {
    name: "Alice Johnson",
    role: "Marketing Director",
    imgUrl: "/images/woman01.jpg",
    description:
      "Alice drives our marketing strategy and helps us connect with our audience effectively.",
  },
  {
    name: "Bob Brown",
    role: "Lead Developer",
    imgUrl: "/images/woman01.jpg",
    description:
      "Bob leads our development team, turning ideas into cutting-edge solutions.",
  },
];
