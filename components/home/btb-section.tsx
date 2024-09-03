import { Box, Button, Stack } from "@chakra-ui/react";
import { BTBCountdown, CHeading } from "../common";

const BTBSection = () => {
  return (
    <Box bg="#682B80" color="brand.white" py="3rem">
      <Stack align="center">
        <CHeading>BTB Conference</CHeading>
        <BTBCountdown />

        <Button
          colorScheme="primary"
          as="a"
          href="https://btbafrica.vercel.app/"
          target="_blank"
        >
          Learn More
        </Button>
      </Stack>
    </Box>
  );
};

export default BTBSection;
