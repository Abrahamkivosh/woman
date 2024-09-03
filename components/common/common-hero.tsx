import { marginX } from "@/utils/constants";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import ScrollToBottom from "./scroll-bottom-btn";

interface Props {
  path: string;
  imgUrl?: string;
  title?: string;
  h?: string;
}

const CommonHero = ({ path, imgUrl, title, h }: Props) => {
  return (
    <Box position="relative">
      <Flex
        minH={h || "85vh"}
        bgImage={imgUrl || "/gender.jpg"}
        bgSize="cover"
        bgColor="brand.primary"
        bgBlendMode="overlay"
        bgPos="center"
        bgRepeat="no-repeat"
        align="center"
        justify="center"
        backgroundAttachment="fixed"
      >
        <Stack marginX={marginX} align="center" color="brand.white">
          <Heading textAlign="center" fontSize={{ base: "3rem", md: "5rem" }}>
            {title || path}
          </Heading>
          <Flex>
            <Heading fontSize="xl" fontWeight="600" color="secondary.default">
              <Link href="/">Home</Link> / {path}
            </Heading>
          </Flex>
        </Stack>
      </Flex>

      <ScrollToBottom />
    </Box>
  );
};

export default CommonHero;
