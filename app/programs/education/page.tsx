"use client";
import { CommonHero } from "@/components/common";
import { marginX } from "@/utils/constants";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import { APP_NAME } from "@/config";
import "./education.module.scss";

// Page component
const page = () => {
  return (
    <>
      <CommonHero
        title="Education"
        path="education"
        imgUrl="/images/woman02.jpg"
      />

      <Stack spacing={10} py={0}>
        {/* Intro Section */}
        <Box
          width="100%"
          bgGradient="linear(to-r, purple.500, purple.700)"
          color="white"
          py={{ base: "2rem", sm: "3rem" }}
          textAlign="center"
        >
          <Text
            fontSize={{ base: "xl", sm: "2xl" }}
            fontWeight="bold"
            data-aos="fade-up"
          >
            Accessible and affordable technology education and training programs
            for women and girls.
          </Text>
        </Box>

        {/* Education Section */}
        <Box mx={marginX} py={{ base: "3rem", sm: "4rem" }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {/* Left Text Content */}
            <Box>
              <Heading
                fontSize="3xl"
                fontWeight="bold"
                mb={4}
                data-aos="fade-right"
              >
                Empowering Women Through Education and Technology
              </Heading>
              <Text fontSize="lg" mb={6}>
                At{" "}
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
                    color="brand.primary"
                    cursor="pointer"
                    fontWeight="800"
                  >
                    WITIA
                  </Text>
                </Tooltip>{" "}
                , we believe that education is the cornerstone of empowerment.
                Our education programs are tailored to equip women with the
                technical skills and knowledge required to excel in today’s
                fast-paced tech environment. We offer:
              </Text>

              {/* Card-like Section */}
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {/* Card 1: Training Programs */}
                <Flex
                  direction="column"
                  bg="purple.100"
                  borderRadius="md"
                  boxShadow="md"
                  p={5}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Heading fontSize="2xl" color="purple.700" mb={3}>
                    Training Programs
                  </Heading>
                  <Text fontSize="md" color="gray.600">
                    Comprehensive courses covering essential areas such as
                    coding, data science, cybersecurity, artificial
                    intelligence, and more. Our curriculum is inclusive,
                    accessible, and aligned with industry standards.
                  </Text>
                </Flex>

                {/* Card 2: Workshops */}
                <Flex
                  direction="column"
                  bg="purple.100"
                  borderRadius="md"
                  boxShadow="md"
                  p={5}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <Heading fontSize="2xl" color="purple.700" mb={3}>
                    Workshops
                  </Heading>
                  <Text fontSize="md" color="gray.600">
                    Hands-on workshops led by industry experts focusing on
                    practical skills and real-world applications. Apply what you
                    learn directly to your career or entrepreneurial ventures.
                  </Text>
                </Flex>

                {/* Card 3: Scholarships */}
                <Flex
                  direction="column"
                  bg="purple.100"
                  borderRadius="md"
                  boxShadow="md"
                  p={5}
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Heading fontSize="2xl" color="purple.700" mb={3}>
                    Scholarships
                  </Heading>
                  <Text fontSize="md" color="gray.600">
                    We provide scholarships to women who show promise and
                    dedication in tech. Our scholarships aim to break financial
                    barriers and provide access to high-quality tech education.
                  </Text>
                </Flex>
              </SimpleGrid>
            </Box>

            {/* Right Image */}
            <Box>
              <Image
                src="/images/woman03.webp"
                alt="Education Programs"
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
                borderRadius="lg"
                boxShadow="lg"
              />
            </Box>
          </SimpleGrid>

          {/* Additional Information Section */}
          <Box textAlign="center" py={10} bg="gray.50">
            <Heading as="h2" fontSize="3rem" mb={6} data-aos="fade-up">
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
              <Box width="40%" data-aos="zoom-out-left">
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
                  data-aos="zoom-out-down"
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
