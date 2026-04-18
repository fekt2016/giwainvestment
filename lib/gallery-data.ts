export type GalleryCategory =
  | "rentals"
  | "houses-for-sale"
  | "land-for-sale";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
};

export const GALLERY_TABS: readonly {
  id: GalleryCategory;
  label: string;
  description: string;
}[] = [
  {
    id: "rentals",
    label: "Rentals",
    description: "Apartments and houses available to lease.",
  },
  {
    id: "houses-for-sale",
    label: "Houses for sale",
    description: "Homes and completed builds on the market.",
  },
  {
    id: "land-for-sale",
    label: "Land for sale",
    description: "Plots and development land.",
  },
] as const;

export const galleryItems: readonly GalleryItem[] = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    alt: "Contemporary house exterior — example listing",
    caption: "4-bed · East Legon area · GHS on request",
    category: "houses-for-sale",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Living space with natural light",
    caption: "2-bed apartment · furnished option",
    category: "rentals",
  },
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
    alt: "Open land and horizon",
    caption: "Serviced plot · road access",
    category: "land-for-sale",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    alt: "Modern kitchen and dining",
    caption: "Townhouse · title work with your lawyer",
    category: "houses-for-sale",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    alt: "Pool and villa style home",
    caption: "Villa · gated community style",
    category: "houses-for-sale",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    alt: "Townhouse facade",
    caption: "Townhouse · long lease available",
    category: "rentals",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    alt: "Minimal interior corridor",
    caption: "Studio /1-bed · city fringe",
    category: "rentals",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    alt: "Family home with garden",
    caption: "Family home · garden · negotiable",
    category: "houses-for-sale",
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    alt: "Residential street at dusk",
    caption: "Development land · zoning TBC with assembly",
    category: "land-for-sale",
  },
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    alt: "Farmland and trees at golden hour",
    caption: "Agricultural / conversion potential — verify with planners",
    category: "land-for-sale",
  },
];

export const DEFAULT_GALLERY_CATEGORY: GalleryCategory = "rentals";

export function isGalleryCategory(v: string | null): v is GalleryCategory {
  return (
    v === "rentals" ||
    v === "houses-for-sale" ||
    v === "land-for-sale"
  );
}
