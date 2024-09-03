import { getImageUrl } from "@/utils/functions";
import { CalendarIcon, UserIcon } from "@/utils/icons";
import {
  Box,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  blog: Blog;
}

const BlogCard = ({ blog }: Props) => {
  const { tag, slug, thumbnail, title, excerpt, date_created } = blog;
  return (
    <Stack
      borderRadius="xl"
      height="fit-content"
      overflow="hidden"
      boxShadow="md"
      bg="brand.white"
    >
      <Box
        maxH="20rem"
        overflow="hidden"
        transition="transform 0.3s ease-in-out"
        _hover={{
          "& img": {
            transform: "scale(1.1)",
            transition: "transform 0.3s ease-in-out",
          },
        }}
      >
        <Image
          src={getImageUrl(thumbnail)}
          width={400}
          height={200}
          alt="blog-img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </Box>
      <Stack p=".5rem .7rem">
        <Text fontSize="lg" fontWeight={600} color="brand.primary">
          # {tag}
        </Text>
        <Link href={`/latest-news/${slug}`}>
          <Heading
            fontSize="xl"
            _hover={{
              color: "brand.primary",
              cursor: "pointer",
            }}
          >
            {title}
          </Heading>
        </Link>

        <Text>{excerpt}...</Text>
        <StackDivider h=".04rem" bg="gray" />
        <Flex justify="space-between">
          <Flex gap={2} align="center">
            <Stack bg="secondary.100" p=".4rem" borderRadius="full">
              <CalendarIcon boxSize={5} />
            </Stack>

            <Stack gap={1}>
              <Text fontWeight="600" fontSize="lg">
                Date:
              </Text>
              <Text color="GrayText">
                {new Date(date_created).toDateString()}
              </Text>
            </Stack>
          </Flex>
          <Flex gap={2} align="center">
            <Stack bg="secondary.100" p=".4rem" borderRadius="full">
              <UserIcon boxSize={5} />
            </Stack>

            <Stack gap={1}>
              <Text fontWeight="600" fontSize="lg">
                By:
              </Text>
              <Text color="GrayText">Admin</Text>
            </Stack>
          </Flex>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default BlogCard;
