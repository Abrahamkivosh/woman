import { CMS_URL } from "@/config";
import { marginX, reportsBackupData } from "@/utils/constants";
import { getImageUrl } from "@/utils/functions";
import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const ReportsListing = async () => {
  const reports = await getReports();
  return (
    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      spacing={8}
      marginX={marginX}
      my="3rem"
    >
      {reports.map((report, i) => (
        <Stack
          data-aos={i % 2 === 0 ? "fade-up" : "fade-left"}
          data-aos-delay={i * 100}
          key={report.id}
          boxShadow="md"
          borderRadius="md"
          height="fit-content"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Box>
            <Image
              src={getImageUrl(report.cover_image)}
              width={500}
              height={500}
              blurDataURL={getImageUrl(report.cover_image)}
              style={{
                borderRadius: ".75rem",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt="banner"
            />
          </Box>
          <Stack p={4}>
            <Heading
              fontSize="xl"
              _hover={{
                color: "brand.primary",
              }}
            >
              {report.title}
            </Heading>
            <Text>{report.excerpt}</Text>
          </Stack>
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default ReportsListing;

async function getReports() {
  try {
    const res = await fetch(getUrl(), {
      cache: "no-cache",
    });

    const reports: {
      data: ReportData[];
    } = await res.json();

    return reports.data;
  } catch (error) {
    return reportsBackupData;
  }
}

function getUrl() {
  return (
    CMS_URL + "/items/Reports/" + "?fields=id,title,cover_image,doc,excerpt"
  );
}
