type GalleryImageType =
  | "soto"
  | "btb-conf"
  | "orient"
  | "cure"
  | "nakuru_womens_visit"
  | undefined;

type EventGallery = {
  slug: string;
  title: string;
  description: string;
  featured_image: {
    id: string;
    description: string | null;
  };
};

type Story = {
  slug: string;
  title: string;
  date_created: string;
  thumbnail: string;
  excerpt: string;
};

type StoryDetail = {
  slug: string;
  title: string;
  date_created: string;
  thumbnail: string;
  content: string;
};

type Blog = {
  slug: string;
  date_created: string;
  thumbnail: string;
  title: string;
  excerpt: string;
  tag: string;
};

type BlogDetail = {
  slug: string;
  date_created: string;
  thumbnail: string;
  title: string;
  content: string;
  tag: string;
};

type Team = {
  slug: string;
  full_name: string;
  position: string;
  profile_pic: string;
  is_board_member: boolean;
  about: string;
  layout_number?: number;
  facebook_link?: string;
  linkedin_link?: string;
  x_link?: string;
  phone?: string;
  email?: string;
};

interface Partner {
  slug: string;
  name: string;
  logo: string;
  link: string;
  bio?: string;
}

type HistoryType = {
  banner_image: string;
  content: string;
};

interface Programme {
  slug: string;
  title: string;
  content: string;
  programme_images: {
    directus_files_id: string;
  }[];
}

interface ReportData {
  id: number;
  title: string;
  cover_image: string;
  doc: string;
  excerpt: string;
}

interface NavType {
  label: string;
  link?: string;
  subItems?: {
    label: string;
    link: string;
  }[];
}

interface GalleryType {
  id: number;
  directus_files_id: string;
}
interface ContactUsNotificationInterface {
  name: string;
  email: string;
  subject: string;
  message: string;
}
