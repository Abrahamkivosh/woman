import { CommonHero } from "@/components/common";
import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaChalkboardTeacher,
  FaCode,
  FaGlobeAfrica,
  FaUsers,
} from "react-icons/fa";

// Data arrays for Focus Areas and Success Stories
const focusAreas = [
  {
    icon: FaCode,
    title: "Tech Education",
    description:
      "Offering coding bootcamps and tech courses to equip women with in-demand skills in software development, data science, and more.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Mentorship",
    description:
      "Connecting women with industry leaders who provide guidance, support, and career advice.",
  },
  {
    icon: FaUsers,
    title: "Community Building",
    description:
      "Fostering a strong network of women in tech through events, workshops, and hackathons.",
  },
  {
    icon: FaGlobeAfrica,
    title: "Global Outreach",
    description:
      "Expanding opportunities for women in tech beyond borders by collaborating with international partners.",
  },
];

const successStories = [
  {
    image: "/images/woman01.jpg",
    name: "Jane Doe",
    description:
      "After joining our tech training program, Jane landed a full-time position as a software engineer at a leading tech company. She now mentors other women looking to break into the industry.",
  },
  {
    image: "/images/woman02.jpg",
    name: "Sarah Smith",
    description:
      "Sarah started her own tech startup after receiving mentorship and support from WITIA. Her company is focused on building innovative solutions for rural communities.",
  },
  {
    image: "/images/woman02.jpg",
    name: "Sarah Smith",
    description:
      "Sarah started her own tech startup after receiving mentorship and support from WITIA. Her company is focused on building innovative solutions for rural communities.",
  },
];

const page = () => {
  return (
    <>
      <CommonHero
        title="What We Do"
        path="what-we-do"
        h="30vh"
        imgUrl="/images/woman02.jpg"
      />

      {/* Introduction Section */}
      <Stack>
        <Box
          width="100%"
          bg="brand.primary"
          color="white"
          fontWeight="bold"
          py={{ base: "1.5rem", sm: "2rem" }}
          textAlign="center"
        >
          <Text fontSize={{ base: "lg", sm: "2xl" }}>
            Empowering Women Through Technology and Innovation
          </Text>
          <Text fontSize={{ base: "md", sm: "lg" }} mt={2}>
            At WITIA, we are on a mission to bridge the gender gap in technology
            by providing education, mentorship, and career opportunities for
            women across Africa.
          </Text>
        </Box>

        <Box
          py={{ base: "2rem", sm: "4rem" }}
          px={{ base: "1rem", sm: "4rem" }}
          bg="gray.50"
        >
          <Heading textAlign="center" mb={8}>
            Our Key Focus Areas
          </Heading>

          <SimpleGrid columns={{ base: 1, sm: 3, md: 4 }} spacing={8}>
            {focusAreas.map((area, index) => (
              <Flex
                key={index}
                flexDir="column"
                align="center"
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="md"
              >
                <area.icon size={40} color="#805AD5" />
                <Text mt={4} fontWeight="bold" fontSize="lg">
                  {area.title}
                </Text>
                <Text textAlign="center" mt={2} fontSize="sm">
                  {area.description}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>

        <Box
          bg="purple.50"
          py={{ base: "2rem", sm: "4rem" }}
          px={{ base: "1rem", sm: "4rem" }}
        >
          <Heading textAlign="center" mb={8}>
            Success Stories
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {successStories.map((story, index) => (
              <Box key={index} bg="white" p={6} borderRadius="lg">
                <Image src={story.image} alt={story.name} borderRadius="lg" />
                <Text fontWeight="bold" mt={4}>
                  {story.name}
                </Text>
                <Text mt={2}>{story.description}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box
          py={{ base: "2rem", sm: "4rem" }}
          textAlign="center"
          mt={8}
          bgSize="cover"
          backdropBlur={5}
        >
          <Heading fontSize="2xl">
            Join Us in Empowering Women Through Technology
          </Heading>
          <Text fontSize="lg" mt={4}>
            Be part of our mission to create more opportunities for women in
            tech. Learn more about how you can get involved or support us.
          </Text>
        </Box>
      </Stack>
    </>
  );
};

export default page;
