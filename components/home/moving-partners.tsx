import { partnersData } from "@/utils/constants";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MovingPartners = () => {
  return (
    <Box my="6rem">
      <Marquee
        className="marquee-container"
        autoFill={true}
        pauseOnHover={true}
        speed={200}
      >
        {partnersData.map((partner, i) => (
          <Stack
            key={i}
            h="12rem"
            align="center"
            bg={partner.bg ? partner.bg : "brand.white"}
            // border="2px solid var(--chakra-colors-brand-primary)"
            justify="center"
            overflow="hidden"
            // boxShadow="md"
            borderRadius="xl"
            mr="4rem"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={200}
              height={200}
              style={{
                objectFit: "contain",
              }}
            />
          </Stack>
        ))}
      </Marquee>
    </Box>
  );
};

export default MovingPartners;
