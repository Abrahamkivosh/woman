import { marginX } from "@/utils/constants";
import {
  AuthenticIcon,
  CommunityIcon,
  EmpathyIcon,
  NormIcon,
  OwnershipIcon,
  PainIcon,
} from "@/utils/icons";
import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import CHeading from "../common/c-heading";

const coreValues = [
  {
    title: "Empathy",
    bg: "brand.primary",
    icon: EmpathyIcon,
  },
  {
    title: "Ownership",
    icon: OwnershipIcon,
  },
  {
    title: "Pain Outreach",
    icon: PainIcon,
    bg: "brand.primary",
  },
  {
    title: "Integrity",
    icon: CommunityIcon,
  },
  {
    title: "New Norm",
    icon: NormIcon,
    bg: "brand.primary",
  },
  {
    title: "Authenticity",
    icon: AuthenticIcon,
  },
];

const CoreValues = () => {
  return (
    <Stack my="6rem" marginX={marginX}>
      <CHeading>Core Values</CHeading>
      <SimpleGrid
        mt="2rem"
        alignItems="center"
        columns={{ base: 1, sm: 2, md: 3 }}
        gap={8}
      >
        {coreValues.map((value, i) => (
          <Stack
            key={i}
            data-aos="fade-left"
            data-aos-delay={i * 100}
            borderRadius="xl"
            border="2px solid transparent"
            gap={4}
            padding="2rem 1rem"
            align="center"
            color="white"
            bg={value.bg || "brand.black"}
            transition="background-color 0.3s"
            _hover={{
              bg: "brand.black",
            }}
          >
            <Box as={value.icon} boxSize="6rem" />
            <Heading fontSize="2xl" textAlign="center">
              {value.title}
            </Heading>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default CoreValues;
