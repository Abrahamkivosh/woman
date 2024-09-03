"server only";
import { CMS_URL } from "@/config";

export async function getEventsGallery() {
  const url =
    CMS_URL +
    "/items/events_gallery" +
    "?fields=slug," +
    "title," +
    "description," +
    "featured_image.id," +
    "featured_image.description";

  try {
    const res = await fetch(url, {
      cache: "no-cache",
    });

    const data: {
      data: EventGallery[];
    } = await res.json();

    if (!data) {
      throw new Error("No data found");
    }

    return data.data;
  } catch (e) {
    console.error("Error fetching events gallery data", e);

    return [] as EventGallery[];
  }
}

export async function getTeamMember(slug: string): Promise<Team | null> {
  const url =
    CMS_URL +
    "/items/team/" +
    slug +
    "/" +
    "?filter[status][_eq]=active&fields=slug,full_name,position,is_board_member,profile_pic,x_link,facebook_link,linkedin_link,phone,email,about";

  try {
    const res = await fetch(url, {
      cache: "no-cache",
    });

    const data: {
      data: Team;
    } = await res.json();

    if (!data) {
      throw new Error("No data found");
    }

    return data.data;
  } catch (e) {
    console.error("Error fetching team member data", e);

    return null;
  }
}

export async function getGalleryData(slug: string) {
  let url =
    CMS_URL +
    "/items/events_gallery/" +
    slug +
    "?fields=slug,title,gallery.id,gallery.directus_files_id" +
    "&filter[status][_eq]=published";

  try {
    const res = await fetch(url, {
      cache: "no-cache",
    });
    const data: {
      data: { gallery: GalleryType[] };
    } = await res.json();

    return data.data.gallery;
  } catch (error) {
    console.error("Error fetching gallery data", error);
    return [] as GalleryType[];
  }
}
