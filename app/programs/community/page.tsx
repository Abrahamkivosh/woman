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

const CommunityPage = () => {
  return (
    <>
      {/* Hero Section */}
      <CommonHero
        title="Community"
        path="programs/community"
        h="60vh"
        imgUrl="/images/woman02.jpg"
      />

      {/* Main Content Section */}
      <Stack spacing={16} py={10} bg="gray.100">
        {/* Section 1: Welcome to Our Community */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          px={{ base: "1rem", lg: "8rem" }}
          py={{ base: "4rem", lg: "6rem" }}
          bgGradient="linear(to-r, purple.500, pink.300)"
          color="white"
          borderRadius="xl"
          shadow="2xl"
          position="relative"
        >
          <Box flex="1" zIndex={2}>
            <Heading
              fontSize={{ base: "2xl", lg: "4xl" }}
              mb={4}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Welcome to Our Vibrant Community
            </Heading>
            <Text fontSize="lg" mb={6}>
              Join hands with us in creating a space where everyone thrives. Our
              community is built on shared values, support, and collaboration.
              Together, we can achieve great things and foster growth.
            </Text>
            <Button
              bg="white"
              color="purple.600"
              size="lg"
              _hover={{ bg: "purple.300", color: "white" }}
              shadow="lg"
            >
              Join Us Today
            </Button>
          </Box>
          <Box flex="1" mt={{ base: 6, md: 0 }}>
            <Image
              src="/images/girlpower.png"
              alt="Community Together"
              borderRadius="xl"
              objectFit="cover"
              maxH="400px"
              shadow="2xl"
            />
          </Box>
        </Flex>

        {/* Section 2: Our Core Values */}
        <Box px={{ base: "2rem", lg: "8rem" }} py="6rem">
          <Heading
            textAlign="center"
            fontSize={{ base: "3xl", lg: "5xl" }}
            mb={12}
          >
            Our Core Values
          </Heading>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-around"
            align="center"
            spacing={8}
          >
            <VStack spacing={6} flex="1" maxW="300px" textAlign="center">
              <Image src="/images/community.jpg" alt="Collaboration" />
              <Heading fontSize="2xl" color="purple.700">
                Collaboration
              </Heading>
              <Text>
                We believe in working together, pooling resources, and creating
                synergy to foster a productive environment.
              </Text>
            </VStack>
            <VStack spacing={6} flex="1" maxW="300px" textAlign="center">
              <Image src="/images/empowerment.jpg" alt="Empowerment" />
              <Heading fontSize="2xl" color="purple.700">
                Empowerment
              </Heading>
              <Text>
                Every individual in our community is empowered to grow and
                contribute to the greater good.
              </Text>
            </VStack>
            <VStack spacing={6} flex="1" maxW="300px" textAlign="center">
              <Image src="/images/innovation.jpeg" alt="Innovation" />
              <Heading fontSize="2xl" color="purple.700">
                Innovation
              </Heading>
              <Text>
                We encourage innovation and creative solutions to tackle the
                challenges of today and tomorrow.
              </Text>
            </VStack>
          </Flex>
        </Box>

        {/* Section 3: Call to Action */}
        <Box
          bgImage="/images/africa-woman.jpg"
          bgSize="cover"
          bgPos="center"
          color="white"
          py={{ base: "4rem", lg: "8rem" }}
          position="relative"
          zIndex={1}
        >
          <Box
            bg="rgba(0, 0, 0, 0.6)"
            py="4rem"
            px={{ base: "2rem", lg: "6rem" }}
            borderRadius="xl"
          >
            <Heading
              textAlign="center"
              fontSize={{ base: "3xl", lg: "5xl" }}
              mb={6}
            >
              Become Part of the Change
            </Heading>
            <Text
              fontSize="lg"
              textAlign="center"
              maxW="3xl"
              mx="auto"
              mb={8}
              lineHeight="1.6"
            >
              Our community is dedicated to uplifting one another and promoting
              equality. Whether you want to contribute your time, skills, or
              resources, there&apos;s always a place for you. Let&apos;s build a
              better future together.
            </Text>
            <Flex justify="center">
              <Button
                size="lg"
                bg="purple.600"
                color="white"
                _hover={{ bg: "purple.400" }}
                shadow="xl"
              >
                Get Involved
              </Button>
            </Flex>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default CommunityPage;
