import { CommonHero } from "@/components/common";
import { partners } from "@/utils/constants";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const PartnerWithUs = () => {
  return (
    <>
      {/* Hero Section */}
      <CommonHero
        title="Partner With Us"
        path="join-us/partner-with-us"
        h="50vh"
        imgUrl="/images/woman02.jpg"
      />

      {/* Main Content */}
      <Stack spacing={16} py={10} bg="gray.100">
        {/* Section 1: Why Partner With Us */}
        <Box px={{ base: "1rem", lg: "8rem" }} py="6rem" textAlign="center">
          <Heading fontSize={{ base: "3xl", lg: "4xl" }} mb={6}>
            Why Partner With Us?
          </Heading>
          <Text fontSize="lg" color="gray.700" mb={8} maxW="3xl" mx="auto">
            Partnering with us provides your organization with the opportunity
            to make a lasting impact. Together, we can empower communities,
            foster innovation, and create a better future. Let&apos;s
            collaborate to achieve meaningful goals.
          </Text>
          <Button
            size="lg"
            bg="purple.600"
            color="white"
            _hover={{ bg: "purple.400" }}
            shadow="xl"
          >
            Become a Partner
          </Button>
        </Box>

        {/* Section 2: Partners */}
        <Box px={{ base: "1rem", lg: "8rem" }} py="6rem" bg="white">
          <Heading
            fontSize={{ base: "3xl", lg: "4xl" }}
            mb={8}
            textAlign="center"
          >
            Our Partners
          </Heading>

          {/* Partner Logos Grid */}
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap={4}
            px={{ base: "1rem", lg: "4rem" }}
            justifyItems="center"
            alignItems="center"
          >
            {partners.map((partner, index) => (
              <GridItem key={index}>
                <Box
                  boxSize="250px"
                  bg="white"
                  borderRadius="lg"
                  shadow="md"
                  p={4}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.05)" }}
                  as="a"
                  href={partner.link}
                  target="_blank"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.title} logo`}
                    maxW="100%"
                    maxH="100%"
                    objectFit="contain"
                  />
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>

        {/* Section 3: Call to Action */}
        <Box
          py="6rem"
          bgImage="/images/woman02.jpg"
          bgSize="cover"
          bgPos="center"
          color="white"
          textAlign="center"
          position="relative"
        >
          <Box
            bg="rgba(0, 0, 0, 0.7)"
            py="4rem"
            px={{ base: "2rem", lg: "6rem" }}
            borderRadius="xl"
          >
            <Heading fontSize={{ base: "3xl", lg: "5xl" }} mb={6}>
              Ready to Make a Difference?
            </Heading>
            <Text fontSize="lg" maxW="2xl" mx="auto" mb={8} lineHeight="1.6">
              Join hands with us today and become a part of a growing network
              committed to creating positive change. Your partnership can make
              all the difference.
            </Text>
            <Button
              size="lg"
              bg="purple.600"
              color="white"
              _hover={{ bg: "purple.400" }}
              shadow="xl"
            >
              Partner With Us
            </Button>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default PartnerWithUs;
