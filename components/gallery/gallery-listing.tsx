"use client";
import { marginX } from "@/utils/constants";
import { getImageUrl } from "@/utils/functions";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { BlurImage } from "../common";

interface Props {
  gallery: GalleryType[];
}

const GalleryListing = ({ gallery }: Props) => {
  const [index, setIndex] = useState(-1);

  const currentImage = gallery[index];
  const nextIndex = (index + 1) % gallery.length;
  const nextImage = gallery[nextIndex] || currentImage;
  const prevIndex = (index + gallery.length - 1) % gallery.length;
  const prevImage = gallery[prevIndex] || currentImage;
  const handleClick = (index: number) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <Box marginX={marginX} my="2rem">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="10px">
          {gallery.map(({ id, directus_files_id }, i) => (
            <Box key={id} onClick={() => handleClick(i)}>
              <BlurImage
                imageUrl={getImageUrl(directus_files_id)}
                imageAlt="Event Images"
              />
            </Box>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={getImageUrl(currentImage.directus_files_id)}
          imageTitle={""}
          mainSrcThumbnail={getImageUrl(currentImage.directus_files_id)}
          nextSrc={getImageUrl(nextImage.directus_files_id)}
          nextSrcThumbnail={getImageUrl(nextImage.directus_files_id)}
          prevSrc={getImageUrl(prevImage.directus_files_id)}
          prevSrcThumbnail={getImageUrl(prevImage.directus_files_id)}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </Box>
  );
};

export default GalleryListing;
