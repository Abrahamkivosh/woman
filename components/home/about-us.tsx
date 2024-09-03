import { marginX } from "@/utils/constants";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import CHeading from "../common/c-heading";

const AboutUs = () => {
  return (
    <Box mt={{ base: "1.5rem", sm: "3rem" }}>
      <CHeading>About Us</CHeading>
      <SimpleGrid
        marginX={marginX}
        columns={{ base: 1, md: 2 }}
        spacing={8}
        alignItems="center"
        mt={{ base: "1rem", sm: "1.5rem" }}
        my={{ base: "1rem", sm: "4rem" }}
      >
        <Stack gap={{ base: 2, sm: 4 }} data-aos="fade-up">
          <Heading
            as="h3"
            fontSize={{ base: "xl", sm: "4xl" }}
            color="brand.primary"
          >
            Clean Start Africa is an award-winning social enterprise.
          </Heading>
          <Text fontSize={{ base: "md", sm: "lg" }}>
            Our mission is to work with women, girls and children impacted by
            the criminal justice system, to restore dignity and hope for
            successful reintegration. <br /> We are addressing systemic and
            socio-economic injustices that lead to the imprisonment of the
            vulnerable and poor, through advocacy, bridging the capacity gap to
            mitigate the limited capacity of prisons to rehabilitate and reform
            inmates.
          </Text>
        </Stack>
        <Box
          height={{ base: "20rem", sm: "30rem" }}
          overflow="hidden"
          borderRadius="xl"
          boxShadow="xl"
          data-aos-delay="100"
          data-aos="fade-left"
        >
          <Image
            src="/awards.jpg"
            alt="Clean Start Africa"
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default AboutUs;
