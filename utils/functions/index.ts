import { CMS_ASSETS_URL, DIRECTUS_ACCESS_TOKEN } from "@/config";

export function getHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${DIRECTUS_ACCESS_TOKEN}`,
  };
}

export function getImageUrl(imageId: string) {
  if (!imageId) return "";
  return `${CMS_ASSETS_URL}/${imageId}`;
}
