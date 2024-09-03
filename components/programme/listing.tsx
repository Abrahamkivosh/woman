"use client";
import { marginX } from "@/utils/constants";
import { getImageUrl } from "@/utils/functions";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";

const sampleData = {
  data: [
    {
      slug: "children-and-girls",
      title: "Children And Girls",
      programme_images: [
        {
          directus_files_id: "2cb0af1c-9b28-4195-a247-819ef894af61",
        },
      ],
    },
    {
      slug: "donations-and-partnerships",
      title: "Donations And Partnerships",
      programme_images: [
        {
          directus_files_id: "c4dd7ab3-600c-46c3-ad35-f9d46c4bb42d",
        },
      ],
    },
    {
      slug: "movement-building",
      title: "Movement Building",
      programme_images: [
        {
          directus_files_id: "4b42cb6b-b00e-4164-bd8c-e87aecaf4423",
        },
      ],
    },
    {
      slug: "re-entry",
      title: "Re-Entry",
      programme_images: [
        {
          directus_files_id: "b57d9a1a-4409-40d8-9ee1-478d42bc8859",
        },
        {
          directus_files_id: "c8d91edd-b52c-4635-9a0e-c433e6e5e550",
        },
      ],
    },
    {
      slug: "rehabilitation",
      title: "Rehabilitation",
      programme_images: [
        {
          directus_files_id: "b6fa7767-edf4-4382-b8e5-4c2d627900f4",
        },
        {
          directus_files_id: "5934ea6c-9c04-49d1-953d-fcdd6042ae13",
        },
      ],
    },
  ],
};

const ProgramListing = () => {
  return (
    <Stack mx={marginX} my="2rem" gap="4rem">
      {sampleData.data.map((p, i) => (
        <SimpleGrid
          key={p.slug}
          columns={{ base: 1, sm: 2 }}
          spacing={6}
          alignItems="center"
        >
          <Box overflow="hidden" order={i % 2 === 0 ? 1 : 2} data-aos="fade-up">
            <Splide
              options={{
                rewind: true,
                type: "loop",
                autoplay: true,
                fixedHeight: "25rem",
              }}
              aria-label="My Favorite Images"
            >
              {p.programme_images.map((img) => (
                <SplideSlide key={img.directus_files_id}>
                  <Box h="25rem" overflow="hidden" borderRadius=".75rem">
                    <Image
                      src={getImageUrl(img.directus_files_id)}
                      width={500}
                      height={500}
                      blurDataURL={getImageUrl(img.directus_files_id)}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt="banner"
                    />
                  </Box>
                </SplideSlide>
              ))}
            </Splide>
          </Box>

          <Stack order={i % 2 === 0 ? 2 : 1} data-aos="fade-down">
            <Heading color="brand.primary">{p.title}</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              molestie, felis ac luctus gravida, mi eros lacinia nunc, ac
              condimentum arcu ipsum at libero. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam molestie, felis ac luctus
              gravida, mi eros lacinia nunc, ac condimentum arcu ipsum at
              libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam molestie, felis ac luctus gravida, mi eros lacinia nunc, ac
              condimentum arcu ipsum at libero. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam molestie, felis ac luctus
              gravida, mi eros lacinia nunc, ac condimentum arcu ipsum at
              libero.{" "}
            </Text>
            <Button colorScheme="primary">Learn More</Button>
          </Stack>
        </SimpleGrid>
      ))}
    </Stack>
  );
};

export default ProgramListing;
