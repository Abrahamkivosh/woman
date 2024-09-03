import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import DonateButton from "../common/donate-btn";
import { marginX } from "@/utils/constants";

const BottomCTA = () => {
  return (
    <Stack
      bgImage="/bottom-cta.png"
      h={{ base: "60vh", sm: "75vh" }}
      bgSize="cover"
      pt="3rem"
      bgPos={{ base: "40% 50%", sm: "50% 30%" }}
      justify="center"
      align="center"
    >
      <Stack
        color="brand.white"
        maxW="3xl"
        align="center"
        textAlign="center"
        mx={marginX}
        gap="1rem"
      >
        <Heading
          fontSize={{ base: "1.4rem", sm: "2rem", md: "3rem" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Help us have an even bigger impact on Women, Girls and Children
          impacted by the criminal justice system.
        </Heading>
        <Box data-aos="zoom-in-left" data-aos-delay="200">
          <DonateButton />
        </Box>
      </Stack>
    </Stack>
  );
};

export default BottomCTA;
