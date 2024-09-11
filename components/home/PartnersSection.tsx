"use client";
import { partners } from "@/utils/constants";
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MovingPartners = () => {
  return (
    <Box my="6rem" bg="gray.100" py="2rem" borderRadius="xl">
      <Box py={2}>
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          textAlign="center"
          mb={10}
          color="brand.black"
        >
          Our Partners
        </Text>
      </Box>
      <Marquee autoFill={true} pauseOnHover={true} speed={50}>
        {partners.map((partner, i) => (
          <Stack
            key={i}
            h="12rem"
            align="center"
            justify="center"
            overflow="hidden"
            borderRadius="xl"
            mr="4rem"
            p="1rem"
            bg="white"
            shadow="md"
            style={{ cursor: "pointer" }}
            as={Link}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            position="relative"
          >
            <Image
              src={partner.logo}
              alt={partner.title}
              width={200}
              height={200}
              style={{
                objectFit: "contain",
                width: "auto",
                height: "auto",
              }}
              loading="lazy"
              title={partner.title}
            />
          </Stack>
        ))}
      </Marquee>
    </Box>
  );
};

export default MovingPartners;
