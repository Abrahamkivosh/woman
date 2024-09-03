import React from "react";
import CHeading from "../common/c-heading";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { marginX } from "@/utils/constants";
import Link from "next/link";

const WordFromOurCEO = () => {
  return (
    <Box
      bgImage="/wave.svg"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="50% 30%"
    >
      <SimpleGrid
        py="3rem"
        mx={marginX}
        columns={{ base: 1, sm: 2 }}
        spacing={8}
      >
        <Box
          overflow="hidden"
          border="7px solid var(--chakra-colors-brand-primary)"
          borderRadius="2xl"
          pos="relative"
          data-aos="fade-right"
        >
          <Image
            src="/ceo.png"
            alt="CEO"
            width={500}
            height={500}
            style={{
              transition: "transform 0.2s ease",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Stack mx="auto" align="center" mt="1rem" gap={4} data-aos="fade-left">
          <Heading fontSize={{ base: "xl", md: "2xl" }} color="brand.primary">
            Founder and CEO Teresa Njoroge
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="semibold">
            <Box as="span" color="brand.primary">
              “I am motivated to leave behind a legacy of a bold contributor who
              streamlined social change, breaking the high rates of recidivism
              in Africa and one that contributed to growing Kenya’s restorative
              justice programs and a more equitable, inclusive and just world.”{" "}
            </Box>
            <br /> <br /> After being falsely accused of, maliciously
            prosecuted, and sentenced for a crime she didn’t commit,
            <Box as="span" fontWeight="bold">
              {" "}
              Clean Start Africa Founder and CEO Teresa Njoroge{" "}
            </Box>
            served a one-year sentence at the Langata Women Maximum Security
            Prison, Nairobi, Kenya. She was accompanied by her then
            three-month-old daughter. <br /> <br /> This experience however,
            inspired the
            <Box as="span" fontWeight="bold">
              {" "}
              Inaugural Ford Foundation Global Fellow and TED Women 2017 Speaker{" "}
            </Box>
            , to devote her life to equipping and empowering imprisoned and
            formerly imprisoned women for the precarious journey of
            reintegration back into society.
          </Text>
          <Link
            data-aos="fade-up"
            data-aos-delay="400"
            href="/our-stories/teresa-njoroge-sentenced-to-social-entrepreneurship"
          >
            <Button
              bg="brand.black"
              color="brand.white"
              _hover={{
                bg: "brand.primary",
              }}
            >
              The story that changed our lives
            </Button>
          </Link>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default WordFromOurCEO;
