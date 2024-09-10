import { APP_NAME, MISSION } from "@/config";
import { marginX } from "@/utils/constants";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <Box mt={{ base: "1.5rem", sm: "3rem" }}>
      <SimpleGrid
        marginX={marginX}
        columns={{ base: 1, md: 2 }}
        spacing={8}
        alignItems="center"
        mt={{ base: "1rem", sm: "1.5rem" }}
        my={{ base: "1rem", sm: "4rem" }}
      >
        <Box
          height={{ base: "20rem", sm: "30rem" }}
          overflow="hidden"
          borderRadius="xl"
          boxShadow="xl"
          data-aos-delay="100"
          data-aos="fade-left"
        >
          <Image
            src="/images/woman01.jpg"
            alt={APP_NAME}
            width={500}
            height={500}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            data-aos="fade-left"
          />
        </Box>
        <Stack gap={{ base: 2, sm: 4 }} data-aos="fade-up">
          <Heading
            as="h2"
            fontSize={{ base: "4xl", sm: "6xl" }}
            display="flex"
            flexDir={{ base: "row", sm: "row" }}
            data-aos="fade-right"
          >
            <Text color="brand.primary" className="welcomeText">
              Welcome
            </Text>
            <Text pl={4}>to WITIA</Text>
          </Heading>
          <Text
            data-aos="fade-up-right"
            fontSize={{ base: "md", sm: "lg" }}
            dangerouslySetInnerHTML={{ __html: MISSION }}
          />
          <Box>
            <Link href="/who-we-are/">
              <Button
                colorScheme="blue"
                variant="outline"
                data-aos="fade-up-right"
              >
                Read More ...
              </Button>
            </Link>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default AboutUs;
