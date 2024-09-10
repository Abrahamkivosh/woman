"use client";
import { CommonHero } from "@/components/common";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import "aos/dist/aos.css";
import Image from "next/image";

// Data Array for Sections
const mentorshipSections = [
  {
    title: "Gain Insights and Knowledge",
    description:
      "Our mentorship program offers you the chance to gain valuable knowledge and insights from experienced professionals. Learn new skills and advance your career with the guidance of our mentors.",
    imageSrc: "/images/business-training.jpg",
    imageAlt: "Mentorship Insights",
  },
  {
    title: "Build Professional Relationships",
    description:
      "Connect with mentors who can help you build strong professional relationships that open doors to new opportunities. Network with industry leaders and grow your career.",
    imageSrc: "/images/community.jpg",
    imageAlt: "Professional Relationships",
  },
  {
    title: "Contribute to the Community",
    description:
      "Share your experience and knowledge to contribute to the growth of the technology community. Be a part of shaping the future of the tech industry through mentorship.",
    imageSrc: "/images/history02.webp",
    imageAlt: "Community Contribution",
  },
];

// Reusable Component for Each Section
const MentorshipSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  index,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
}) => {
  // Function to determine if the section layout should be reversed
  const isReversed = (index: number) => index % 2 !== 0;

  // Function to determine AOS effect based on the index
  const getAosEffect = (index: number) => {
    return index % 2 === 0 ? "fade-right" : "fade-left";
  };

  return (
    <Flex
      direction={{
        base: "column",
        md: isReversed(index) ? "row-reverse" : "row",
      }}
      align="center"
      gap={4}
      data-aos={getAosEffect(index)}
    >
      <VStack spacing={4} flex={1}>
        <Heading fontSize="2xl" color="teal.600">
          {title}
        </Heading>
        <Text color="gray.700">{description}</Text>
      </VStack>
      <Box
        flex={1}
        maxH={400}
        position="relative"
        borderRadius="md"
        boxShadow="lg"
        overflow="hidden"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          objectFit="cover"
          width={500}
          height={500}
          style={{
            borderRadius: "md",
            boxShadow: "lg",
            overflow: "hidden",
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Flex>
  );
};

const MentorshipPage = () => {
  return (
    <>
      {/* Hero Section */}
      <CommonHero path="mentorship" h="40vh" />

      {/* Content Sections */}
      <Stack
        spacing={12}
        py={{ base: "4rem", sm: "6rem" }}
        px={{ base: "2rem", sm: "4rem" }}
      >
        {mentorshipSections.map((section, index) => (
          <MentorshipSection
            key={index}
            title={section.title}
            description={section.description}
            imageSrc={section.imageSrc}
            imageAlt={section.imageAlt}
            index={index}
          />
        ))}
      </Stack>

      {/* Call to Action */}
      <Box
        textAlign="center"
        py={{ base: "4rem", sm: "6rem" }}
        px={{ base: "2rem", sm: "4rem" }}
        bg="teal.50"
        borderRadius="md"
        boxShadow="lg"
        data-aos="fade-up"
      >
        <Heading fontSize="xl" mb={4} color="teal.600">
          Ready to Make an Impact?
        </Heading>
        <Text fontSize={{ base: "md", lg: "lg" }} color="gray.700" mb={6}>
          Join our mentorship program today and help shape the future of
          aspiring technology professionals. Your expertise can make a
          difference!
        </Text>
        <Button
          bg="brand.primary"
          color="white"
          fontWeight="800"
          size="lg"
          as="a"
          href="/contact-us"
        >
          Sign Up as a Mentor
        </Button>
      </Box>
    </>
  );
};

export default MentorshipPage;
