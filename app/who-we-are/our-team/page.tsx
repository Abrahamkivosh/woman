"use client";
import { CommonHero } from "@/components/common";
import {
  Box,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./ourTeam.module.scss";

// Team members data
const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO",
    image: "/images/woman01.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "John Doe",
    role: "CTO",
    image: "/images/woman02.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Jane Smith",
    role: "COO",
    image: "/images/woman01.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "John Smith",
    role: "CFO",
    image: "/images/woman02.jpg",
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
    },
  },
];

// Icons for social media
const socialsIcons = {
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
};

const OurTeamPage = () => {
  return (
    <>
      <CommonHero
        title="Our Team"
        path="our-team"
        h="30vh"
        imgUrl="/images/woman02.jpg"
      />

      <Stack>
        <Box bgImage="/images/wave.svg" bgSize="cover" bgRepeat="no-repeat">
          <Box
            py={{ base: "2rem", sm: "4rem" }}
            px={{ base: "1rem", sm: "4rem" }}
            bg="gray.50"
          >
            <Heading textAlign="center" mb={8}>
              Our Team
            </Heading>

            {/* Team members grid */}
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
              {teamMembers.map((member, index) => (
                <Flex
                  key={index}
                  flexDir="column"
                  align="center"
                  bg="white"
                  p={6}
                  borderRadius="lg"
                  boxShadow="md"
                >
                  <Box
                    position="relative"
                    alignItems="center"
                    justifyContent="center"
                    display="flex"
                  >
                    <Box
                      width="100%"
                      height="500px"
                      overflow="hidden"
                      borderRadius="lg"
                      boxShadow="md"
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={500}
                        height={500}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>

                    {/* Social icons */}
                    <Box position="absolute" bottom={-5} p={1} width={"50%"}>
                      <SimpleGrid columns={4} spacing={4} mt={4}>
                        {Object.entries(member.socials)
                          .filter(([_, url]) => url) // Only display icons for non-empty links
                          .map(([social, url], index) => (
                            <Box key={index} textAlign="center">
                              <Link href={url} passHref>
                                <Box
                                  as="span"
                                  display="inline-flex"
                                  alignItems="center"
                                  justifyContent="center"
                                  borderRadius="50%"
                                  width="40px"
                                  height="40px"
                                  bg="purple.100"
                                  transition="all 0.3s ease"
                                  _hover={{
                                    bg: "purple.600",
                                    transform: "scale(1.1)",
                                  }}
                                >
                                  <Icon
                                    as={socialsIcons[social]}
                                    boxSize={5}
                                    color="purple.600"
                                    _hover={{
                                      color: "white",
                                    }}
                                  />
                                </Box>
                              </Link>
                            </Box>
                          ))}
                      </SimpleGrid>
                    </Box>
                  </Box>

                  <Text mt={4} fontWeight="bold" fontSize="lg">
                    {member.name}
                  </Text>
                  <Text textAlign="center" mt={2} fontSize="sm">
                    {member.role}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default OurTeamPage;
