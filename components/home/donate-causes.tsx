import React from "react";
import CHeading from "../common/c-heading";
import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { marginX } from "@/utils/constants";
import DonateButton from "../common/donate-btn";

const causes = [
  {
    img: "/causes/support-a-woman-in-the-ufunuo-program.png",
    title: "SUPPORT A WOMAN IN THE UFUNUO PROGRAM",

    excerpt:
      "For $150, you can support a woman with psychosocial support and trauma-healing through our Ufunuo Program.",
  },
  {
    img: "/causes/support-a-business-hub.png",
    title: "SUPPORT A BUSINESS HUB",

    excerpt:
      "For $2,000 you can support the economic empowerement of the women by putting up of a business hub.",
  },
  {
    img: "/causes/support-a-girl-in-school.png",
    title: "SUPPORT A GIRL IN SCHOOL",

    excerpt:
      "For $500 you can support a girl through school with school fees and learning supplies for a year.",
  },
  {
    img: "/causes/support-a-child-in-prison.png",
    title: "SUPPORT A CHILD IN PRISON",

    excerpt:
      "For $120, you can make the stay of a child accompanying the mother in prison more comfortable.",
  },
];

const DonateCauses = () => {
  return (
    <Box bg="secondary.100" py="2rem">
      <Stack marginX={marginX} mt="3rem">
        <CHeading>Our Causes</CHeading>

        <SimpleGrid mt=".4rem" columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
          {causes.map((cause, i) => (
            <Stack key={i}>
              <Box h="15rem" overflow="hidden" borderRadius="xl">
                <Image
                  src={cause.img}
                  alt={cause.title}
                  width={400}
                  height={400}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              <Heading fontSize="xl" textTransform="capitalize">
                {cause.title}
              </Heading>
              <Text>{cause.excerpt}</Text>
            </Stack>
          ))}
        </SimpleGrid>
        <Box alignSelf="center">
          <DonateButton />
        </Box>
      </Stack>{" "}
    </Box>
  );
};

export default DonateCauses;
