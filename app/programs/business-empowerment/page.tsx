"use client";
import { CommonHero } from "@/components/common";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import AOS from "aos";
import { useEffect } from "react";

const sectionsData = [
  {
    title: "Comprehensive Business Training",
    description:
      "We provide tailored business training programs designed to teach women the skills needed to start and manage successful enterprises. This includes marketing, business planning, and financial management.",
    image: "/images/business-training.jpg",
    alt: "Business Training",
  },
  {
    title: "Access to Networking and Mentorship",
    description:
      "Through our mentorship and networking programs, we connect women with successful entrepreneurs, industry leaders, and other resources that can help accelerate their business growth.",
    image: "/images/networking-mentorship.webp",
    alt: "Networking and Mentorship",
  },
  {
    title: "Financial Support and Resources",
    description:
      "We help women secure funding through grants, microloans, and partnerships with financial institutions. We also provide guidance on how to manage and grow their businesses sustainably.",
    image: "/images/financial-support.jpg",
    alt: "Financial Support",
  },
];

const getAOSAnimation = (index: number) => {
  switch (index % 3) {
    case 0:
      return "fade-up";
    case 1:
      return "fade-left";
    case 2:
      return "fade-right";
    default:
      return "fade-up";
  }
};
interface sectionInterface {
  title: string;
  description: string;
  image: string;
  alt: string;
  index: number;
}
const Section = ({
  title,
  description,
  image,
  alt,
  index,
}: sectionInterface) => {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS to apply animations
  }, []);

  return (
    <Flex
      direction={{
        base: "column",
        md: index % 2 === 0 ? "row" : "row-reverse",
      }}
      align="center"
      mb={12}
      data-aos={getAOSAnimation(index)} // Apply AOS animation
    >
      <Image
        src={image}
        alt={alt}
        boxSize="50%"
        style={{ objectFit: "cover" }}
        borderRadius="md"
        mb={{ base: 4, md: 0 }}
        mr={{ md: index % 2 === 0 ? 6 : 0 }}
        ml={{ md: index % 2 === 0 ? 0 : 6 }}
      />
      <Box>
        <Heading fontSize={{ base: "xl", sm: "2xl" }} mb={2}>
          {title}
        </Heading>
        <Text color="gray.700" fontSize="lg">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

const BusinessEmpowermentPage = () => {
  return (
    <>
      {/* Hero Section */}
      <CommonHero
        title="Business Empowerment"
        path="programs/business-empowerment"
        h="30vh"
        imgUrl="/images/woman02.jpg"
      />

      {/* Main Content Section */}
      <Box>
        <Box
          py={{ base: "2rem", sm: "4rem" }}
          px={{ base: "1rem", sm: "4rem" }}
          bg="gray.50"
          mx={{ base: "3%", sm: "5%", md: "6%", lg: "8%" }}
          bgImage="/images/wave.svg"
          bgSize="cover"
          bgRepeat="no-repeat"
        >
          <Box>
            <Heading
              textAlign="center"
              mb={8}
              fontSize={{ base: "2xl", sm: "3xl" }}
            >
              Empowering Women Through Business and Innovation
            </Heading>

            <Text
              fontSize={{ base: "md", sm: "lg" }}
              color="gray.600"
              textAlign="center"
              maxW="3xl"
              mx="auto"
            >
              Our Business Empowerment program focuses on equipping women with
              the tools and resources they need to build successful and
              sustainable businesses. From startup support to financial
              education, we provide comprehensive services to foster innovation
              and entrepreneurship.
            </Text>
          </Box>

          <Divider my={8} />

          {sectionsData.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              description={section.description}
              image={section.image}
              alt={section.alt}
              index={index}
            />
          ))}

          {/* Learn More Section */}
          <Box textAlign="center" mt={16}>
            <Heading fontSize="2xl" mb={4} color="brand.primary">
              Want to Learn More?
            </Heading>
            <Text fontSize="lg" mb={6} color="gray.600">
              Explore our detailed guides and resources to help you get started
              on your business journey.
            </Text>
            <Link
              href="/news"
              color="brand.primary"
              fontWeight="bold"
              fontSize="lg"
            >
              Discover Our Resources
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BusinessEmpowermentPage;
