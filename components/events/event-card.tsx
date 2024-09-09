import { Box, Button, Flex, Heading, Stack, Tag, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const EventCard = () => {
  return (
    <Stack
      gap={3}
      // border="1px solid black"
      border="1.2px solid"
      borderColor="blue.400"
      p={2}
      borderRadius="lg"
      pos="relative"
    >
      <Box>
        <Image
          src="/images/history02.webp"
          alt="event placeholder image"
          width={500}
          height={500}
        />
      </Box>
      <Stack>
        <Heading as="h3" size="md" textAlign={"center"}>
          Event Name
        </Heading>

        <Text fontWeight="unset" textAlign={"left"}>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris`
            .split(" ")
            .slice(0, 20)
            .join(" ")}
        </Text>
        <Box display="flex" justifyContent={"flex-end"}>
          <Tag
            //position it to the right

            w={"fit-content"}
            textAlign={"center"}
            color={"brand.black"}
            bg="blue.100"
          >
            Venue: Online
          </Tag>
        </Box>

        <Button
          bg="brand.black"
          color="brand.white"
          _hover={{
            bg: "brand.primary",
          }}
        >
          Visit
        </Button>
      </Stack>

      <Tag
        w="fit-content"
        color="brand.white"
        bg="brand.black"
        pos="absolute"
        top={5}
        right={5}
      >
        12th September 2024
      </Tag>
    </Stack>
  );
};

export default EventCard;
