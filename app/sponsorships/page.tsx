"use client";
import { CommonHero } from "@/components/common";
import { Box, Grid, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaHandsHelping } from "react-icons/fa";

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
            <Box
              position="relative"
              overflow="hidden"
              borderRadius="lg"
              boxShadow="xl"
            >
              <Image
                src="/images/Aledu_Girls__Teacher_Emily_Story_Large.jpg"
                alt="Types of Corporate Sponsorships"
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
                  Types of Sponsorships
                </Text>
                <Text fontSize="sm" mt={2}>
                  Learn about the different ways corporations can support
                  nonprofits, from year-round involvement to event-specific
                  campaigns.
                </Text>
              </Box>
            </Box>
            <Box
              position="relative"
              overflow="hidden"
              borderRadius="lg"
              boxShadow="xl"
            >
              <Image
                src="/images/advocacy2.jpg"
                alt="Benefits of Corporate Sponsorships"
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
                  Benefits for Corporations
                </Text>
                <Text fontSize="sm" mt={2}>
                  Discover the many advantages of corporate sponsorships,
                  including increased brand visibility and tax incentives.
                </Text>
              </Box>
            </Box>
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
                  <Box>
                    <Heading fontSize="lg" color="gray.800">
                      1. Organization Sponsors
                    </Heading>
                    <Text color="gray.600">
                      These sponsors provide support throughout the year through
                      regular giving, Corporate Social Responsibility (CSR)
                      campaigns, program sponsorships, and more.
                    </Text>
                  </Box>
                  <Box>
                    <Heading fontSize="lg" color="gray.800">
                      2. Fundraising Sponsors
                    </Heading>
                    <Text color="gray.600">
                      These sponsors support specific events or campaigns with
                      donations, volunteers, auction items, and other forms of
                      support.
                    </Text>
                  </Box>
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
                  <Box>
                    <Heading fontSize="lg" color="gray.800">
                      1. Leverage Your Board Members
                    </Heading>
                    <Text color="gray.600">
                      Board members often have valuable connections in the
                      business community. Use these connections to build a list
                      of potential sponsors and create a sponsorship packet.
                    </Text>
                  </Box>
                  <Box>
                    <Heading fontSize="lg" color="gray.800">
                      2. Perfect Your Sponsorship Letter
                    </Heading>
                    <Text color="gray.600">
                      Craft a compelling sponsorship letter that highlights the
                      benefits of the partnership and aligns your
                      nonprofit&apos;s mission with the sponsor&apos;s
                      interests.
                    </Text>
                  </Box>
                  <Box>
                    <Heading fontSize="lg" color="gray.800">
                      3. Offer Different Incentives
                    </Heading>
                    <Text color="gray.600">
                      Provide unique benefits to attract sponsors, such as free
                      event tickets or exclusive promotional opportunities.
                    </Text>
                  </Box>
                  <Box>
                    <Heading fontSize="lg" color="gray.800">
                      4. Utilize Personal Connections
                    </Heading>
                    <Text color="gray.600">
                      Leverage personal networks and social media to find
                      potential sponsors and create a connection to your cause.
                    </Text>
                  </Box>
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
                  <Box>
                    <Icon as={FaChartLine} w={8} h={8} color="blue.500" />
                    <Heading fontSize="lg" color="gray.800">
                      Brand Awareness
                    </Heading>
                    <Text color="gray.600">
                      Sponsoring a nonprofit can enhance brand visibility and
                      associate your company with a positive cause.
                    </Text>
                  </Box>
                  <Box>
                    <Icon as={FaDollarSign} w={8} h={8} color="blue.500" />
                    <Heading fontSize="lg" color="gray.800">
                      Financial Incentives
                    </Heading>
                    <Text color="gray.600">
                      Corporate sponsorships can offer tax benefits and other
                      financial incentives.
                    </Text>
                  </Box>
                  <Box>
                    <Icon as={FaHandsHelping} w={8} h={8} color="blue.500" />
                    <Heading fontSize="lg" color="gray.800">
                      Enhanced Corporate Reputation
                    </Heading>
                    <Text color="gray.600">
                      Aligning with a nonprofit can improve your company’s
                      reputation and appeal to socially-conscious consumers and
                      employees.
                    </Text>
                  </Box>
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
