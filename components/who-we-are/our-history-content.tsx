import { marginX } from "@/utils/constants";
import { Box, Stack } from "@chakra-ui/react";

import { CMS_URL } from "@/config";
import { getImageUrl } from "@/utils/functions";
import { notFound } from "next/navigation";
import { RenderContent } from "../common";

const OurHistoryContent = async () => {
  const historyData = await getHistoryData();
  return (
    <Stack marginX={marginX} my="3rem">
      <Box
        bgImage={getImageUrl(historyData.banner_image)}
        bgColor="brand.primary"
        bgSize="cover"
        bgPos="center center"
        borderRadius="xl"
        height="65vh"
        boxShadow="xl"
      />
      <RenderContent content={historyData.content} />
    </Stack>
  );
};

export default OurHistoryContent;

async function getHistoryData() {
  try {
    const res = await fetch(CMS_URL + "/items/our_history", {
      cache: "no-cache",
    });
    const history: { data: HistoryType } = await res.json();

    return history.data;
  } catch (error) {
    return notFound();
  }
}
