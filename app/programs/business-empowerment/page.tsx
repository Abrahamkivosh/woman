"use client";
import { CommonHero } from "@/components/common";
import { APP_NAME } from "@/config";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import AOS from "aos";
import { useEffect } from "react";

const sectionsData = [
  {
    title: "Mentorship",
    description:
      "We connect aspiring and established women entrepreneurs with experienced mentors who provide guidance, advice, and support. Our mentorship program is designed to help wo",
    image: "/images/networking-mentorship.webp",
    alt: "Mentorship",
  },
  {
    title: "Funding Opportunities",
    description:
      "Access to capital is a significant barrier for many women entrepreneurs. WITIA helps bridge this gap by connecting women with funding opportunities, including grants, loans, and investment networks that are tailored to support women-led ventures.",
    image: "/images/financial-support.jpg",
    alt: "Funding Opportunities",
  },
  {
    title: "Networking Platforms",
    description:
      "We create and facilitate networking opportunities that allow women entrepreneurs to connect with potential partners, investors, and clients. Our events, both online and offline, are designed to foster collaboration and build lasting relationships within the tech community.",
    image: "/images/woman01.jpg",
    alt: "Networking Platforms",
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
              Empowering women entrepreneurs is central to our mission at{" "}
              <Tooltip
                label={APP_NAME}
                aria-label="A  tooltop for WIRIA"
                fontSize={{ base: "lg", sm: "xl" }}
                fontWeight="bold"
                color="brand.primary"
                bgColor="white"
                hasArrow
              >
                <Text
                  as="span"
                  color="green.600"
                  cursor="pointer"
                  fontWeight="800"
                >
                  WITIA
                </Text>
              </Tooltip>
              . We offer a range of business empowerment programs designed to
              help women-led startups and businesses in tech succeed:
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
