"use client";
import { CommonHero } from "@/components/common";
import { getAnimationProps } from "@/utils/animationHelpers";
import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const sections = [
  {
    title: "Empowering Women Through Education",
    description:
      "Our education and training programs are designed to provide accessible technology education and scholarships. Volunteers play a crucial role in mentoring and guiding participants, ensuring they have the resources and support needed to succeed.",
    imageUrl: "/images/girlpower.png",
    imageAlt: "Education and Training",
  },
  {
    title: "Building a Strong Community",
    description:
      "By volunteering, you help us build a supportive network of women in technology. Your involvement in organizing events, workshops, and hackathons is vital for fostering collaboration and innovation within our community.",
    imageUrl: "/images/community.jpg",
    imageAlt: "Community Building",
  },
  {
    title: "Advancing Technology Access",
    description:
      "Your contribution helps ensure that women in underserved communities have access to technology and digital literacy programs. Volunteers assist in distributing tech resources and teaching essential skills, bridging the digital divide.",
    imageUrl: "/images/woman01.jpg",
    imageAlt: "Technology Access",
  },
];
interface sectionInterface {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  index: number;
}

const Section = ({
  title,
  description,
  imageUrl,
  imageAlt,
  index,
}: sectionInterface) => {
  const { animation, delay } = getAnimationProps(index);
  return (
    <Flex
      direction={{
        base: "column",
        md: index % 2 === 0 ? "row" : "row-reverse",
      }}
      align="center"
      gap={2}
      data-aos={animation}
      data-aos-delay={delay}
    >
      <VStack spacing={4} flex={1}>
        <Heading fontSize="2xl" color="brand.primary">
          {title}
        </Heading>
        <Text color="gray.700">{description}</Text>
      </VStack>
      <Image
        src={imageUrl}
        alt={imageAlt}
        boxSize={{ base: "full", md: "400px" }}
        objectFit="cover"
        borderRadius="md"
        shadow="md"
        data-aos={animation}
        data-aos-delay={delay}
      />
    </Flex>
  );
};

const BecomeAVolunteerPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing function
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <CommonHero
        title="Become a Volunteer"
        path="programs/volunteer"
        h="40vh"
        imgUrl="/images/woman02.jpg"
        data-aos="fade-up"
      />

      <Stack marginX={marginX} my="2rem" align="center">
        <Box
          py={{ base: "2rem", sm: "4rem" }}
          px={{ base: "1rem", sm: "4rem" }}
          bg="gray.50"
          textAlign="center"
          data-aos="fade-up"
        >
          <Heading mb={4} color="brand.primary" data-aos="fade-up-right">
            Why Become a Volunteer?
          </Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            color="gray.700"
            data-aos="fade-down-left"
          >
            Volunteering with us offers a chance to make a tangible difference
            in the lives of women and girls across Africa. By dedicating your
            time and skills, you help drive our mission to promote technology
            education, empower women, and foster innovation. Join us in creating
            a more inclusive tech industry and supporting the next generation of
            women leaders.
          </Text>
        </Box>

        <Stack
          spacing={12}
          py={{ base: "4rem", sm: "6rem" }}
          px={{ base: "2rem", sm: "4rem" }}
        >
          {sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              description={section.description}
              imageUrl={section.imageUrl}
              imageAlt={section.imageAlt}
              index={index}
            />
          ))}
        </Stack>
      </Stack>

      {/* Call to Action */}
      <Box
        textAlign="center"
        py={{ base: "4rem", sm: "6rem" }}
        px={{ base: "2rem", sm: "4rem" }}
        data-aos="fade-up"
      >
        <Heading fontSize="xl" mb={4} color="brand.primary">
          Ready to Make a Difference?
        </Heading>
        <Text fontSize={{ base: "md", lg: "lg" }} color="gray.700" mb={6}>
          Sign up today to become a volunteer and be a part of our mission to
          empower women in technology. Your time and skills can create lasting
          impact.
        </Text>
        <Button colorScheme="blue" size="lg">
          Sign Up to Volunteer
        </Button>
      </Box>
    </>
  );
};

export default BecomeAVolunteerPage;
