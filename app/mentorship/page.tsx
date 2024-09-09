"use client";
import { CommonHero } from "@/components/common";
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

const MentorshipPage = () => {
  return (
    <>
      {/* Hero Section */}
      <CommonHero path="mentorship" h="40vh"></CommonHero>

      {/* Content Sections */}
      <Stack
        spacing={12}
        py={{ base: "4rem", sm: "6rem" }}
        px={{ base: "2rem", sm: "4rem" }}
      >
        <Flex direction={{ base: "column", md: "row" }} align="center" gap={4}>
          <VStack spacing={4} flex={1}>
            <Heading fontSize="2xl" color="teal.600">
              Gain Insights and Knowledge
            </Heading>
            <Text color="gray.700">
              Our mentorship program offers you the chance to gain valuable
              knowledge and insights from experienced professionals. Learn new
              skills and advance your career with the guidance of our mentors.
            </Text>
          </VStack>
          <Image
            src="/images/business-training.jpg"
            alt="Mentorship Insights"
            borderRadius="md"
            boxShadow="lg"
            flex={1}
            objectFit="cover"
            maxH={400}
          />
        </Flex>

        <Flex
          direction={{ base: "column", md: "row-reverse" }}
          align="center"
          gap={4}
        >
          <VStack spacing={4} flex={1}>
            <Heading fontSize="2xl" color="teal.600">
              Build Professional Relationships
            </Heading>
            <Text color="gray.700">
              Connect with mentors who can help you build strong professional
              relationships that open doors to new opportunities. Network with
              industry leaders and grow your career.
            </Text>
          </VStack>
          <Image
            src="/images/community.jpg"
            alt="Professional Relationships"
            borderRadius="md"
            boxShadow="lg"
            flex={1}
            objectFit="cover"
            maxH={400}
          />
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} align="center" gap={4}>
          <VStack spacing={4} flex={1}>
            <Heading fontSize="2xl" color="teal.600">
              Contribute to the Community
            </Heading>
            <Text color="gray.700">
              Share your experience and knowledge to contribute to the growth of
              the technology community. Be a part of shaping the future of the
              tech industry through mentorship.
            </Text>
          </VStack>
          <Image
            src="/images/history02.webp"
            alt="Community Contribution"
            borderRadius="md"
            boxShadow="lg"
            flex={1}
            objectFit="cover"
            maxH={400}
          />
        </Flex>
      </Stack>

      {/* Call to Action */}
      <Box
        textAlign="center"
        py={{ base: "4rem", sm: "6rem" }}
        px={{ base: "2rem", sm: "4rem" }}
        bg="teal.50"
        borderRadius="md"
        boxShadow="lg"
      >
        <Heading fontSize="xl" mb={4} color="teal.600">
          Ready to Make an Impact?
        </Heading>
        <Text fontSize={{ base: "md", lg: "lg" }} color="gray.700" mb={6}>
          Join our mentorship program today and help shape the future of
          aspiring technology professionals. Your expertise can make a
          difference!
        </Text>
        <Button colorScheme="teal" size="lg">
          Sign Up as a Mentor
        </Button>
      </Box>
    </>
  );
};

export default MentorshipPage;
