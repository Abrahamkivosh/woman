import { CMS_ASSETS_URL } from "@/config";
import { marginX } from "@/utils/constants";
import { ArrowDown } from "@/utils/icons";
import { Box, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderContent from "../common/render-content";

const PartnersDetailContent = ({ partner }: { partner: Partner }) => {
  const { name, logo, bio, link } = partner;
  return (
    <Stack marginX={marginX} my="4rem" align="center" gap={8}>
      <Box>
        <Image
          src={`${CMS_ASSETS_URL}/${logo}`}
          alt={name}
          width={300}
          height={300}
        />
      </Box>
      {link ? (
        <Link href={link} target="_blank">
          <Heading
            textAlign="center"
            color="brand.black"
            cursor="pointer"
            _hover={{
              color: "brand.primary",
            }}
          >
            {name}{" "}
            <Box as={ArrowDown} boxSize="2rem" transform="rotate(-130deg)" />
          </Heading>{" "}
        </Link>
      ) : (
        <Heading
          textAlign="center"
          cursor="pointer"
          color="brand.black"
          _hover={{
            color: "brand.primary",
          }}
        >
          {name}{" "}
          <Box as={ArrowDown} boxSize="2rem" transform="rotate(-130deg)" />
        </Heading>
      )}
      <RenderContent content={bio || ""} />
    </Stack>
  );
};

export default PartnersDetailContent;
