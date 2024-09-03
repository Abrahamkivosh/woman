"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  imageUrl: string;
  imageAlt: string;
}

const BlurImage = ({ imageUrl, imageAlt }: Props) => {
  const [loading, setLoading] = useState(true);
  return (
    <Image
      src={imageUrl}
      alt={imageAlt}
      width={500}
      decoding="async"
      blurDataURL={imageUrl}
      height={500}
      onLoad={() => setLoading(false)}
      style={{
        filter: loading ? "blur(20px)" : "none",
        transition: "filter 0.2s linear",
      }}
    />
  );
};

export default BlurImage;
