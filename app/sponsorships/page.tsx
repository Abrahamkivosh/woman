"use client";
import { CommonHero } from "@/components/common";
import { Box, Grid, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaHandsHelping } from "react-icons/fa";

// Data for the sponsorships images and text
const sponsorshipsData = [
  {
    src: "/images/Aledu_Girls__Teacher_Emily_Story_Large.jpg",
    alt: "Types of Corporate Sponsorships",
    title: "Types of Sponsorships",
    description:
      "Learn about the different ways corporations can support nonprofits, from year-round involvement to event-specific campaigns.",
  },
  {
    src: "/images/advocacy2.jpg",
    alt: "Benefits of Corporate Sponsorships",
    title: "Benefits for Corporations",
    description:
      "Discover the many advantages of corporate sponsorships, including increased brand visibility and tax incentives.",
  },
];

// Data for sponsorship types
const sponsorshipTypes = [
  {
    title: "Organization Sponsors",
    description:
      "These sponsors provide support throughout the year through regular giving, Corporate Social Responsibility (CSR) campaigns, program sponsorships, and more.",
  },
  {
    title: "Fundraising Sponsors",
    description:
      "These sponsors support specific events or campaigns with donations, volunteers, auction items, and other forms of support.",
  },
];

// Data for securing corporate sponsors
const securingSponsorsSteps = [
  {
    title: "Leverage Your Board Members",
    description:
      "Board members often have valuable connections in the business community. Use these connections to build a list of potential sponsors and create a sponsorship packet.",
  },
  {
    title: "Perfect Your Sponsorship Letter",
    description:
      "Craft a compelling sponsorship letter that highlights the benefits of the partnership and aligns your nonprofit's mission with the sponsor's interests.",
  },
  {
    title: "Offer Different Incentives",
    description:
      "Provide unique benefits to attract sponsors, such as free event tickets or exclusive promotional opportunities.",
  },
  {
    title: "Utilize Personal Connections",
    description:
      "Leverage personal networks and social media to find potential sponsors and create a connection to your cause.",
  },
];

// Data for sponsorship benefits
const sponsorshipBenefits = [
  {
    icon: FaChartLine,
    title: "Brand Awareness",
    description:
      "Sponsoring a nonprofit can enhance brand visibility and associate your company with a positive cause.",
  },
  {
    icon: FaDollarSign,
    title: "Financial Incentives",
    description:
      "Corporate sponsorships can offer tax benefits and other financial incentives.",
  },
  {
    icon: FaHandsHelping,
    title: "Enhanced Corporate Reputation",
    description:
      "Aligning with a nonprofit can improve your company’s reputation and appeal to socially-conscious consumers and employees.",
  },
];

const SponsorshipsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <CommonHero title="Corporate Sponsorships" path="sponsorships" h="50vh" />

      {/* Main Content Section */}
      <Box
        py={{ base: "4rem", lg: "6rem" }}
        px={{ base: "2rem", lg: "8rem" }}
        bg="blue.50"
      >
        <Stack spacing={12} align="center">
          {/* Heading and Introduction */}
          <Box textAlign="center">
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              mb={4}
              color="gray.600"
              fontWeight="bold"
            >
              Discover the Power of Corporate Sponsorships
            </Heading>
            <Text
              fontSize={{ base: "md", lg: "lg" }}
              color="gray.600"
              maxW="4xl"
              mx="auto"
              mb={6}
            >
              Corporate sponsorships provide a valuable opportunity for
              businesses to align with charitable causes while gaining
              significant benefits in return. Explore how sponsorships work, how
              to secure them, and the remarkable benefits they offer.
            </Text>
          </Box>

          {/* Two-Column Section with Images */}
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={8}
            alignItems="center"
            justifyContent="center"
            mt={12}
          >
            {sponsorshipsData.map((item, index) => (
              <Box
                key={index}
                position="relative"
                overflow="hidden"
                borderRadius="lg"
                boxShadow="xl"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  objectFit="cover"
                  boxSize="100%"
                  borderRadius="lg"
                  transition="transform 0.3s ease"
                  _hover={{ transform: "scale(1.05)" }}
                />
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  bgGradient="linear(to-t, rgba(0,0,0,0.6), rgba(0,0,80,0.4))"
                  color="white"
                  p={4}
                  borderRadius="lg"
                >
                  <Text fontSize="lg" fontWeight="bold">
                    {item.title}
                  </Text>
                  <Text fontSize="sm" mt={2}>
                    {item.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Grid>

          {/* Detailed Information Sections */}
          <Box mt={12}>
            <Stack spacing={12}>
              <Box>
                <Heading
                  fontSize={{ base: "3xl", md: "4xl" }}
                  mb={4}
                  color="gray.600"
                >
                  How Do Corporate Sponsorships Work?
                </Heading>
                <Text fontSize={{ base: "md", lg: "lg" }} color="gray.700">
                  Corporate sponsorships are a way for businesses to align
                  themselves with charitable organizations or causes in exchange
                  for financial support or other forms of assistance. There are
                  two main types of corporate sponsorships:
                </Text>
                <Stack spacing={4} mt={6} ml={6}>
                  {sponsorshipTypes.map((type, index) => (
                    <Box key={index}>
                      <Heading fontSize="lg" color="gray.800">
                        {type.title}
                      </Heading>
                      <Text color="gray.600">{type.description}</Text>
                    </Box>
                  ))}
                </Stack>
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  color="gray.700"
                  mt={6}
                >
                  For nonprofits, corporate sponsorships provide a vital revenue
                  stream and enhance event visibility. In return, sponsors gain
                  brand exposure and support for their corporate social
                  responsibility goals.
                </Text>
              </Box>

              <Box
                bg="gray.100"
                py={{ base: "4rem", lg: "6rem" }}
                borderRadius="lg"
                boxShadow="md"
              >
                <Heading
                  fontSize={{ base: "3xl", md: "4xl" }}
                  mb={8}
                  color="gray.600"
                  textAlign="center"
                >
                  How to Secure Corporate Sponsors
                </Heading>
                <Stack spacing={6} maxW="3xl" mx="auto">
                  {securingSponsorsSteps.map((step, index) => (
                    <Box key={index}>
                      <Heading fontSize="lg" color="gray.800">
                        {step.title}
                      </Heading>
                      <Text color="gray.600">{step.description}</Text>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box>
                <Heading
                  fontSize={{ base: "3xl", md: "4xl" }}
                  mb={4}
                  color="gray.600"
                >
                  Benefits of Corporate Sponsorships
                </Heading>
                <Stack spacing={6}>
                  {sponsorshipBenefits.map((benefit, index) => (
                    <Box key={index}>
                      <Icon as={benefit.icon} w={8} h={8} color="blue.500" />
                      <Heading fontSize="lg" color="gray.800">
                        {benefit.title}
                      </Heading>
                      <Text color="gray.600">{benefit.description}</Text>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default SponsorshipsPage;
