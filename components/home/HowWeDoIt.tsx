"use client";
import { Box, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import {
  BiBook,
  BiBriefcase,
  BiCrown,
  BiHeadphone,
  BiLeaf,
  BiWifi,
} from "react-icons/bi";

const HowWeDoIt = () => {
  // Updated HowWeDoIt array without the icon key
  const HowWeDoIt = [
    {
      title: "Education and Training",
      description: `
      Offer accessible tech education and training for women and girls, integrate tech curriculums with institutions, and provide scholarships for STEM studies.
    `,
    },
    {
      title: "Empowerment and Employment",
      description: `
      Facilitate tech mentorships and internships, support women entrepreneurs with resources and funding, and promote women-led tech startups.
    `,
    },
    {
      title: "Advocacy and Awareness",
      description: `
      Build a strong network for women in tech, organize collaborative events, and create platforms for ongoing learning and networking.
    `,
    },
    {
      title: "Access to Technology",
      description: `
      Ensure tech access and internet for women in rural areas, distribute devices, and teach digital literacy and tech skills.
    `,
    },
    {
      title: "Sustainability and Growth",
      description: `
      Develop sustainable funding models, evaluate program impacts, and collaborate with governments and NGOs to expand reach and effectiveness.
    `,
    },
    {
      title: "Leadership and Representation",
      description: `
      Promote women into tech leadership roles, celebrate their achievements, and support their advancement in tech policy and governance.
    `,
    },
  ];

  // Array of icons in the order they should be applied
  const icons = [BiBook, BiBriefcase, BiHeadphone, BiWifi, BiLeaf, BiCrown];

  const dataAOSDisplay = [
    "fade-up",
    "fade-up-right",
    "fade-up-left",
    "fade-right",
    "fade-left",
    "fade-down",
    "fade-down-right",
    "fade-down-left",
  ];

  return (
    <Box
      mt={{ base: "1.5rem", sm: "3rem" }}
      id="how-we-do-it"
      bgImage="/images/howWeDoIt.svg"
      py={{ base: "2rem", sm: "2rem" }}
      bgSize="cover"
      bgBlendMode="overlay"
      bgPos="center"
      bgRepeat="no-repeat"
      backgroundAttachment="fixed"
      bgColor="rgba(0,0,0,0.5)"
    >
      <Stack
        display="flex"
        flexDir="column"
        align="center"
        textAlign="center"
        color="white"
      >
        <Text
          as="h2"
          fontSize={{ base: "2xl", sm: "4xl" }}
          fontWeight="bold"
          data-aos="fade-up"
        >
          How We Do It
        </Text>
        <Text
          textAlign="center"
          maxW="80%"
          mx="auto"
          fontSize={{ base: "xl", sm: "2xl" }}
        >
          Through our initiatives, we seek to break down barriers, inspire
          leadership, and promote sustainable growth, enabling women to make a
          significant impact in the tech industry and beyond.
        </Text>
      </Stack>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing={8}
        mx={{ base: "2rem", sm: "4rem", lg: "6rem" }}
        my={{ base: "1rem", sm: "4rem" }}
      >
        {HowWeDoIt.map((how, index) => (
          <Stack
            key={index}
            gap={{ base: 2, sm: 4 }}
            maxW={{ base: "100%", sm: "95%", md: "85%" }}
            mx="auto"
            p={4}
            borderRadius={10}
            _hover={{
              transform: "scale(1.1)",
              transition: "all 0.3s ease-in-out",
              boxShadow: "2xl",
              bg: "blue.50",
            }}
            bg="gray.50" // Card background
            boxShadow="md" // Default shadow
            data-aos-delay={index * 100}
            data-aos={dataAOSDisplay[index]}
          >
            {/* icon */}
            <Stack align="center">
              <Icon
                as={icons[index]} // Access icon by index
                w={20}
                h={20}
                color="blue.600"
                _hover={{
                  color: "green.800",
                }}
              />
            </Stack>
            <Text
              align="center"
              color="gray.800"
              fontWeight={600}
              fontSize={20}
              dangerouslySetInnerHTML={{ __html: how.title }}
            />
            <Stack>
              <Text
                color="gray.600"
                dangerouslySetInnerHTML={{ __html: how.description }}
              />
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HowWeDoIt;
