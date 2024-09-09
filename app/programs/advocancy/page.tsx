import { CommonHero } from "@/components/common";
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const AdvocacyPage = () => {
  return (
    <>
      {/* Hero Section */}
      <CommonHero
        title="Advocacy"
        path="programs/advocacy"
        h="30vh"
        imgUrl="/images/woman02.jpg"
      />

      {/* Main Content Section */}
      <Stack spacing={16} py={10} bg="gray.50">
        {/* Section 1 - Advocacy Overview */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          px={{ base: "1rem", lg: "8rem" }}
          py={{ base: "2rem", lg: "4rem" }}
          bg="white"
          boxShadow="md"
        >
          <Box flex="1" pr={{ lg: 6 }}>
            <Heading mb={4} fontSize={{ base: "2xl", lg: "3xl" }}>
              Empowering Women Through Advocacy
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Our advocacy program focuses on promoting women&apos;s rights,
              raising awareness of gender equality issues, and fighting for
              policy changes that will benefit women in all areas of society. We
              work with government institutions, businesses, and communities to
              create a more inclusive and equitable world.
            </Text>
          </Box>
          <Box flex="1" mt={{ base: 6, lg: 0 }}>
            <Image
              src="/images/advocacy1.jpg"
              alt="Women advocacy"
              borderRadius="lg"
              boxShadow="lg"
              maxH="400px"
              objectFit="cover"
            />
          </Box>
        </Flex>

        {/* Section 2 - Our Approach */}
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          align="center"
          justify="space-between"
          px={{ base: "1rem", lg: "8rem" }}
          py={{ base: "2rem", lg: "4rem" }}
          bg="white"
          boxShadow="md"
        >
          <Box flex="1" mt={{ base: 6, lg: 0 }}>
            <Image
              src="/images/advocacy2.jpg"
              alt="Advocacy programs"
              borderRadius="lg"
              boxShadow="lg"
              maxH="400px"
              objectFit="cover"
            />
          </Box>
          <Box flex="1" pl={{ lg: 6 }}>
            <Heading mb={4} fontSize={{ base: "2xl", lg: "3xl" }}>
              Our Approach
            </Heading>
            <Text fontSize="lg" color="gray.600">
              We use a multi-pronged approach to advocacy by engaging in
              policy-making, grassroots activism, and community outreach. Our
              goal is to ensure that women have a seat at the table in
              decision-making processes and that their voices are heard and
              respected.
            </Text>
          </Box>
        </Flex>

        {/* Section 3 - Get Involved */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          px={{ base: "1rem", lg: "8rem" }}
          py={{ base: "2rem", lg: "4rem" }}
          bg="white"
          boxShadow="md"
        >
          <Box flex="1" pr={{ lg: 6 }}>
            <Heading mb={4} fontSize={{ base: "2xl", lg: "3xl" }}>
              Get Involved
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Join us in advocating for women&apos;s rights by participating in
              our campaigns, attending events, or supporting our work through
              donations and volunteer opportunities. Together, we can drive
              meaningful change for women and girls across the globe.
            </Text>
          </Box>
          <Box flex="1" mt={{ base: 6, lg: 0 }}>
            <Image
              src="/images/advocacy3.jpg"
              alt="Get involved"
              borderRadius="lg"
              boxShadow="lg"
              maxH="400px"
              objectFit="cover"
            />
          </Box>
        </Flex>

        {/* Closing Section - Call to Action */}
        <Box textAlign="center" py={12} bg="purple.600" color="white">
          <Heading fontSize={{ base: "2xl", lg: "3xl" }} mb={4}>
            Ready to Make a Difference?
          </Heading>
          <Text fontSize="lg" maxW="2xl" mx="auto" mb={6}>
            Join our advocacy efforts and be part of a movement that is
            reshaping the future for women and girls. Together, we can create a
            more equitable and just world.
          </Text>
        </Box>
      </Stack>
    </>
  );
};

export default AdvocacyPage;
