import { Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

const HomeGallery = () => {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }}>
      {[1, 2, 3, 4, 5].map((img, i) => (
        <Box
          key={i}
          h="18rem"
          filter="brightness(0.8)"
          _hover={{
            filter: "brightness(1.1)",
            cursor: "pointer",
          }}
        >
          <Image
            src={`/gallery/img${img}.png`}
            alt=""
            width={500}
            height={500}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default HomeGallery;
