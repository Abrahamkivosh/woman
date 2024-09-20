import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  TWITTER_LINK,
  YOUTUBE_LINK,
} from "@/config";
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
    link: FACEBOOK_LINK,
    name: "Facebook",
  },
  {
    icon: XIcon,
    link: TWITTER_LINK,
    name: "Twitter",
  },
  {
    icon: InstagramIcon,
    link: INSTAGRAM_LINK,
    name: "Instagram",
  },
  {
    icon: LinkedinIcon,
    link: LINKEDIN_LINK,
    name: "Linkedin",
  },
  {
    icon: YoutubeIcon,
    link: YOUTUBE_LINK,
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
    label: CONTACT_PHONE,
    title: " Phone",
    link: `tel:${CONTACT_PHONE}`,
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
    link: "/news",
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
    logo: "/partners/dimetechgroup.png",
    link: "https://dimetechgroup.com/",
    title: "Dimetechgroup",
  },
  {
    logo: "/partners/microsoft.png",
    link: "https://www.microsoft.com",
    title: "Microsoft",
  },
  {
    logo: "/partners/aws.png",
    link: "https://www.aws.com",
    title: "Amazon Web Services",
  },
  {
    logo: "/partners/google.webp",
    link: "https://www.google.com",
    title: "Google",
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

export const fullNewsData = [
  {
    title: "Breaking: Tech Innovation in Africa",
    category: "Technology",
    date: "September 10, 2024",
    slug: "breaking-tech-innovation-in-africa",
    image: "/images/woman01.jpg",
    subTitle:
      "Discover how technology is revolutionizing industries across the African continent.",
    description:
      "From fintech to agritech, tech innovation is transforming the way we live and work in Africa. Learn more about the latest trends and developments in the tech industry and how they are impacting businesses and communities across the continent.",
  },
  {
    title: "Pioneering Innovation and Driving Change",
    category: "Innovation",
    date: "September 20, 2024",
    slug: "pioneering-innovation-and-driving-change",
    image: "/images/community.jpg",
    subTitle:
      "The technology landscape in Africa is witnessing a remarkable transformation,",
    description: `
    <p>
    The technology landscape in Africa is witnessing a remarkable transformation, thanks in large part to the contributions of women innovators across the continent. These trailblazers are not only breaking barriers but also spearheading advancements that are reshaping industries and improving lives.</p>
    <p>One standout example is Funke Opeke from Nigeria, who founded MainOne, a leading provider of telecom services in West Africa. Her work has significantly improved internet connectivity across the region, reducing the digital divide and enabling businesses and communities to thrive. Opeke’s impact in the tech industry is a testament to the critical role that women are playing in driving technological progress in Africa.</p>
    <p>In the healthtech sector, women-led companies have made significant strides, with firms like Kasha in Kenya raising substantial funding to support their innovative solutions. Kasha, which secured $21 million in a recent funding round, exemplifies the growing influence of women in the tech industry. This surge in funding, over 2,000% higher than previous years, highlights the increasing recognition of women's contributions to technology and the broader economy.</p>
    <p>Moreover, organizations like Women in Innovation and Technology Africa based in Kenya, are playing a pivotal role in championing these achievements. Collaborating with institutions, they are not only recognizing women’s accomplishments but also creating platforms for further growth and development through initiatives like the e-digital connect summit that aims to bring women in technology together to engage and network in an effort to foster more information sharing and collaboration. These efforts aim to bridge the gender gap and inspire the next generation of female leaders in technology.</p>
    <p>As these women continue to innovate and lead, they are not only transforming the tech industry in Africa but also setting the stage for a more inclusive and prosperous future. The momentum generated by their efforts is likely to inspire more women to pursue careers in technology, ensuring that Africa’s tech landscape remains dynamic and forward-looking.</p>
    <p>Their stories are a powerful reminder of the potential that lies within Africa's tech sector and the critical role that women play in unlocking that potential</p>
    
    `,
  },
];
