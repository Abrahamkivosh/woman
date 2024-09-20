"use client";
import { CommonHero } from "@/components/common";
import { marginX } from "@/utils/constants";
import {
  Box,
  Flex,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

// Partners data
const partners = [
  {
    logo: "/partners/microsoft.png",
    link: "https://www.microsoft.com",
    title: "Microsoft",
  },
  {
    logo: "/partners/google.webp",
    link: "https://www.google.com",
    title: "Google",
  },
  {
    logo: "/partners/aws.png",
    link: "https://aws.amazon.com",
    title: "Amazon Web Services (AWS)",
  },
  {
    logo: "/partners/ibm.png",
    link: "https://www.ibm.com",
    title: "IBM",
  },
];

// Page component
const page = () => {
  return (
    <>
      <CommonHero
        title="Our Partners"
        path="partners"
        imgUrl="/images/woman02.jpg"
      />

      <Stack spacing={8}>
        {/* Intro Section */}
        <Box
          width="100%"
          bgGradient="linear(to-r, purple.500, purple.600)"
          color="white"
          fontWeight="bold"
          py={{ base: "1.5rem", sm: "2rem" }}
          textAlign="center"
        >
          <Text fontSize={{ base: "lg", sm: "2xl" }} data-aos="fade-up">
            We are proud to partner with these leading organizations to drive
            innovation and success.
          </Text>
        </Box>

        {/* Partners Section */}
        <Box mx={marginX} py={{ base: "2rem", sm: "4rem" }}>
          <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={10}>
            {partners.map((partner, index) => (
              <Link
                key={index}
                href={partner.link}
                isExternal
                data-aos="fade-up"
              >
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  bg="white"
                  borderRadius="lg"
                  boxShadow="md"
                  transition="all 0.3s ease"
                  _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
                  p={4}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.title}
                    boxSize={{ base: "80px", sm: "100px" }}
                    objectFit="contain"
                    mb={4}
                    loading="lazy"
                    style={{
                      filter: "grayscale(1)",
                      transition: "all 0.3s ease",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                  <Text fontWeight="semibold" fontSize="md" color="gray.700">
                    {partner.title}
                  </Text>
                </Flex>
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </>
  );
};

export default page;
