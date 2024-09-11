"use client";
import { marginX } from "@/utils/constants";
import {
  Box,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaBook, FaGlobe } from "react-icons/fa";
import { FaHand, FaUsers } from "react-icons/fa6";

const TopServiceCare = () => {
  const topServices = [
    {
      icon: FaBook,
      title: "Education and Training",
      description:
        "Accessible tech education for women and girls. Partnerships for curriculum integration and STEM scholarships.",
    },
    {
      icon: FaHand,
      title: "Empowerment and Employment",
      description:
        "Mentorship, resources, and support for women entrepreneurs. Promote women-led tech startups and businesses.",
    },
    {
      icon: FaGlobe,
      title: "Advocacy and Awareness",
      description:
        "Promote gender diversity in tech. Advocate for policies and publish research on women in technology.",
    },
    {
      icon: FaUsers,
      title: "Community and Networking",
      description:
        "Build a strong tech network. Organize events, workshops, and create online platforms for learning and collaboration.",
    },
  ];

  return (
    <Box as="section" bg="gray.500" width="100%" position="relative" py="3rem">
      <Box mx={marginX} py={{ base: "2rem", sm: "2rem" }}>
        <Stack
          color="brand.white"
          mb="2rem"
          spacing={6}
          textAlign={{ base: "center", lg: "left" }}
          display="flex"
          flexDir="row"
          justifyContent="space-between"
        >
          <Text fontSize="3xl" fontWeight="bold" data-aos="zoom-in">
            What We Believe In
          </Text>
          <Text fontSize="lg" maxW="800px" data-aos="zoom-up">
            Women In Technology and Innovation Africa (WITIA) mission is to
            create an ecosystem to support and empower women in Technology &
            Innovation across Africa.
          </Text>
        </Stack>
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          justify="space-between"
          alignItems="center"
        >
          <Box flex="1" mt={{ base: 8, lg: 0 }}>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={8}>
              {topServices.map((service, index) => (
                <Stack
                  key={index}
                  bg="white"
                  p={5}
                  borderRadius="md"
                  boxShadow="lg"
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease-in-out",
                  }}
                  data-aos="fade-up"
                >
                  <Stack align="center">
                    <Icon as={service.icon} w={12} h={12} color="blue.600" />
                  </Stack>
                  <Text
                    align="center"
                    color="blue.900"
                    fontWeight={700}
                    fontSize="lg"
                  >
                    {service.title}
                  </Text>
                  <Text textAlign="center" color="gray.600">
                    {service.description}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </Box>
          <Box
            flex="1"
            mb={{ base: "2rem", lg: 0 }}
            pl={{ lg: "2rem" }}
            textAlign="center"
            data-aos="fade-right"
          >
            <Image
              src="/images/history02.webp"
              alt="Services"
              style={{ objectFit: "cover" }}
              borderRadius="md"
              mx="auto"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default TopServiceCare;
