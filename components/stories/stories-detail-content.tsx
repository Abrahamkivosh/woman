import React from "react";
import { RenderContent } from "../common";
import { Box } from "@chakra-ui/react";
import { marginX } from "@/utils/constants";
import { getImageUrl } from "@/utils/functions";

interface Props {
  story: StoryDetail;
}

const StoriesDetailContent = ({ story }: Props) => {
  const { content } = story;
  return (
    <Box marginX={marginX} my="2rem">
      <Box
        bgImage={getImageUrl(story.thumbnail)}
        bgSize="cover"
        bgPos="center center"
        borderRadius="xl"
        height="65vh"
        boxShadow="xl"
      />
      <RenderContent content={content} />
    </Box>
  );
};

export default StoriesDetailContent;
