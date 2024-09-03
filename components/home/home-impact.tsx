import { marginX } from "@/utils/constants";
import {
  Box,
  SimpleGrid,
  Stat,
  StatHelpText,
  StatNumber,
} from "@chakra-ui/react";
import CHeading from "../common/c-heading";
import { AnimatedCounter } from "../common/animated-counter";

const whatData = [
  {
    label: "+",
    number: 4000,
    text: `
   The number of incarcerated women who have been supported by Clean Start Africa with spiritual and emotional care, mentorship, dignity packs, and life skills training. This has improved the mental well-being, dignity, respect, and self-esteem of incarcerated women.  

    `,
  },
  {
    label: "+",
    number: 332,
    text: "The total number of women trained under the Ufunuo Program in and outside prison. Langata, Nyeri, Busia, Thika, Embu,Muranga, Nakuru and Narok.",
  },
  {
    label: "+",
    number: 500,
    text: "The number of formerly Incarcerated women in Clean Start Africa has facilitated income-generating life skills, entrepreneurship, and trade employment opportunities.",
  },
  {
    label: "+",
    number: 286,
    text: "The number of women who have taken Clean Start Africa's Ufunuo program, providing them with reconciliation, psycho-social support, and trauma healing.",
  },
];

const HomeImpact = ({ show = true }) => {
  return (
    <Box marginX={marginX} my="3rem">
      <Box display={show ? "block" : "none"}>
        <CHeading>Our Impact</CHeading>
      </Box>

      <SimpleGrid mt="1rem" columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
        {whatData.map((stat, i) => (
          <Stat
            key={i}
            borderRadius="xl"
            bg="brand.secondary"
            p={3}
            textAlign="center"
            color="brand.black"
            boxShadow="xl"
            data-aos="fade-up"
            data-aos-delay={i * 200}
          >
            <StatNumber fontSize="3.5rem">
              <AnimatedCounter from={0} to={stat.number} />
              {stat.label}
            </StatNumber>
            <StatHelpText fontSize="md" noOfLines={3} fontWeight="semibold">
              {stat.text}
            </StatHelpText>
          </Stat>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomeImpact;
