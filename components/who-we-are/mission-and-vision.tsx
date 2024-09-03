import { marginX } from "@/utils/constants";
import { getImageUrl } from "@/utils/functions";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const MissionAndVision = () => {
  return (
    <Stack mt="2rem" gap="2rem" marginX={marginX}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
        <Stack data-aos="fade-right" align="center" textAlign="center" gap={3}>
          <Heading>Our Vision</Heading>
          <Text fontWeight="600" fontSize="xl">
            RE-imagine justice for good globally
          </Text>
        </Stack>{" "}
        <Box
          data-aos="flip-right"
          height="25rem"
          overflow="hidden"
          boxShadow="md"
          borderRadius="md"
        >
          <Image
            src={getImageUrl("331a8ce4-de5f-4a5c-960b-e171760ad943")}
            alt="Our Vision"
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </SimpleGrid>{" "}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
        <Box
          height="25rem"
          overflow="hidden"
          boxShadow="md"
          borderRadius="md"
          data-aos="zoom-in"
        >
          <Image
            src={getImageUrl("0cc359ae-8db9-49a9-8ac8-aac255451fc7")}
            alt="Our Mission"
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Stack data-aos="fade-left" align="center" textAlign="center" gap={3}>
          <Heading>Our Mission</Heading>
          <Text fontWeight="600" fontSize="xl">
            To work with women, girls, and children impacted by the criminal
            justice system, restoring dignity and hope for successful
            reintegration.
          </Text>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default MissionAndVision;
