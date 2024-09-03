import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

import Link from "next/link";

import { marginX } from "@/utils/constants";

const NotFound = () => {
  return (
    <Box>
      <Stack py="3rem" align="center" justify="center" marginX={marginX}>
        <Stack align="center" gap={3}>
          <Image src="/404.svg" alt="404" width={300} height={300} />
          <Heading>Page Not Found</Heading>
          <Text
            fontSize="lg"
            fontWeight="semibold"
            textAlign="center"
            color="brand.black"
          >
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </Text>
          <Button
            bg="brand.primary"
            p="25px 20px"
            borderRadius="none"
            color="brand.white"
            transition="all 0.3s ease-in-out"
            _hover={{
              bg: "brand.black",
            }}
            fontSize="xl"
            w={{ base: "100%", sm: "fit-content" }}
          >
            {" "}
            <Link href="/donate">Donate Fund </Link>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NotFound;
