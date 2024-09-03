import { APP_NAME } from "@/config";
import { contactsData, marginX, quickLinks, socials } from "@/utils/constants";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bg="brand.primary" py="3rem">
      <Grid
        marginX={marginX}
        templateColumns={{
          base: "repeat(2,1fr)",
          lg: "repeat(7,1fr)",
        }}
        gap={{ base: 7, lg: 6 }}
        color="brand.white"
        px="1rem"
      >
        <GridItem
          height="fit-content"
          colSpan={{ base: 2, md: 3 }}
          display="flex"
          flexDir="column"
          gap={2}
          justifyContent={{ base: "center", sm: "normal" }}
        >
          <Box w="fit-content" p={2}>
            <Image
              src="/images/logo.png"
              alt={APP_NAME}
              width={200}
              height={200}
            />
          </Box>
          <Text fontWeight="500">
            Our mission is to create a thriving ecosystem that empowers and
            supports women in Technology & Innovation across Africa. By
            providing accessible education, fostering entrepreneurship,
            advocating for gender equality, and building strong networks, we aim
            to ensure that women are at the forefront of technological
            advancements and innovation. Through our initiatives, we seek to
            break down barriers, inspire leadership, and promote sustainable
            growth, enabling women to make a significant impact in the tech
            industry and beyond.
          </Text>
        </GridItem>
        <GridItem display="flex" flexDir="column" gap={3}>
          <Heading as="h3" size="md">
            Quick Links
          </Heading>
          {quickLinks.map((item, i) => (
            <Link href={item.link} key={i}>
              <Text
                key={i}
                fontWeight="semibold"
                color="brand.white"
                fontSize="lg"
                textDecor="underline"
                _hover={{
                  color: "brand.white",
                }}
              >
                {item.label}
              </Text>
            </Link>
          ))}
        </GridItem>

        <GridItem
          display="flex"
          flexDir="column"
          gap={4}
          colSpan={{ base: 2, lg: 1 }}
        >
          <Heading as="h3" size="md">
            Contact Us
          </Heading>
          {contactsData.map((item, i) => (
            <Link href={item.link} key={i} target="_blank">
              <Flex align="center" fontSize="lg" fontWeight="semibold">
                <Box as={item.icon} color="brand.white" width={6} height={6} />
                <Text ml="1rem">{item.label}</Text>
              </Flex>
            </Link>
          ))}
          <Flex gap={2} wrap="wrap">
            {socials.map((item, i) => (
              <Link
                href={item.link}
                key={i}
                target="_blank"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay={i * 200}
              >
                <Stack
                  border="3px solid var(--chakra-colors-brand-primary)"
                  _hover={{
                    bg: "brand.white",
                    color: "brand.black",
                    borderColor: "brand.white",
                  }}
                  p={2}
                  borderRadius="full"
                >
                  <Box as={item.icon} boxSize="5" cursor="pointer" />
                </Stack>
              </Link>
            ))}
          </Flex>
        </GridItem>

        <GridItem
          display="flex"
          flexDir="column"
          gap={4}
          colSpan={{ base: 2, lg: 2 }}
          alignItems="center"
          p={3}
          borderRadius="md"
          h="fit-content"
        >
          <Heading as="h3" size="md">
            Subscribe newsletter
          </Heading>
          <Text>
            Subscribe our newsletter to get updates about our services and
            offers.
          </Text>
          <Box>
            <Input
              type="email"
              placeholder="Enter your email"
              size="md"
              mb={2}
              isRequired
              bg="brand.white"
            />
            <Button type="submit" colorScheme="blue" w="100%">
              Subscribe
            </Button>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
