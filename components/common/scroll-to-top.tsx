"use client";
import { IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LiaAngleUpSolid } from "react-icons/lia";

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
      bottom="2rem"
      left="2rem"
      zIndex={999}
      display={visible ? "flex" : "none"}
      border="1px solid white"
      aria-label="Scroll to top"
      color="brand.white"
      bg="brand.black"
      _hover={{
        bg: "primary.default",
      }}
      boxShadow="md"
      icon={<LiaAngleUpSolid />}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    />
  );
};

export default ScrollToTop;
