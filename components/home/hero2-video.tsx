"use client";
import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import videojs from "video.js";
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

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <Box as="section">
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </Box>
  );
};

export default Hero2Video;
