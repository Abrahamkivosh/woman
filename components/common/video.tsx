"use client";

import { Box } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";

import "video.js/dist/video-js.css";

interface Options {
  controls: boolean;
  loop: boolean;
  responsive: boolean;
  muted: boolean;
  fill: boolean;

  fluid?: boolean;
  autoplay?: boolean;

  sources: {
    src: string;
    type: string;
  }[];
}

interface Props {
  options: Options;
  onReady: (player: Player) => void;
}

export const VideoJS = (props: Props) => {
  const videoRef = React.useRef<HTMLDivElement>(null);
  const playerRef = React.useRef<Player | null>(null);
  const { options, onReady } = props;
  const ref = useRef(null);
  const isInView = useInView(ref);

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current?.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [onReady, options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
    const player = playerRef.current;
    const handleVisibilityChange = () => {
      if (document.hidden) {
        playerRef.current?.pause();
      } else {
        playerRef.current?.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  //pause the player if not in view
  useEffect(() => {
    if (isInView) {
      playerRef.current?.play();
    } else {
      playerRef.current?.pause();
    }
  }, [isInView]);

  return (
    <div data-vjs-player ref={ref}>
      <Box ref={videoRef} />
    </div>
  );
};

export default VideoJS;
