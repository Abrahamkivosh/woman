import { APP_NAME } from "@/config";
import { contactsData, marginX, quickLinks, socials } from "@/utils/constants";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bg="brand.primary" py="3rem" color="brand.white">
      <Grid
        marginX={marginX}
        templateColumns={{
          base: "1fr",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: 8, md: 6 }}
        px="1rem"
      >
        <GridItem>
          <VStack align="start" spacing={4}>
            <Image
              src="/images/logo.jpg"
              alt={APP_NAME}
              width={150}
              height={150}
              loading="eager"
              style={{ width: "auto", height: "auto" }}
            />
            <Text fontWeight="500" fontSize="sm" lineHeight="1.5">
              Our mission is to create a thriving ecosystem that empowers and
              supports women in Technology & Innovation across Africa. By
              providing accessible education, fostering entrepreneurship,
              advocating for gender equality, and building strong networks, we
              aim to ensure that women are at the forefront of technological
              advancements and innovation.
            </Text>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack align="start" spacing={4}>
            <Heading as="h3" size="md" mb={2}>
              About Us
            </Heading>
            {quickLinks.map((item, i) => (
              <Link href={item.link} key={i}>
                <Text
                  key={i}
                  fontWeight="semibold"
                  fontSize="md"
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  {item.label}
                </Text>
              </Link>
            ))}
          </VStack>
        </GridItem>

        <GridItem>
          <VStack align="start" spacing={4}>
            <Heading as="h3" size="md" mb={2}>
              Contact Us
            </Heading>
            {contactsData.map((item, i) => (
              <Link href={item.link} key={i} target="_blank">
                <HStack align="center" fontSize="md" fontWeight="semibold">
                  <Box as={item.icon} width={5} height={5} />
                  <Text ml="1rem">{item.label}</Text>
                </HStack>
              </Link>
            ))}
            <HStack spacing={3} mt={4}>
              {socials.map((item, i) => (
                <Link href={item.link} key={i} target="_blank">
                  <Box
                    as={item.icon}
                    boxSize={8}
                    p={2}
                    border="2px solid"
                    borderColor="brand.white"
                    borderRadius="full"
                    _hover={{
                      bg: "brand.white",
                      color: "brand.primary",
                    }}
                  />
                </Link>
              ))}
            </HStack>
          </VStack>
        </GridItem>
        <GridItem>
          <Heading as="h3" size="md" mb={2}>
            Subscribe to our Newsletter
          </Heading>
          <Text mb={4}>Stay updated on our latest services and offers.</Text>
          <Flex as="form" w="100%">
            <Input
              type="email"
              placeholder="Enter your email"
              size="md"
              mr={2}
              bg="brand.white"
              color="brand.black"
              _placeholder={{ color: "gray.500" }}
              _focus={{ borderColor: "brand.primary" }}
              _hover={{ borderColor: "brand.primary" }}
            />
            <Button type="submit" colorScheme="green">
              Subscribe
            </Button>
          </Flex>
        </GridItem>
      </Grid>
      <Divider borderColor="brand.white" my={{ base: "1rem", sm: "1rem" }} />
      <Grid templateColumns="1fr" gap={4} px="1rem" marginX={marginX}>
        <Text textAlign="center" fontSize="sm">
          &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
        </Text>
      </Grid>
    </Box>
  );
};

export default Footer;
