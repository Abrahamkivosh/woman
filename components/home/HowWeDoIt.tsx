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
  const HowWeDoIt = [
    {
      icon: BiBook,
      title: "Education and Training",
      description: `
        Provide accessible and affordable technology education and training programs for women and girls.  

        Establish partnerships with educational institutions to integrate technology curriculum focused on girls and women.  

        Offer scholarships and grants to support women pursuing studies in STEM (Science, Technology, Engineering, and Mathematics).
      `,
    },
    {
      icon: BiBriefcase,
      title: "Empowerment and Employment",
      description: `
       Facilitate mentorship and internship opportunities with tech companies and professionals. Support women entrepreneurs in technology with resources, training, and funding.  

       Promote and support women-led tech startups and businesses.
      `,
    },
    {
      icon: BiHeadphone,
      title: "Advocacy and Awareness",
      description: `
        Create a strong network of women in technology to share resources, opportunities, and support.  

        Organize conferences, workshops, and hackathons to foster collaboration and innovation among women in tech.  

        Develop online platforms for continuous learning, networking, and knowledge sharing.
      `,
    },
    {
      icon: BiWifi,
      title: "Access to Technology",
      description: `
        Ensure women in rural and underserved communities have access to technology and the internet.  

        Distribute tech devices and resources to girls and women in need.  

        Implement programs that teach digital literacy and basic tech skills to women of all ages.
      `,
    },
    {
      icon: BiLeaf,
      title: "Sustainability and Growth",
      description: `
        Develop sustainable models for funding and operation of programs and initiatives.  

        Monitor and evaluate the impact of programs to ensure they are meeting the needs of women in technology.  

        Build partnerships with governments, private sector, and other NGOs to amplify impact and reach.
      `,
    },
    {
      icon: BiCrown,
      title: "Leadership and Representation",
      description: `
        Promote women into leadership positions within tech organizations and the broader industry. Highlight and celebrate the achievements of women in technology to inspire others.  

        Encourage and support women in pursuing leadership roles in tech policy and governance.
      `,
    },
    // {
    //   icon: BiFlag,
    //   title: "Innovation and Research",
    //   description: `
    //     Support research and development projects led by women in technology.

    //     Encourage innovation in solving local and global challenges through technology.

    //     Provide platforms for women to showcase their tech innovations and projects.
    //   `,
    // },
  ];

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
    <Box mt={{ base: "1.5rem", sm: "3rem" }}>
      <Stack display="flex" flexDir="column" align="center" textAlign="center">
        <Text
          as="h2"
          fontSize={{ base: "2xl", sm: "4xl" }}
          color="black"
          fontWeight={500}
          data-aos="fade-up"
        >
          How we Do It
        </Text>
        <Text textAlign="center" maxW="90%" mx="auto">
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
            }}
            bg="white"
            boxShadow="md"
            // different  data-aos display
            data-aos-delay={index * 100}
            data-aos={dataAOSDisplay[index]}
          >
            {/* icon */}
            <Stack align="center">
              <Icon as={how.icon} w={20} h={20} color="primary.800" />
            </Stack>
            <Text
              align="center"
              color="brand.black"
              fontWeight={600}
              fontSize={20}
              dangerouslySetInnerHTML={{ __html: how.title }}
            />
            <Stack>
              <Text dangerouslySetInnerHTML={{ __html: how.description }} />
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HowWeDoIt;
