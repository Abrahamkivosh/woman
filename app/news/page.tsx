"use client";
import { CommonHero } from "@/components/common";
import { fullNewsData } from "@/utils/constants";
import {
  Badge,
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const NewsPage = () => {
  // State to manage displayed articles and loading status
  const [visibleArticles, setVisibleArticles] = useState(6); // Start with 6 articles
  const [loadingMore, setLoadingMore] = useState(false);

  // Function to handle loading more articles
  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleArticles((prev) => prev + 6); // Show 6 more articles
      setLoadingMore(false);
    }, 2000); // Simulate 2-second loading time
  };

  return (
    <>
      {/* Hero Section */}
      <CommonHero
        title="News"
        path="News"
        h="40vh"
        imgUrl="/images/history01.webp"
      />

      {/* News Section */}
      <Box
        bg="gray.100"
        py={{ base: "4rem", sm: "6rem" }}
        px={{ base: "2rem", sm: "4rem" }}
      >
        <Heading
          textAlign="center"
          mb={12}
          color="teal.600"
          fontSize="3xl"
          fontWeight="bold"
        >
          Latest News and Updates
        </Heading>

        {/* News Articles Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {fullNewsData.slice(0, visibleArticles).map((newsItem, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              _hover={{ transform: "scale(1.03)", boxShadow: "xl" }}
              display="flex"
              flexDirection="column"
            >
              <Image
                src={newsItem.imgUrl}
                alt={newsItem.title}
                width="100%"
                height="200px"
                style={{ objectFit: "cover" }}
                borderRadius="lg 0 0 0"
              />
              <Box p={6} flex="1" display="flex" flexDirection="column">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text color="gray.500" fontSize="sm" mb={4}>
                    {newsItem.date}
                  </Text>
                  <Badge colorScheme="teal" p={1} rounded="2xl">
                    {newsItem.category}
                  </Badge>
                </Box>

                <Heading
                  as="h3"
                  fontSize="xl"
                  mb={2}
                  fontWeight="600"
                  color="gray.700"
                >
                  {newsItem.title}
                </Heading>
                <Text color="gray.600" mb={4} flex="1">
                  {newsItem.excerpt}
                </Text>

                <Button
                  colorScheme="teal"
                  variant="outline"
                  size="sm"
                  _hover={{ bg: "teal.50" }}
                  mt="auto"
                >
                  <Link href={"news/" + newsItem.slug}> Read More</Link>
                </Button>
              </Box>
            </Box>
          ))}
        </SimpleGrid>

        {/* Load More Button */}
        <VStack mt={12}>
          <Button
            onClick={handleLoadMore}
            isLoading={loadingMore}
            loadingText="Loading"
            colorScheme="teal"
            variant="solid"
            size="lg"
          >
            Load More
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default NewsPage;
