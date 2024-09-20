import { marginX } from "@/utils/constants";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";

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
        minH={h || "55vh"}
        bgImage={imgUrl || "/images/woman01.jpg"}
        bgSize="cover"
        bgColor="rgba(0, 0, 0, 0.1)"
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

      {/* <ScrollToBottom /> */}
    </Box>
  );
};

export default CommonHero;
