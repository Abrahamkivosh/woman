import { CommonHero } from "@/components/common";
import { fullNewsData } from "@/utils/constants";
import { Badge, Box, Heading, Image, Text } from "@chakra-ui/react";

interface Props {
  params: {
    news: string;
  };
}

const NewsArticlePage = ({ params: { news } }: Props) => {
  // Find the news article based on the slug
  const newsArticle = fullNewsData.find((article) => article.slug === news);

  if (!newsArticle) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Hero Section */}
      <CommonHero title="News" path="News" imgUrl="/images/history01.webp" />

      {/* News Section */}
      <Box
        bg="gray.100"
        py={{ base: "4rem", sm: "6rem" }}
        px={{ base: "2rem", sm: "4rem" }}
      >
        <Box
          maxW="1200px"
          mx="auto"
          bg="white"
          p={6}
          borderRadius="lg"
          boxShadow="2xl"
        >
          <Image
            src={newsArticle.image}
            alt={newsArticle.title}
            borderRadius="lg"
            mb={6}
            width="100%"
          />
          <Badge colorScheme="teal" mb={3}>
            {newsArticle.category}
          </Badge>
          <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={6}>
            {newsArticle.title}
          </Heading>
          <Text color="gray.600" fontSize="sm" mb={4}>
            {newsArticle.date}
          </Text>
          <Text
            fontSize="lg"
            color="gray.700"
            lineHeight="1.8"
            dangerouslySetInnerHTML={{ __html: newsArticle.description }}
          />
        </Box>
      </Box>
    </>
  );
};

export default NewsArticlePage;
