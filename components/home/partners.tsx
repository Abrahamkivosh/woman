"use client";
import { marginX, partnersData } from "@/utils/constants";
import { Box, Button, Stack } from "@chakra-ui/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import CHeading from "../common/c-heading";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const OurPartners = () => {
  return (
    <Stack marginX={marginX} mb="4rem">
      <CHeading>Our Partners</CHeading>
      <Box mt="1.2rem">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            998: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {partnersData.map((partner, i) => (
            <SwiperSlide key={i}>
              <Stack
                h="12rem"
                align="center"
                bg={partner.bg ? partner.bg : "brand.white"}
                border="2px solid var(--chakra-colors-brand-primary)"
                justify="center"
                overflow="hidden"
                boxShadow="md"
                borderRadius="xl"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={200}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Link
        href="/who-we-are/partners"
        style={{
          margin: "2rem auto 0 auto",
        }}
      >
        <Button
          bg="brand.black"
          color="brand.white"
          _hover={{
            bg: "brand.primary",
          }}
        >
          View all partners
        </Button>
      </Link>
    </Stack>
  );
};

export default OurPartners;
