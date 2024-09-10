"use client";
import { marginX } from "@/utils/constants";
import { Box } from "@chakra-ui/react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const AboutContent = () => {
  return (
    <Box
      marginX={{ base: marginX.base, sm: "auto" }}
      maxW={{ base: "100%", sm: "3xl" }}
      my={{ base: "1rem", sm: "4rem" }}
      boxShadow="md"
      overflow="hidden"
      borderRadius="sm"
    >
      <LiteYouTubeEmbed
        id="t1hR36T1PeI"
        params="rel=0"
        playlist={false}
        noCookie={true}
        aspectWidth={640}
        aspectHeight={360}
        title="true"
      />
    </Box>
  );
};

export default AboutContent;
