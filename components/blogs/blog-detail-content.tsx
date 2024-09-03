import { marginX } from "@/utils/constants";
import { Box } from "@chakra-ui/react";
import { RenderContent } from "../common";
import { getImageUrl } from "@/utils/functions";

interface Props {
  blog: BlogDetail;
}

const BlogDetailContent = ({ blog }: Props) => {
  return (
    <Box marginX={marginX} my="3rem">
      <Box
        bgImage={getImageUrl(blog.thumbnail)}
        bgSize="cover"
        bgPos="center center"
        borderRadius="xl"
        height="65vh"
        boxShadow="xl"
      />
      <RenderContent content={blog.content} />
    </Box>
  );
};

export default BlogDetailContent;
