import { marginX } from "@/utils/constants";
import { Button, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import CHeading from "./c-heading";
import BlogCard from "./blog-card";
import { CMS_URL } from "@/config";

interface Props {
  heading?: string;
}

const LatestNews = async ({ heading }: Props) => {
  const blogs = await getLatestNews();

  if (!blogs.length) {
    return null;
  }
  return (
    <Stack mb="3rem" mt="4rem" marginX={marginX}>
      <CHeading>{heading || "Latest News"}</CHeading>

      <SimpleGrid mt="1.5rem" columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </SimpleGrid>
      <Button w="fit-content" mx="auto" colorScheme="secondary" mt="2rem">
        View More Blogs
      </Button>
    </Stack>
  );
};

export default LatestNews;

async function getLatestNews() {
  const url =
    CMS_URL +
    "/items/blogs/?fields=slug,date_created,title,thumbnail,excerpt,tag&sort=-date_created&limit=3&filter[status][_eq]=published";

  try {
    const res = await fetch(url, {
      cache: "no-cache",
    });
    const data: {
      data: Blog[];
    } = await res.json();
    if (!data) {
      throw new Error("No data found");
    }

    return data.data;
  } catch (e) {
    console.log(e);
    return [] as Blog[];
  }
}
