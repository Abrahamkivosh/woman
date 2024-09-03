import { marginX } from "@/utils/constants";
import { Box, Button, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import CHeading from "../common/c-heading";
import Image from "next/image";

const OurPriorities = () => {
  return (
    <Box bg="secondary.100" my="3rem" py={{ base: "2.5rem", sm: "4rem" }}>
      <Stack marginX={marginX}>
        <CHeading>Our Priorities</CHeading>
        <SimpleGrid mt="1rem" columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
          {new Array(3).fill(0).map((_, i) => (
            <Stack key={i}>
              <Box h="20rem" overflow="hidden" borderRadius="xl">
                <Image
                  src="/gender.jpg"
                  alt="gender"
                  width={400}
                  height={400}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Heading fontSize="xl">Gender,Racial and Ethnic Justice</Heading>
            </Stack>
          ))}
        </SimpleGrid>
        <Button
          colorScheme="primary"
          mt=".8rem"
          mx={{ base: "0", sm: "auto" }}
          w={{ base: "100%", sm: "fit-content" }}
        >
          View More
        </Button>
      </Stack>
    </Box>
  );
};

export default OurPriorities;
