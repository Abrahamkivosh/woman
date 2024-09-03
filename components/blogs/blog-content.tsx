import { marginX } from "@/utils/constants";
import { SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import CHeading from "../common/c-heading";
import BlogCard from "../common/blog-card";
import { CMS_URL } from "@/config";

const BlogContent = async () => {
  const blogs = await getBlogs();

  return (
    <Stack marginX={marginX} mt="2rem" mb="3rem" gap="2rem">
      <CHeading>Latest News</CHeading>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default BlogContent;

async function getBlogs() {
  try {
    const url =
      CMS_URL +
      "/items/blogs" +
      "?filter[status][_eq]=published&fields=slug,date_created,thumbnail,title,excerpt,tag&sort=-date_created";

    const res = await fetch(url, {
      cache: "no-cache",
    });

    const data: {
      data: Blog[];
    } = await res.json();

    if (!data.data) {
      throw new Error("No data found");
    }

    return data.data;
  } catch (error) {
    console.log("Error fetching blogs", error);
    return [] as Blog[];
  }
}
