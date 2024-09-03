import { marginX } from "@/utils/constants";
import { Box, Grid, GridItem, Stack } from "@chakra-ui/react";
import DonateCard from "./donate-card";

const DonateContent = () => {
  return (
    <Box
      as="section"
      bgImage={{
        base: "linear-gradient(153deg, rgba(17,137,201,1) 1%, rgba(174,224,248,1) 61%)",
        sm: "/donate-bg.png",
      }}
      h={{ base: "fit-content", sm: "110vh" }}
      bgPos="center"
      bgSize="cover"
      backgroundAttachment="fixed"
      backgroundRepeat="no-repeat"
    >
      <Stack
        flex={1}
        py={{ base: "2rem", sm: 0 }}
        h="100%"
        zIndex={999}
        overflow={"hidden"}
        mx={marginX}
      >
        <Grid
          h="100%"
          gridTemplateRows={{ base: "1fr auto 1fr", sm: "repeat(6,1fr)" }}
        >
          <GridItem gridRow={{ base: 2, sm: 2 }}>
            <DonateCard />
          </GridItem>
        </Grid>
      </Stack>
    </Box>
  );
};

export default DonateContent;
