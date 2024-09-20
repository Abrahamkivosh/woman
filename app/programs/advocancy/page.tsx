import { CommonHero } from "@/components/common";
import { APP_NAME } from "@/config";
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";

const sectionsData = [
  {
    title: "Raising Awareness",
    description:
      "We conduct campaigns and initiatives to highlight the importance of women’s participation in technology. Through storytelling, media engagement, and public speaking, we bring attention to the issues that matter most.",
    image: "/images/advocacy1.jpg",
    alt: "Raising Awareness",
  },
  {
    title: "Policy Influence",
    description:
      "We work closely with policymakers, governments, and institutions to influence legislation and policies that support gender equality in tech. Our goal is to ensure that the legal and institutional frameworks across Africa are conducive to women’s full participation in the tech industry.",
    image: "/images/advocacy2.jpg",
    alt: "Policy Influence",
  },
  {
    title: "Stakeholder Partnerships:",
    description:
      "Collaboration is key to our advocacy efforts. We partner with other NGOs, tech companies, educational institutions, and international organizations to amplify our voice and impact. Together, we work towards a future where women have equal opportunities in technology.",
    image: "/images/advocacy3.jpg",
    alt: "Stakeholder Partnerships:",
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
        imgUrl="/images/woman02.jpg"
      />

      {/* Main Content Section */}
      <Stack spacing={16} py={0} bg="gray.50">
        <Box
          width="100%"
          bgGradient="linear(to-r, purple.500, purple.700)"
          color="white"
          py={{ base: "2rem", sm: "3rem" }}
          textAlign="center"
        >
          <Text
            fontSize={{ base: "xl", sm: "2xl" }}
            fontWeight="bold"
            data-aos="fade-up"
          >
            <Tooltip
              label={APP_NAME}
              aria-label="A  tooltop for WIRIA"
              fontSize={{ base: "lg", sm: "xl" }}
              fontWeight="bold"
              color="brand.primary"
              bgColor="white"
              hasArrow
            >
              <Text
                as="span"
                color="yellow.400"
                cursor="pointer"
                fontWeight="800"
              >
                WITIA
              </Text>
            </Tooltip>{" "}
            is at the forefront of advocating for gender equality in technology
            across Africa.
            <Text
              fontSize={{ base: "lg", sm: "xl" }}
              mt={2}
              data-aos="fade-down"
              as={"div"}
            >
              Our advocacy efforts include:
            </Text>
          </Text>
        </Box>
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
                style={{ objectFit: "cover" }}
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
