"use client";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import type Player from "video.js/dist/types/player";
import VideoJS from "../common/video";

const Hero2Video = () => {
  const playerRef = useRef<Player | null>(null);

  const videoJsOptions = {
    autoplay: true,
    playsinline: true,
    loop: true,
    controls: false,
    fluid: true,
    muted: true,
    fit: true,
    fill: true,
    responsive: true,
    sources: [
      {
        src: "/videos/short.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player: Player) => {
    playerRef.current = player;
  };

  return (
    <Box as="section" pos="relative">
      <Box
        as="img"
        src="/images/history01.webp"
        alt="Video Thumbnail"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
      />
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </Box>
  );
};

export default Hero2Video;
