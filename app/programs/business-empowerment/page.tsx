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

          {/* Section 1 - Training and Support with Image */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            mb={12}
          >
            <Image
              src="/images/business-training.jpg"
              alt="Business Training"
              boxSize="50%"
              objectFit="cover"
              borderRadius="md"
              mb={{ base: 4, md: 0 }}
              mr={{ md: 6 }}
            />
            <Box>
              <Heading fontSize={{ base: "xl", sm: "2xl" }} mb={2}>
                Comprehensive Business Training
              </Heading>
              <Text color="gray.700" fontSize="lg">
                We provide tailored business training programs designed to teach
                women the skills needed to start and manage successful
                enterprises. This includes marketing, business planning, and
                financial management.
              </Text>
            </Box>
          </Flex>

          {/* Section 2 - Networking and Mentorship with Image */}
          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            align="center"
            mb={12}
          >
            <Box>
              <Heading fontSize={{ base: "xl", sm: "2xl" }} mb={2}>
                Access to Networking and Mentorship
              </Heading>
              <Text color="gray.700" fontSize="lg">
                Through our mentorship and networking programs, we connect women
                with successful entrepreneurs, industry leaders, and other
                resources that can help accelerate their business growth.
              </Text>
            </Box>
            <Image
              src="/images/networking-mentorship.webp"
              alt="Networking and Mentorship"
              boxSize="50%"
              objectFit="cover"
              borderRadius="md"
              mb={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
            />
          </Flex>

          {/* Section 3 - Financial Support with Image */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            mb={12}
          >
            <Image
              src="/images/financial-support.jpg"
              alt="Financial Support"
              boxSize="50%"
              objectFit="cover"
              borderRadius="md"
              mb={{ base: 4, md: 0 }}
              mr={{ md: 6 }}
            />
            <Box>
              <Heading fontSize={{ base: "xl", sm: "2xl" }} mb={2}>
                Financial Support and Resources
              </Heading>
              <Text color="gray.700" fontSize="lg">
                We help women secure funding through grants, microloans, and
                partnerships with financial institutions. We also provide
                guidance on how to manage and grow their businesses sustainably.
              </Text>
            </Box>
          </Flex>

          {/* Learn More Section */}
          <Box textAlign="center" mt={16}>
            <Heading fontSize="2xl" mb={4} color="purple.600">
              Want to Learn More?
            </Heading>
            <Text fontSize="lg" mb={6} color="gray.600">
              Explore our detailed guides and resources to help you get started
              on your business journey.
            </Text>
            <Link
              href="/resources/business-guides"
              color="purple.600"
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
