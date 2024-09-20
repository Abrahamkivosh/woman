import { CMS_ASSETS_URL, CMS_TOKEN } from "@/config";

export function getHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${CMS_TOKEN}`,
  };
}

export function getImageUrl(imageId: string) {
  if (!imageId) return "";
  return `${CMS_ASSETS_URL}/${imageId}`;
}
