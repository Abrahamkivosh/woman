"use client";
import { marginX } from "@/utils/constants";

import { Box, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";

import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import { getImageUrl } from "@/utils/functions";
import "@splidejs/react-splide/css";
import RenderContent from "../common/render-content";

const ProgrammeContent = ({ programme }: { programme: Programme }) => {
  const { title, content, programme_images } = programme;
  return (
    <Stack marginX={marginX} my="4rem">
      <Heading as="h2" size="lg" mb="1.4rem">
        {title} Program
      </Heading>
      <Box overflow="hidden" borderRadius="lg" pos="relative">
        <Splide
          options={{
            rewind: true,
            type: "loop",
            autoplay: true,
            fixedHeight: "37rem",
          }}
          aria-label="My Favorite Images"
        >
          {programme_images.map((image, i) => (
            <SplideSlide key={i}>
              <Image
                src={getImageUrl(image.directus_files_id)}
                width={1200}
                height={500}
                blurDataURL={getImageUrl(image.directus_files_id)}
                style={{
                  borderRadius: ".75rem",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt="banner"
              />
            </SplideSlide>
          ))}
        </Splide>
      </Box>
      <RenderContent content={content} />
    </Stack>
  );
};

export default ProgrammeContent;
