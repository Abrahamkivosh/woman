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

export const fullNewsData = [
  {
    title: "Breaking: Tech Innovation in Africa",
    excerpt:
      "Discover how technology is revolutionizing industries across the African continent.",
    imgUrl: "/images/woman01.jpg",
    category: "Technology",
    date: "September 10, 2024",
    slug: "breaking-tech-innovation-in-africa",
  },
  {
    title: "Empowering Women in Tech",
    excerpt: "Explore stories of women leading the charge in the tech world.",
    imgUrl: "/images/woman02.jpg",
    category: "Empowerment",
    date: "September 8, 2024",
    slug: "empowering-women-in-tech",
  },
  {
    title: "Mentorship: The Key to Success",
    excerpt:
      "Why mentorship is crucial for career growth in the tech industry.",
    imgUrl: "/images/empowerment.jpg",
    category: "Career",
    date: "September 5, 2024",
    slug: "mentorship-the-key-to-success",
  },
  {
    title: "Africa's Next Generation of Innovators",
    excerpt: "Spotlighting young talents and their groundbreaking ideas.",
    imgUrl: "/images/woman02.jpg",
    category: "Innovation",
    date: "September 2, 2024",
    slug: "africas-next-generation-of-innovators",
  },
  {
    title: "AI in Healthcare: Opportunities and Challenges",
    excerpt:
      "Exploring how AI is transforming the healthcare sector in Africa.",
    imgUrl: "/images/woman01.jpg",
    category: "Healthcare",
    date: "August 28, 2024",
    slug: "ai-in-healthcare-opportunities-and-challenges",
  },
  {
    title: "Sustainable Energy Projects on the Rise",
    excerpt:
      "The push for clean, renewable energy is growing across the continent.",
    imgUrl: "/images/woman03.webp",
    category: "Energy",
    date: "August 25, 2024",
    slug: "sustainable-energy-projects-on-the-rise",
  },
  {
    title: "The Role of Blockchain in African Fintech",
    excerpt:
      "Blockchain technology is driving innovation in Africa's financial sector.",
    imgUrl: "/images/history01.webp",
    category: "Finance",
    date: "August 22, 2024",
    slug: "the-role-of-blockchain-in-african-fintech",
  },
  {
    title: "Education for All: Digital Learning Solutions",
    excerpt:
      "New digital platforms are expanding access to quality education in remote areas.",
    imgUrl: "/images/history02.webp",
    category: "Education",
    date: "August 19, 2024",
    slug: "education-for-all-digital-learning-solutions",
  },
  {
    title: "Tech for Good: Social Impact Startups",
    excerpt:
      "Startups across Africa are using tech to tackle social challenges.",
    imgUrl: "/images/social-impact.jpg",
    category: "Social Impact",
    date: "August 15, 2024",
    slug: "tech-for-good-social-impact-startups",
  },
  {
    title: "Cybersecurity Trends in Africa",
    excerpt:
      "How the continent is addressing the growing threat of cyberattacks.",
    imgUrl: "/images/cybersecurity.jpg",
    category: "Security",
    date: "August 12, 2024",
    slug: "cybersecurity-trends-in-africa",
  },
  {
    title: "5G Rollout in Africa: What to Expect",
    excerpt:
      "The 5G revolution is coming to Africa, bringing faster internet and more opportunities.",
    imgUrl: "/images/5g.jpg",
    category: "Technology",
    date: "August 10, 2024",
    slug: "5g-rollout-in-africa-what-to-expect",
  },
  {
    title: "Women Entrepreneurs Leading Change",
    excerpt:
      "Meet the women entrepreneurs who are transforming their industries.",
    imgUrl: "/images/women-entrepreneurs.jpg",
    category: "Empowerment",
    date: "August 5, 2024",
    slug: "women-entrepreneurs-leading-change",
  },
  {
    title: "The Future of Remote Work in Africa",
    excerpt:
      "How remote work is shaping the future of employment across the continent.",
    imgUrl: "/images/remote-work.jpg",
    category: "Work",
    date: "July 30, 2024",
    slug: "the-future-of-remote-work-in-africa",
  },
  {
    title: "Tech Hubs Across Africa: Driving Innovation",
    excerpt:
      "A look at the tech hubs powering innovation and entrepreneurship.",
    imgUrl: "/images/tech-hubs.jpg",
    category: "Technology",
    date: "July 25, 2024",
    slug: "tech-hubs-across-africa-driving-innovation",
  },
  {
    title: "Green Tech: Innovations in Sustainability",
    excerpt:
      "How African startups are addressing climate change with green tech.",
    imgUrl: "/images/green-tech.jpg",
    category: "Sustainability",
    date: "July 20, 2024",
    slug: "green-tech-innovations-in-sustainability",
  },
  {
    title: "Fintech in Africa: Trends and Opportunities",
    excerpt:
      "The rapid growth of fintech solutions is transforming the financial landscape.",
    imgUrl: "/images/fintech.jpg",
    category: "Finance",
    date: "July 15, 2024",
    slug: "fintech-in-africa-trends-and-opportunities",
  },
  {
    title: "Startups in Africa: The Next Unicorns",
    excerpt:
      "The African startup scene is booming, with several companies nearing unicorn status.",
    imgUrl: "/images/startups.jpg",
    category: "Startups",
    date: "July 10, 2024",
    slug: "startups-in-africa-the-next-unicorns",
  },
  {
    title: "The Rise of E-Commerce in Africa",
    excerpt:
      "E-commerce is transforming retail and creating new opportunities for entrepreneurs.",
    imgUrl: "/images/e-commerce.jpg",
    category: "E-Commerce",
    date: "July 5, 2024",
    slug: "the-rise-of-e-commerce-in-africa",
  },
  {
    title: "How Data Analytics is Powering Growth",
    excerpt:
      "Data-driven decision making is helping businesses grow faster and smarter.",
    imgUrl: "/images/data-analytics.jpg",
    category: "Data",
    date: "July 1, 2024",
    slug: "how-data-analytics-is-powering-growth",
  },
  {
    title: "The Future of African Digital Economies",
    excerpt:
      "African digital economies are growing rapidly. Here's what to expect.",
    imgUrl: "/images/digital-economy.jpg",
    category: "Economy",
    date: "June 25, 2024",
    slug: "the-future-of-african-digital-economies",
  },
];
