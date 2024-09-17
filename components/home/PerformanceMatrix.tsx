import { APP_NAME } from "@/config";
import { marginX } from "@/utils/constants";
import {
  Box,
  Flex,
  Heading,
  Image,
  Progress,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaUsers } from "react-icons/fa"; // Import an icon for the card

const PerformanceMatrix = () => {
  return (
    <Box mt={{ base: "1rem", sm: "1rem" }}>
      <SimpleGrid
        marginX={marginX}
        columns={{ base: 1, md: 2 }}
        spacing={8}
        alignItems="center"
      >
        <Stack gap={{ base: 2, sm: 4 }} data-aos="fade-right">
          <Heading
            as="h3"
            fontSize={{ base: "xl", sm: "4xl" }}
            color="brand.primary"
            textAlign="center"
          >
            What We Have Managed to Improve
          </Heading>
          <Box mt={4}>
            {/* Progress bars with AOS animations */}
            <Text fontSize={{ base: "md", sm: "lg" }} fontWeight="bold">
              Education & Training
            </Text>
            <Progress
              value={85}
              size="md"
              colorScheme="green"
              borderRadius="md"
            />
            <Text mt={2} fontSize={{ base: "sm", sm: "md" }} color="gray.600">
              85% of women have gained access to tech education.
            </Text>

            <Text fontSize={{ base: "md", sm: "lg" }} fontWeight="bold" mt={4}>
              Employment Opportunities
            </Text>
            <Progress
              value={70}
              size="md"
              colorScheme="blue"
              borderRadius="md"
            />
            <Text mt={2} fontSize={{ base: "sm", sm: "md" }} color="gray.600">
              70% of women have secured jobs in the tech industry.
            </Text>

            <Text fontSize={{ base: "md", sm: "lg" }} fontWeight="bold" mt={4}>
              Leadership Roles
            </Text>
            <Progress
              value={60}
              size="md"
              colorScheme="purple"
              borderRadius="md"
            />
            <Text mt={2} fontSize={{ base: "sm", sm: "md" }} color="gray.600">
              60% of women have taken on leadership roles in tech.
            </Text>
          </Box>
        </Stack>

        <Box position="relative">
          {/* Main Image */}
          <Box
            height={{ base: "20rem", sm: "30rem" }}
            overflow="hidden"
            borderRadius="xl"
            boxShadow="xl"
            data-aos-delay="100"
            data-aos="fade-left"
            mt="20px" // Move the main image down to make space for the top image
          >
            <Image
              src="/images/woman01.jpg"
              alt={APP_NAME}
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Card with Total Helped Women */}
          <Flex
            position="absolute"
            bottom="30%"
            left="0%"
            transform="translateX(-50%)"
            alignItems="center"
            background="rgba(0,0,0,0.5)"
            borderRadius="xl"
            boxShadow="xl"
            p={4}
            width={{ base: "40%", md: "40%", sm: "100%" }}
            zIndex="2"
            flexDir="column"
            data-aos-delay="100"
            data-aos="fade-up"
          >
            <FaUsers size="4rem" color="white" />
            <Box ml={4} textAlign="center">
              <Text
                fontSize={{ base: "3rem", md: "3rem", sm: "2rem" }}
                fontWeight="bold"
                color="brand.white"
              >
                1,000+
              </Text>
              <Text fontSize="md" color="white">
                Women Helped
              </Text>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default PerformanceMatrix;
