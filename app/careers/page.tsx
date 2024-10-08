"use client";

import { CommonHero } from "@/components/common";
import { teamMembers } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface JobOpening {
  title: string;
  location: string;
  description: string;
}

const Careerpage: React.FC = () => {
  const jobOpenings: JobOpening[] = [
    {
      title: "Software Engineer",
      location: "Remote",
      description:
        "Join our dynamic team to work on exciting projects and innovative solutions in a remote setting.",
    },
    {
      title: "Product Manager",
      location: "New York, NY",
      description:
        "Lead our product development team and drive new innovations in a collaborative environment.",
    },
    {
      title: "Marketing Specialist",
      location: "London, UK",
      description:
        "Develop and execute marketing strategies to enhance our brand presence across global markets.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <CommonHero title="Careers" path="careers" />

      {/* Main Content */}
      <Stack spacing={16} py={{ base: "2rem", lg: "2rem" }}>
        {/* Company Culture Section */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="center"
          px={{ base: "2rem", lg: "8rem" }}
          bg="gray.100"
          py="2rem"
          data-aos="fade-up"
        >
          <Box
            py={{ base: "2rem", lg: "2rem" }}
            px={{ base: "2rem", lg: "2rem" }}
          >
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={8}
              alignItems="center"
              justifyContent="center"
            >
              <Box data-aos="fade-right">
                <Heading
                  fontSize={{ base: "3xl", lg: "4xl" }}
                  mb={6}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Why Join Us?
                </Heading>

                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  color="gray.700"
                  textAlign={{ base: "center", md: "left" }}
                  maxW="2xl"
                  mx="auto"
                >
                  We invite you to be part of this transformative journey.
                  Whether you are a woman lookingto break into the tech
                  industry, an organization interested in partnering with us, or
                  a donor who shares our vision, there is a place for you at
                  Women in Technology and Innovation Africa. Together, we can
                  create a future where women and technology thrive in harmony
                  across Africa.
                </Text>
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  color="gray.700"
                  textAlign={{ base: "center", md: "left" }}
                  maxW="2xl"
                  mx="auto"
                >
                  Become a member of WITIA and take advantage of our programs
                  and resources.
                </Text>
              </Box>

              <Box width="100%" maxH="400px" data-aos="fade-left">
                <Image
                  src="/images/woman03.webp"
                  alt="Company Culture"
                  borderRadius="lg"
                  shadow="lg"
                  style={{ objectFit: "cover" }}
                  width="100%"
                  height="auto"
                />
              </Box>
            </Grid>
          </Box>
        </Flex>

        {/* Job Openings Section */}
        <Box px={{ base: "2rem", lg: "8rem" }} py="6rem" data-aos="fade-up">
          <Heading
            fontSize={{ base: "3xl", lg: "4xl" }}
            mb={8}
            textAlign="center"
          >
            Open Positions
          </Heading>

          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ borderRadius: "lg", overflow: "hidden" }}
              >
                <Box
                  bg="white"
                  borderRadius="lg"
                  shadow="lg"
                  p={6}
                  transition="transform 0.3s"
                >
                  <Heading fontSize="xl" mb={4}>
                    {job.title}
                  </Heading>
                  <Text fontSize="md" color="gray.600" mb={4}>
                    {job.location}
                  </Text>
                  <Text fontSize="sm" color="gray.500" mb={6}>
                    {job.description}
                  </Text>
                  <Button
                    size="md"
                    bg="purple.600"
                    color="white"
                    _hover={{ bg: "purple.400" }}
                  >
                    Apply Now
                  </Button>
                </Box>
              </motion.div>
            ))}
          </Grid>
        </Box>

        {/* Application Process Section */}
        <Box
          bg="purple.600"
          color="white"
          textAlign="center"
          py="6rem"
          px={{ base: "2rem", lg: "8rem" }}
          position="relative"
        >
          <Box
            bg="rgba(0, 0, 0, 0.4)"
            borderRadius="lg"
            p={{ base: "4rem", lg: "6rem" }}
            mx="auto"
            maxW="4xl"
            position="relative"
            zIndex={1}
            data-aos="fade-up"
          >
            <Heading fontSize={{ base: "3xl", lg: "4xl" }} mb={6}>
              How to Apply
            </Heading>
            <Text fontSize="lg" mb={8}>
              Applying for a job with us is easy! Follow these simple steps to
              get started:
            </Text>
            <Stack spacing={4} align="center">
              <Text fontSize="md" color="gray.200">
                1. Review our current job openings.
              </Text>
              <Text fontSize="md" color="gray.200">
                2. Click on &quot;Apply Now&quot; for the position you&apos;re
                interested in.
              </Text>
              <Text fontSize="md" color="gray.200">
                3. Submit your resume and cover letter.
              </Text>
              <Text fontSize="md" color="gray.200">
                4. Our HR team will review your application and get in touch.
              </Text>
            </Stack>
          </Box>
        </Box>

        {/* Team Members Section */}
        <Box
          py="6rem"
          px={{ base: "2rem", lg: "8rem" }}
          bg="gray.50"
          data-aos="fade-up"
        >
          <Heading
            fontSize={{ base: "3xl", lg: "4xl" }}
            mb={8}
            textAlign="center"
          >
            Meet Our Team
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ borderRadius: "lg", overflow: "hidden" }}
              >
                <Box
                  bg="white"
                  borderRadius="lg"
                  shadow="lg"
                  overflow="hidden"
                  transition="transform 0.3s"
                  p={4}
                  textAlign="center"
                  _hover={{ shadow: "xl" }}
                >
                  <Image
                    src={member.imgUrl}
                    alt={member.name}
                    borderRadius="full"
                    boxSize="150px"
                    style={{ objectFit: "cover" }}
                    mx="auto"
                  />
                  <Heading fontSize="xl" mt={4}>
                    {member.name}
                  </Heading>
                  <Text fontSize="md" color="gray.600" mt={2}>
                    {member.role}
                  </Text>
                  <Text fontSize="sm" color="gray.500" mt={2}>
                    {member.description}
                  </Text>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </>
  );
};

export default Careerpage;
