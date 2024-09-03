import { marginX } from "@/utils/constants";
import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import { CMS_ASSETS_URL, CMS_URL } from "@/config";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const cmsUrl = CMS_URL + "/items/partners?fields=slug,name,logo,link";

const PartnersListing = async () => {
  const partnersData = await getPartners();
  return (
    <Box my="4rem" marginX={marginX}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={10}
        mt="2rem"
      >
        {partnersData.map((d, i) => (
          <Link
            href={`/who-we-are/partners/${d.slug}`}
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 200}
          >
            <Stack
              align="center"
              bg="brand.white"
              p={4}
              gap={3}
              boxShadow="md"
              borderRadius="lg"
              h="fit-content"
              transition="all .3s ease-in-out"
              _hover={{
                boxShadow:
                  "0px 0px 10px 0px var(--chakra-colors-brand-primary)",
                borderColor: "var(--chakra-colors-brand-red)",
              }}
            >
              <Box h="10rem">
                <Image
                  src={`${CMS_ASSETS_URL}/${d.logo}`}
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                  alt={d.name}
                  width={200}
                  height={200}
                />
              </Box>
              <Heading
                textAlign="center"
                _hover={{
                  color: "brand.red",
                }}
                color="brand.main"
                fontSize="lg"
              >
                {d.name}
              </Heading>
            </Stack>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PartnersListing;

async function getPartners() {
  try {
    const res = await fetch(cmsUrl, {
      cache: "no-cache",
    });
    const partners: {
      data: Partner[];
    } = await res.json();
    return partners.data;
  } catch (error) {
    console.log(error);
    notFound();
  }
}
