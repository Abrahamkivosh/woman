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
import { motion } from "framer-motion"; // Import framer-motion for animations
import Link from "next/link";
import { useState } from "react";

// Motion components from Chakra UI
const MotionBox = motion.create(Box as any) as any;
const MotionHeading = motion.create(Heading as any) as any;

const NewsPage = () => {
  const [visibleArticles, setVisibleArticles] = useState(6); // Start with 6 articles
  const [loadingMore, setLoadingMore] = useState(false);

  const handleLoadMore = () => {
    if (visibleArticles < fullNewsData.length) {
      setLoadingMore(true);
      setTimeout(() => {
        setVisibleArticles((prev) => prev + 6);
        setLoadingMore(false);
      }, 2000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <CommonHero title="News" path="News" imgUrl="/images/news.jpg" />

      {/* Intro Text Section */}
      <Box
        bg="white"
        py="3rem"
        px={{ base: "2rem", sm: "4rem" }}
        textAlign="center"
      >
        <MotionHeading
          fontSize="2xl"
          fontWeight="bold"
          color="gray.700"
          mb={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stay informed with the latest news and updates from Women in
          Technology and Innovation Africa (WITIA)
        </MotionHeading>
        <Text
          fontSize="lg"
          color="gray.600"
          maxW="3xl"
          mx="auto"
          data-aos="fade-up"
        >
          From success stories of women in tech to insights on industry trends,
          our news section keeps you connected to what’s happening in the world
          of technology and innovation across Africa.
        </Text>
      </Box>

      {/* News Section */}
      <Box
        bg="gray.100"
        py={{ base: "4rem", sm: "6rem" }}
        px={{ base: "2rem", sm: "4rem" }}
      >
        <MotionHeading
          textAlign="center"
          mb={12}
          color="teal.600"
          fontSize="3xl"
          fontWeight="bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Latest News and Updates
        </MotionHeading>

        {/* News Articles Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {fullNewsData.slice(0, visibleArticles).map((newsItem, index) => (
            <MotionBox
              key={index}
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              display="flex"
              flexDirection="column"
              _hover={{ transform: "scale(1.03)", boxShadow: "xl" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <Image
                src={newsItem.image}
                alt={newsItem.title}
                width="100%"
                height="200px"
                objectFit="cover"
                loading="lazy"
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
                  {newsItem.subTitle}
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
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Load More Button */}
        {visibleArticles < fullNewsData.length && (
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
        )}
      </Box>
    </>
  );
};

export default NewsPage;
