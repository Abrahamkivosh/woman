import { CMS_URL } from "@/config";
import { marginX } from "@/utils/constants";
import { SimpleGrid, Stack } from "@chakra-ui/react";
import CHeading from "../common/c-heading";
import StoriesCard from "../common/stories-card";

const StoriesListing = async () => {
  const stories = await getStories();
  return (
    <Stack marginX={marginX} my="3rem" gap="2rem">
      <CHeading>Our Stories</CHeading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {stories.map((story) => (
          <StoriesCard story={story} key={story.slug} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default StoriesListing;

async function getStories() {
  try {
    const url =
      CMS_URL +
      "/items/stories" +
      "?filter[status][_eq]=published&?fields=slug,date_created,title,thumbnail,excerpt&sort=-date_created";

    const res = await fetch(url, {
      cache: "no-cache",
    });

    const data: {
      data: Story[];
    } = await res.json();

    if (!data.data) {
      throw new Error("No data found");
    }

    return data.data;
  } catch (error) {
    console.log("Error fetching blogs", error);
    return [] as Story[];
  }
}
