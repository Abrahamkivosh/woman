import {
  Box,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react";

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
          <Stat
            textAlign="center"
            color="white"
            bg="brand.primary"
            py={3}
            borderRadius={10}
          >
            <StatLabel fontSize="lg">Projects Completed</StatLabel>
            <StatNumber fontSize="3xl" fontWeight="bold">
              150+
            </StatNumber>
            <StatHelpText>In the last year</StatHelpText>
          </Stat>
          <Stat
            textAlign="center"
            color="white"
            bg="brand.primary"
            py={3}
            borderRadius={10}
          >
            <StatLabel fontSize="lg">Satisfied Clients</StatLabel>
            <StatNumber fontSize="3xl" fontWeight="bold">
              300+
            </StatNumber>
            <StatHelpText>Across the globe</StatHelpText>
          </Stat>
          <Stat
            textAlign="center"
            color="white"
            bg="brand.primary"
            py={3}
            borderRadius={10}
          >
            <StatLabel fontSize="lg">Awards Won</StatLabel>
            <StatNumber fontSize="3xl" fontWeight="bold">
              25
            </StatNumber>
            <StatHelpText>In various categories</StatHelpText>
          </Stat>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default StatisticSection;
