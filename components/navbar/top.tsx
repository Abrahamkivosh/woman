import { contactsData, marginX, socials } from "@/utils/constants";

import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const TopNav = () => {
  return (
    <Box bg="brand.primary" py=".8rem">
      <Flex
        marginX={marginX}
        justify={{ base: "center", sm: "space-between" }}
        flexDir={{ base: "column", md: "row" }}
        align="center"
        color="brand.white"
        gap={{ base: 2, sm: 1 }}
      >
        <Flex
          gap={{ base: 1, sm: 3 }}
          flexDir={{ base: "column", sm: "row" }}
          align={{ base: "center", sm: "start" }}
        >
          {contactsData.map((item, i) => (
            <Link href={item.link} key={i}>
              <Flex
                key={i}
                // display={i == 2 ? { base: "none", lg: "flex" } : "flex"}
                align="center"
                gap={1}
                _hover={{
                  color: "brand.black",
                  textDecor: "underline",
                }}
              >
                <Box as={item.icon} color="white" />

                <Text fontSize="md">{item.label}</Text>
              </Flex>
            </Link>
          ))}
        </Flex>
        <Flex align="center" gap={2}>
          {socials.map((item, i) => (
            <Link href={item.link} key={i} target="_blank">
              <Stack
                p=".3rem"
                borderRadius="full"
                color="brand.black"
                bg="brand.white"
                _hover={{
                  bg: "brand.black",
                  color: "brand.white",
                }}
              >
                <Box as={item.icon} cursor="pointer" />
              </Stack>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopNav;
