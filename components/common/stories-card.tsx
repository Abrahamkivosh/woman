import { getImageUrl } from "@/utils/functions";
import {
  Box,
  Heading,
  HStack,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  story: Story;
}

const StoriesCard = ({ story }: Props) => {
  const { thumbnail, date_created, title, excerpt, slug } = story;
  return (
    <Stack gap={3} boxShadow="lg" borderBottomRadius="lg" height="fit-content">
      <Box
        h="18rem"
        overflow="hidden"
        borderTopRadius="xl"
        _hover={{
          "& img": {
            transform: "scale(1.1)",
            transition: "transform 0.5s ease-in-out",
          },
        }}
      >
        <Image
          src={getImageUrl(thumbnail)}
          alt={title + " " + excerpt}
          width={500}
          height={500}
          style={{
            transition: "transform 0.5s ease-in-out",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Stack px={{ base: ".5rem", sm: ".8rem" }} pt=".1rem" pb=".6rem" gap={2}>
        <HStack
          divider={<StackDivider borderColor="gray.400" />}
          fontSize={{ base: "md", sm: "lg" }}
        >
          <Text>By: {"Admin"}</Text>{" "}
          <Text>{new Date(date_created).toDateString()}</Text>
        </HStack>
        <Link href={`/our-stories/${slug}`}>
          {" "}
          <Heading
            as="h4"
            fontSize={{ base: "lg", sm: "xl" }}
            _hover={{
              color: "brand.primary",
              cursor: "pointer",
            }}
          >
            {title}
          </Heading>
        </Link>

        <Text fontSize={{ base: "md" }} fontWeight="500" color="GrayText">
          {excerpt}...
        </Text>
      </Stack>
    </Stack>
  );
};

export default StoriesCard;
