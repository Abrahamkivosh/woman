import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";

import Link from "next/link";

import { marginX } from "@/utils/constants";

const NotFound = () => {
  return (
    <Box as="section" bg="red.200" width="100%" position="relative" py="3rem">
      <Stack py="3rem" align="center" justify="center" marginX={marginX}>
        <Stack align="center" gap={3}>
          <Text
            fontSize="6xl"
            fontWeight="bold"
            color="brand.primary"
            textAlign="center"
          >
            404
          </Text>
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
            borderRadius={10}
            color="brand.white"
            transition="all 0.3s ease-in-out"
            _hover={{
              bg: "brand.black",
            }}
            fontSize="xl"
            w={{ base: "100%", sm: "fit-content" }}
          >
            {" "}
            <Link href="/">Go Home </Link>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NotFound;
