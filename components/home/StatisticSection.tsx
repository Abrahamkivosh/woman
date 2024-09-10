import {
  Box,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { AnimatedCounter } from "../common/animated-counter";

const statistics = [
  {
    label: "Projects Completed",
    number: "150",
    helpText: "In the last year",
  },
  {
    label: "Satisfied Clients",
    number: "300",
    helpText: "Across the globe",
  },
  {
    label: "Awards Won",
    number: "25",
    helpText: "In various categories",
  },
];

const StatisticSection = () => {
  return (
    <Box
      as="section"
      mt={{ base: "1.5rem", sm: "3rem" }}
      bgImage="url('/images/woman02.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      py={{ base: "2rem", sm: "4rem" }}
      px={{ base: "1rem", sm: "2rem" }}
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.6)" // Adjust the opacity as needed
        zIndex={0}
      />
      <Box position="relative" zIndex={1}>
        <Text
          textAlign="center"
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight="bold"
          color="white"
          mb={{ base: "1.5rem", sm: "3rem" }}
        >
          Our Achievements
        </Text>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: "2rem", sm: "3rem" }}
        >
          {statistics.map((stat, index) => (
            <Stat
              key={index}
              textAlign="center"
              color="white"
              bg="brand.primary"
              py={3}
              borderRadius={10}
            >
              <StatLabel fontSize="lg">{stat.label}</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold">
                <AnimatedCounter from={0} to={parseInt(stat.number)} />
              </StatNumber>
              <StatHelpText>{stat.helpText}</StatHelpText>
            </Stat>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default StatisticSection;
