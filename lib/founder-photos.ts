/**
 * Local assets under /public/founder — Sarki Abass Giwa profile imagery.
 */
export const FOUNDER_LEADERSHIP_IMAGE = "/founder/portrait-kaftan.png";

/** Alt text for the primary leadership / home block portrait. */
export const FOUNDER_LEADERSHIP_ALT =
  "Sarki Abass Giwa, founder of Giwa Investment, wearing a grey traditional tunic.";

/** Wide hero background — traditional leadership and ceremony. */
export const FOUNDER_HERO_IMAGE = "/founder/ceremony-traditional-attire.png";

export const FOUNDER_HERO_ALT =
  "Sarki Abass Giwa in traditional green and white ceremonial regalia with community leaders at a festival gathering.";

export type FounderPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export const FOUNDER_PROFILE_PHOTOS: readonly FounderPhoto[] = [
  {
    src: "/founder/portrait-kaftan.png",
    alt: "Sarki Abass Giwa, founder of Giwa Investment, wearing a grey traditional tunic.",
    caption: "Portrait — traditional dress",
  },
  {
    src: "/founder/casual-beret.png",
    alt: "Sarki Abass Giwa seated in a modern living room wearing a peach shirt and black beret.",
    caption: "At home in Accra",
  },
  {
    src: "/founder/portrait-seated-sofa.png",
    alt: "Sarki Abass Giwa seated on a sofa in professional attire.",
    caption: "Interview and public engagement",
  },
  {
    src: "/founder/ceremony-traditional-attire.png",
    alt: "Sarki Abass Giwa in traditional green and white ceremonial regalia with community leaders at a festival gathering.",
    caption: "Traditional leadership and ceremony",
  },
  {
    src: "/founder/certificate-humanity-magazine.png",
    alt: "Sarki Abass Giwa, CEO of Giwa Investment, receiving a Certificate of Honor from Humanity Magazine International for contributions to real estate development in Ghana.",
    caption: "Humanity Magazine International — Certificate of Honor",
  },
  {
    src: "/founder/outdoor-with-vehicles.png",
    alt: "Sarki Abass Giwa outdoors in a striped Ghanaian smock between two vehicles.",
    caption: "On the ground in Ghana",
  },
] as const;
