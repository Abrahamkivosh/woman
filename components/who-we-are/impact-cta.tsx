import { Button, Grid, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ImpactCTA = () => {
  return (
    <Grid
      bgImage="/about-bg.jpg"
      minH="60vh"
      placeItems="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="50% 20%"
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
      <Stack maxW="3xl" zIndex={2} textAlign="center" align="center" gap={3}>
        <Heading color="brand.white" fontSize={{ base: "2rem", md: "3rem" }}>
          We elevate the voices of women and girls who have been impacted by the
          criminal legal system.
        </Heading>
        <Link href="/our-stories">
          <Button colorScheme="primary">Hear Their Stories</Button>
        </Link>
      </Stack>
    </Grid>
  );
};

export default ImpactCTA;
