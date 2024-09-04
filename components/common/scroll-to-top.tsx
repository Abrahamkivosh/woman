"use client";
import { IconButton, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LiaAngleUpSolid } from "react-icons/lia";

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      window.scrollY > 100 ? setVisible(true) : setVisible(false);
    };
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <IconButton
      pos="fixed"
      bottom={{ base: "1rem", md: "2rem" }}
      left={{ base: "1rem", md: "2rem" }}
      zIndex={999}
      display={visible ? "flex" : "none"}
      border="none"
      aria-label="Scroll to top"
      color="brand.black"
      bg="brand.white"
      _hover={{
        bg: "brand.primary",
        color: "brand.white",
      }}
      _active={{
        bg: "brand.primary",
        transform: "scale(0.95)",
      }}
      animation={visible ? `${bounceAnimation} 0.6s ease-in-out` : ""}
      boxShadow="lg"
      icon={<LiaAngleUpSolid />}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      width={20}
      height={20}
      borderRadius="full"
      fontSize="4xl"
      fontWeight={900}
    />
  );
};

export default ScrollToTop;
