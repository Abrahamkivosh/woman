"use client";
import { CommonHero } from "@/components/common";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaGraduationCap, FaHandsHelping, FaHeartbeat } from "react-icons/fa"; // Icons for each section

const SponsorshipsPage = () => {
  const [donationType, setDonationType] = useState("one-time");
  const [amount, setAmount] = useState("");
  const toast = useToast();

  const handleDonate = () => {
    if (amount && parseFloat(amount) > 0) {
      toast({
        title: "Thank you for your generosity!",
        description: `You have chosen to make a ${donationType} donation of $${amount}.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setAmount("");
    } else {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid donation amount.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <CommonHero
        title="Sponsorships"
        path="sponsorships"
        imgUrl="/images/Sponsorship.jpg"
      />

      <Box>
        <Stack spacing={12} bgColor="orange.500" color="white" py={4}>
          <Box textAlign="center">
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              mb={4}
              fontWeight="bold"
            >
              Discover the Power of Sponsorships
            </Heading>
            <Box
              fontSize={{ base: "md", lg: "lg" }}
              maxW="4xl"
              mx="auto"
              mb={6}
            >
              <Text>
                Support our mission by becoming a sponsor. Your contribution
                will help us expand our programs, reach more women, and drive
                sustainable change across Africa.
              </Text>
              <Text>
                Explore how your valuable support directly influences and
                positively shapes and paves the lives of Women toward a better
                tomorrow.
              </Text>
            </Box>
          </Box>
        </Stack>

        <Box
          py={{ base: "2rem", sm: "2rem" }}
          bg="green.500"
          bgImage="/images/wave.svg"
          bgSize="cover"
          bgRepeat="no-repeat"
        >
          <Box mx={{ base: "3%", sm: "5%", md: "6%", lg: "8%" }}>
            {/* Donation Form */}
            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={8}
              alignItems="center"
              justifyContent="center"
            >
              <Box
                bgColor={"rgba(255, 255, 255, 0.5)"}
                p={12}
                rounded={{ base: "none", md: "lg" }}
              >
                <Heading
                  fontSize={{ base: "3xl", lg: "4xl" }}
                  mb={6}
                  textAlign={{ base: "center", md: "left" }}
                >
                  Change a Life Today
                </Heading>

                <Stack spacing={6}>
                  <FormControl as="fieldset">
                    <FormLabel as="legend">Choose Donation Type</FormLabel>
                    <RadioGroup value={donationType} onChange={setDonationType}>
                      <HStack spacing={4}>
                        <Radio value="one-time">One-Time</Radio>
                        <Radio value="monthly">Monthly</Radio>
                      </HStack>
                    </RadioGroup>
                  </FormControl>

                  <FormControl id="donation-amount" isRequired>
                    <FormLabel>Donation Amount (USD)</FormLabel>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      focusBorderColor="orange.400"
                      fontSize={{ base: "lg", md: "xl" }}
                      size="lg"
                    />
                  </FormControl>

                  <Button colorScheme="blue" size="lg" onClick={handleDonate}>
                    Donate Now
                  </Button>
                </Stack>
              </Box>

              <Box width="100%">
                <Image
                  src="/images/advocacy2.jpg"
                  alt="Sponsorship Impact"
                  borderRadius="lg"
                  shadow="lg"
                  objectFit="cover"
                  width="100%"
                  maxWidth="100%"
                  height="auto"
                  maxH="400px"
                />
              </Box>
            </Grid>
          </Box>
        </Box>

        {/* New Section: Where will your donation go? */}
        <Box py={16} bg="gray.100">
          <Box maxW="6xl" mx="auto" textAlign="center" mb={12}>
            <Heading as="h2" fontSize="4xl" mb={4}>
              Where will your donation go?
            </Heading>
            <Text fontSize="lg" maxW="4xl" mx="auto">
              Your donation will directly support vital programs and initiatives
              focused on empowering women and uplifting communities across
              Africa. Here&apos;s a breakdown of how your contributions make a
              difference:
            </Text>
          </Box>

          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
            gap={10}
            px={{ base: "5%", sm: "8%", md: "10%" }}
          >
            {/* Category 1: Education and Skills Development */}
            <Box
              bg="white"
              p={8}
              shadow="md"
              rounded="lg"
              textAlign="center"
              borderColor="green.300"
              borderWidth={2}
            >
              <Icon
                as={FaGraduationCap}
                boxSize={12}
                color="green.500"
                mb={4}
              />
              <Heading as="h3" fontSize="2xl" mb={4}>
                Education and Training
              </Heading>
              <Text>
                Provide accessible and affordable technology education and
                training programs for women and girls.
              </Text>
            </Box>

            {/* Category 2: Healthcare Access */}
            <Box
              bg="white"
              p={8}
              shadow="md"
              rounded="lg"
              textAlign="center"
              borderColor="pink.300"
              borderWidth={2}
            >
              <Icon as={FaHeartbeat} boxSize={12} color="pink.500" mb={4} />
              <Heading as="h3" fontSize="2xl" mb={4}>
                Advocacy and Awareness s
              </Heading>
              <Text>
                Your donation helps provide essential healthcare services,
                mental health support, and maternal care for women in
                underserved communities.
              </Text>
            </Box>

            {/* Category 3: Economic Empowerment */}
            <Box
              bg="white"
              p={8}
              shadow="md"
              rounded="lg"
              textAlign="center"
              borderColor="blue.300"
              borderWidth={2}
            >
              <Icon as={FaHandsHelping} boxSize={12} color="blue.500" mb={4} />
              <Heading as="h3" fontSize="2xl" mb={4}>
                Access to Technology
              </Heading>
              <Text>
                Ensure women in rural and underserved communities have access to
                technology and the internet. Distribute tech devices and
                resources to girls and women in need
              </Text>
            </Box>
          </Grid>
        </Box>

        <Box textAlign="center" py={10} bg="green.400" color="white">
          <Heading
            as="h2"
            fontSize="5rem"
            mb={6}
            _hover={{ fontSize: "5.5rem" }}
          >
            200 Million
          </Heading>
          <Box>
            <Text fontSize="1.5rem">
              Together, through your unwavering support and dedication, we have
              touched and transformed the lives of over 200 million individuals.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SponsorshipsPage;
