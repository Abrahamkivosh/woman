"use client";
import { CommonHero } from "@/components/common";
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

const BecomeAVolunteerPage = () => {
  return (
    <>
      {/* Hero Section */}
      <CommonHero
        title="Become a Volunteer"
        path="programs/volunteer"
        h="40vh"
        imgUrl="/images/woman02.jpg"
      />

      <Stack marginX={marginX} my="2rem" align="center">
        <Box
          py={{ base: "2rem", sm: "4rem" }}
          px={{ base: "1rem", sm: "4rem" }}
          bg="gray.50"
          textAlign="center"
        >
          <Heading mb={4} color="brand.primary">
            Why Become a Volunteer?
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color="gray.700">
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
          {/* Text and Image Section 1 */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={2}
          >
            <VStack spacing={4} flex={1}>
              <Heading fontSize="2xl" color="brand.primary">
                Empowering Women Through Education
              </Heading>
              <Text color="gray.700">
                Our education and training programs are designed to provide
                accessible technology education and scholarships. Volunteers
                play a crucial role in mentoring and guiding participants,
                ensuring they have the resources and support needed to succeed.
              </Text>
            </VStack>
            <Image
              src="/images/girlpower.png"
              alt="Education and Training"
              boxSize={{ base: "full", md: "400px" }}
              objectFit="cover"
              borderRadius="md"
              shadow="md"
            />
          </Flex>

          {/* Text and Image Section 2 */}
          <Flex
            direction={{ base: "column", md: "row-reverse" }}
            align="center"
            gap={2}
          >
            <VStack spacing={4} flex={1}>
              <Heading fontSize="2xl" color="brand.primary">
                Building a Strong Community
              </Heading>
              <Text color="gray.700">
                By volunteering, you help us build a supportive network of women
                in technology. Your involvement in organizing events, workshops,
                and hackathons is vital for fostering collaboration and
                innovation within our community.
              </Text>
            </VStack>
            <Image
              src="/images/community.jpg"
              alt="Community Building"
              boxSize={{ base: "full", md: "400px" }}
              objectFit="cover"
              borderRadius="md"
              shadow="md"
            />
          </Flex>

          {/* Text and Image Section 3 */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={2}
          >
            <VStack spacing={4} flex={1}>
              <Heading fontSize="2xl" color="brand.primary">
                Advancing Technology Access
              </Heading>
              <Text color="gray.700">
                Your contribution helps ensure that women in underserved
                communities have access to technology and digital literacy
                programs. Volunteers assist in distributing tech resources and
                teaching essential skills, bridging the digital divide.
              </Text>
            </VStack>
            <Image
              src="/images/woman01.jpg"
              alt="Technology Access"
              boxSize={{ base: "full", md: "400px" }}
              objectFit="cover"
              borderRadius="md"
              shadow="md"
            />
          </Flex>
        </Stack>
      </Stack>

      {/* Call to Action */}
      <Box
        textAlign="center"
        py={{ base: "4rem", sm: "6rem" }}
        px={{ base: "2rem", sm: "4rem" }}
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
