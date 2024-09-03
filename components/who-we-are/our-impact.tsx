import { marginX } from "@/utils/constants";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Progress,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import ImpactCTA from "./impact-cta";

const OurImpactContent = () => {
  return (
    <Stack gap={6} mx={marginX} my="3rem">
      <Heading textAlign="center">Our Impact By the Numbers</Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={8}
        alignItems="center"
        justifyItems="center"
      >
        <Box>
          <CircularProgress value={40} size="16rem" color="brand.primary">
            <CircularProgressLabel fontWeight="semibold">
              40%
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Stack>
          <Text fontSize="2xl">
            Between 1980 and 2019, the number of incarcerated women increased by
            more than 700%, rising from a total of 26,378 in 1980 to 222,455 in
            2019.
          </Text>
        </Stack>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
        <Box>
          <Progress
            value={55}
            colorScheme="primary"
            size="lg"
            bg="primary.100"
          />
        </Box>

        <Stack>
          <Text fontSize="2xl">
            of the women who will go to jail this year are mothers — including
            55,000 women who are pregnant when they are admitted.
          </Text>
        </Stack>
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={8}
        alignItems="center"
        justifyItems="center"
      >
        <Box>
          <CircularProgress value={40} size="16rem" color="brand.primary">
            <CircularProgressLabel fontWeight="semibold">
              40%
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Stack>
          <Text fontSize="2xl">
            Between 1980 and 2019, the number of incarcerated women increased by
            more than 700%, rising from a total of 26,378 in 1980 to 222,455 in
            2019.
          </Text>
        </Stack>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} alignItems="center">
        <Box>
          <Progress
            value={55}
            colorScheme="primary"
            size="lg"
            bg="primary.100"
          />
        </Box>

        <Stack>
          <Text fontSize="2xl">
            of the women who will go to jail this year are mothers — including
            55,000 women who are pregnant when they are admitted.
          </Text>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default OurImpactContent;
