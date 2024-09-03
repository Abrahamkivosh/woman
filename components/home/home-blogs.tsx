import { marginX } from "@/utils/constants";
import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import BlogCard from "../common/blog-card";
import CHeading from "../common/c-heading";

const HomeBlogs = () => {
  return null;
  return (
    <Stack mb="3rem" mt="4rem" marginX={marginX}>
      <CHeading>Latest News</CHeading>

      {/* <SimpleGrid mt="1.5rem" columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {[1, 2, 3].map((_, i) => (
          <BlogCard key={i} />
        ))}
      </SimpleGrid> */}
      <Button w="fit-content" mx="auto" colorScheme="secondary" mt="2rem">
        View More Blogs
      </Button>
    </Stack>
  );
};

export default HomeBlogs;
