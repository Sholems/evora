export type ProductCategory =
  | "Women's Fashion"
  | "Handbags"
  | "Jewelry"
  | "Accessories";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  subtitle: string;
  description: string;
  shortDescription: string;
  price?: string;
  images: string[];
  colors?: string[];
  materials?: string[];
  dimensions?: string;
  details: string[];
  care?: string[];
  featured?: boolean;
  newArrival?: boolean;
  lookbook?: boolean;
  availability: "Available" | "Limited Atelier Run" | "Made to Order" | "Inquire for Waitlist";
  tags?: string[];
}

export interface LookItem {
  productId: string;
  role: string;
  name: string;
}

export interface LookbookEntry {
  id: string;
  slug: string;
  title: string;
  season: string;
  headline: string;
  editorialCopy: string;
  locationNote: string;
  heroImage: string;
  supportingImages: string[];
  styledItems: LookItem[];
}

export interface BrandService {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  duration?: string;
  image: string;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  category: "Orders" | "Product Availability" | "Delivery" | "Returns" | "Private Shopping";
  question: string;
  answer: string;
}

export type InquiryType =
  | "Product Inquiry"
  | "Order Inquiry"
  | "Private Shopping"
  | "Styling"
  | "Gift Consultation"
  | "General Question";

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone?: string;
  inquiryType: InquiryType;
  productOrCollection?: string;
  message: string;
  preferredContact?: "WhatsApp" | "Email" | "Phone";
}
