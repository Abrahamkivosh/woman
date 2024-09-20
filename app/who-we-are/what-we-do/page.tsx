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
      "We provide comprehensive training programs in coding, data science, digital marketing, and other essential tech skills. Our workshops and boot camps are designed to be accessible to women at all levels, from beginners to advanced practitioners. By partnering with leading tech companies and educational institutions, we ensure our curriculum is up-to-date and relevant to current industry demands.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Advocancy",
    description:
      "We actively campaign for policy changes and corporate practices that promote gender diversity in the tech sector. WITIA works closely with governments, private sector leaders, and other NGOs to influence policies that create a more inclusive and supportive environment for women in technology.",
  },
  {
    icon: FaUsers,
    title: "Community Building",
    description:
      "We believe that a strong, supportive community is essential for success. WITIA creates spaces—both physical and virtual—where women in tech can connect, collaborate, and share experiences. Our events, conferences, and online platforms provide a network of peers and mentors who are committed to helping each other succeed.",
  },
  {
    icon: FaGlobeAfrica,
    title: "Business Empowerment",
    description:
      "We believe that a strong, supportive community is essential for success. WITIA creates spaces—both physical and virtual—where women in tech can connect, collaborate, and share experiences. Our events, conferences, and online platforms provide a network of peers and mentors who are committed to helping each other succeed.",
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
          data-aos="fade-up"
        >
          <Text fontSize={{ base: "lg", sm: "2xl" }}>
            Empowering Women Through Technology and Innovation
          </Text>
          <Text fontSize={{ base: "md", sm: "lg" }} mt={2} data-aos="fade-down">
            At Women in Technology and Innovation Africa, we focus on four key
            areas: education, advocacy, business empowerment, and community
            building.
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

          <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={8}>
            {focusAreas.map((area, index) => (
              <Flex
                key={index}
                flexDir="column"
                align="center"
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="md"
                bgColor={index % 2 === 0 ? "white" : "gray.200"}
                _hover={{ boxShadow: "lg" }}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-dalay={index * 100}
              >
                <area.icon size={80} color="#805AD5" />
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
              <Box
                key={index}
                bg="white"
                p={6}
                borderRadius="lg"
                boxShadow="sm"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-up"}
              >
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
