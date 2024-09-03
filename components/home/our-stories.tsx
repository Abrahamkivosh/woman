import { marginX, storiesData } from "@/utils/constants";
import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import CHeading from "../common/c-heading";
import StoriesCard from "../common/stories-card";
import Link from "next/link";

const OurStories = () => {
  return null;
  return (
    <Stack marginX={marginX} spacing={6} mt="3rem" mb="2rem" align="center">
      <CHeading>Our Stories</CHeading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {/* {storiesData.map((story, i) => (
          <StoriesCard story={story} key={i} />
        ))} */}
      </SimpleGrid>
      <Link href="/our-stories">
        <Button w="fit-content" colorScheme="secondary">
          View More Stories
        </Button>
      </Link>
    </Stack>
  );
};

export default OurStories;
