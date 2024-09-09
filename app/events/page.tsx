import { CommonHero } from "@/components/common";
import { Box, Heading, Stack } from "@chakra-ui/react";

const Eventspage = () => {
  return (
    <>
      <CommonHero
        title="Events"
        path="programs/events"
        h="30vh"
        imgUrl="/images/woman02.jpg"
      />

      <Stack>
        <Box bgImage="/images/wave.svg" bgSize="cover" bgRepeat="no-repeat">
          <Box
            py={{ base: "2rem", sm: "4rem" }}
            px={{ base: "1rem", sm: "4rem" }}
            bg="gray.50"
          >
            <Heading textAlign="center" mb={8}>
              Events
            </Heading>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Eventspage;
