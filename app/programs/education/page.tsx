"use client";
import { CommonHero } from "@/components/common";
import { marginX } from "@/utils/constants";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";

import "./education.module.scss";

// Page component
const page = () => {
  return (
    <>
      <CommonHero
        title="Education"
        path="education"
        h="30vh"
        imgUrl="/images/woman02.jpg"
      />

      <Stack spacing={10} py={8}>
        {/* Intro Section */}
        <Box
          width="100%"
          bgGradient="linear(to-r, purple.500, purple.700)"
          color="white"
          py={{ base: "2rem", sm: "3rem" }}
          textAlign="center"
        >
          <Text fontSize={{ base: "xl", sm: "2xl" }} fontWeight="bold">
            Accessible and affordable technology education and training programs
            for women and girls.
          </Text>
        </Box>

        {/* Education Section */}
        <Box mx={marginX} py={{ base: "3rem", sm: "4rem" }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {/* Left Text Content */}
            <Box>
              <Heading fontSize="3xl" fontWeight="bold" mb={4}>
                Accelerate your education and career with our programs
              </Heading>
              <Text fontSize="lg" mb={6}>
                We offer a variety of programs to help you learn new skills and
                advance your career.
              </Text>
              <Box>
                <Heading as="h3" fontSize="2xl" fontWeight="semibold" mb={4}>
                  Programs
                </Heading>
                <UnorderedList spacing={3} fontSize="lg">
                  <ListItem>Technology Education</ListItem>
                  <ListItem>Professional Development</ListItem>
                  <ListItem>Leadership Training</ListItem>
                  <ListItem>Entrepreneurship</ListItem>
                </UnorderedList>
              </Box>
              <Button
                colorScheme="purple"
                size="lg"
                mt={8}
                _hover={{ bg: "purple.600" }}
              >
                <Link href="/contact-us">Get Started</Link>
              </Button>
            </Box>

            {/* Right Image */}
            <Box>
              <Image
                src="/images/woman03.webp"
                alt="Education Programs"
                width="100%"
                height="100%"
                objectFit="cover"
                borderRadius="lg"
                boxShadow="lg"
              />
            </Box>
          </SimpleGrid>

          <Box textAlign="center" py={10} bg="gray.50">
            <Heading as="h2" fontSize="3rem" mb={6}>
              We Provide a Human-Centered Approach
            </Heading>

            {/* Card Section with Video */}
            <Flex
              direction={{ base: "column", md: "row" }}
              align="top"
              justify="center"
              py={10}
              borderRadius={{ base: "none", md: "lg" }}
              boxShadow="lg"
              bg="white"
              px={10}
            >
              <Box width="40%">
                <Heading as="h3" fontSize="2xl" fontWeight="semibold" mb={4}>
                  Our Approach
                </Heading>
                <Text fontSize="lg" mb={4} color="gray.500">
                  Our programs are designed to empower you with the tools and
                  skills you need to succeed in the modern workforce. Join us
                  and start your journey today.
                </Text>
              </Box>

              <AspectRatio width="60%" ratio={16 / 9}>
                <video
                  src="/videos/short.mp4"
                  playsInline
                  controls
                  width="100%"
                  height="100%"
                  className="video-player"
                />
              </AspectRatio>
            </Flex>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default page;
