import { CommonHero } from "@/components/common";
import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

const sectionsData = [
  {
    title: "Empowering Women Through Advocacy",
    description:
      "Our advocacy program focuses on promoting women's rights, raising awareness of gender equality issues, and fighting for policy changes that will benefit women in all areas of society. We work with government institutions, businesses, and communities to create a more inclusive and equitable world.",
    image: "/images/advocacy1.jpg",
    alt: "Women advocacy",
  },
  {
    title: "Our Approach",
    description:
      "We use a multi-pronged approach to advocacy by engaging in policy-making, grassroots activism, and community outreach. Our goal is to ensure that women have a seat at the table in decision-making processes and that their voices are heard and respected.",
    image: "/images/advocacy2.jpg",
    alt: "Advocacy programs",
  },
  {
    title: "Get Involved",
    description:
      "Join us in advocating for women's rights by participating in our campaigns, attending events, or supporting our work through donations and volunteer opportunities. Together, we can drive meaningful change for women and girls across the globe.",
    image: "/images/advocacy3.jpg",
    alt: "Get involved",
  },
];

const getAos = (index: number) => {
  // Return AOS animation based on the index
  return index % 2 === 0 ? "fade-right" : "fade-left";
};

const getFlipAos = (index: number) => {
  // Return flip AOS animation based on the index
  switch (index % 3) {
    case 0:
      return "flip-left";
    case 1:
      return "flip-right";
    case 2:
      return "flip-down";
    default:
      return "flip-left";
  }
};

const getReverse = (index: number) => {
  // Determine if the layout should be reversed
  return index % 2 !== 0;
};

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
        {sectionsData.map((section, index) => (
          <Flex
            key={index}
            direction={{
              base: "column",
              lg: getReverse(index) ? "row-reverse" : "row",
            }}
            align="center"
            justify="space-between"
            px={{ base: "1rem", lg: "8rem" }}
            py={{ base: "2rem", lg: "4rem" }}
            bg="white"
            boxShadow="md"
          >
            <Box
              flex="1"
              pr={{ lg: getReverse(index) ? 0 : 6 }}
              pl={{ lg: getReverse(index) ? 6 : 0 }}
              data-aos={getAos(index)}
            >
              <Heading mb={4} fontSize={{ base: "2xl", lg: "3xl" }}>
                {section.title}
              </Heading>
              <Text fontSize="lg" color="gray.600">
                {section.description}
              </Text>
            </Box>
            <Box flex="1" mt={{ base: 6, lg: 0 }}>
              <Image
                src={section.image}
                alt={section.alt}
                borderRadius="lg"
                boxShadow="lg"
                maxH="400px"
                objectFit="cover"
                data-aos={getFlipAos(index)}
              />
            </Box>
          </Flex>
        ))}

        {/* Closing Section - Call to Action */}
        <Box
          textAlign="center"
          py={12}
          bg="purple.600"
          color="white"
          data-aos="zoom-in-up"
        >
          <Heading fontSize={{ base: "2xl", lg: "3xl" }} mb={4}>
            Ready to Make a Difference?
          </Heading>
          <Text
            fontSize="lg"
            maxW="2xl"
            mx="auto"
            mb={6}
            data-aos="fade-down-right"
          >
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
