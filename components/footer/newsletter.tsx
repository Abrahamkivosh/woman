import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const NewsLetter = () => {
  return (
    <SimpleGrid
      bg="brand.gray"
      columns={{ base: 1, md: 2 }}
      mx={marginX}
      spacing={8}
      py="2rem"
      px="2rem"
      borderRadius="2xl"
      mb="2rem"
    >
      <Flex gap={4} align="center" flexDir={{ base: "column", sm: "row" }}>
        <Box>
          <Image
            src="/newsletter-icon.webp"
            alt="newsletter-icon"
            width={50}
            height={50}
          />
        </Box>
        <Stack>
          <Heading textAlign={{ base: "center", sm: "initial" }}>
            Sign Up for Our Newsletter
          </Heading>
          <Text>
            A monthly dose of inspiration from our rockstar partners and team!
          </Text>
        </Stack>
      </Flex>
      <Stack>
        <Input
          borderColor="brand.black"
          bg="brand.white"
          placeholder="Enter your email"
        />
        <Button colorScheme="primary">SUBSCRIBE</Button>
      </Stack>
    </SimpleGrid>
  );
};

export default NewsLetter;
