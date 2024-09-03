"use client";
import { marginX } from "@/utils/constants";
import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiSolidDonateHeart } from "react-icons/bi";
import { MdWork } from "react-icons/md";

const HeroSection = () => {
  return (
    <Flex
      minH="90vh"
      bgImage="/hero2.png"
      bgSize="cover"
      align="center"
      justify="center"
      bgPos={{ base: "30% 50%", sm: "center center" }}
      pos="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "rgba(0,0,0,.6)",
        zIndex: 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 200, x: 40 }}
        style={{
          zIndex: 2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 1, ease: "backOut" },
        }}
      >
        <Stack
          mx={marginX}
          py="1.7rem"
          gap={4}
          color="brand.white"
          maxW="4xl"
          align="center"
          textAlign="center"
          borderRadius="xl"
        >
          <Text fontSize="xl" fontWeight="semibold" data-aos="fade-left">
            Welcome to{" "}
            <Box as="span" color="brand.primary">
              Clean Start Africa
            </Box>
          </Text>
          <Heading
            fontSize={{ base: "2.4rem", sm: "4rem", md: "5rem" }}
            fontWeight="700"
          >
            Let&apos;s Change the World Together
          </Heading>
          <Text fontSize="lg">Creating second chances.</Text>
          <Flex gap={{ base: 4, sm: 2 }} flexWrap="wrap" justify="center">
            <Button bg="brand.white" rightIcon={<MdWork />}>
              Our solutions
            </Button>

            <Link href="/donate">
              <Button
                bg="brand.primary"
                color="brand.white"
                _hover={{
                  bg: "brand.black",
                }}
                rightIcon={<BiSolidDonateHeart />}
              >
                Donate Now
              </Button>
            </Link>
          </Flex>
        </Stack>
      </motion.div>
    </Flex>
  );
};

export default HeroSection;
