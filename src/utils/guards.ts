// Ajustá estos tipos a los que uses en tu proyecto:
export type Show = {
  title: string;
  date: string; // ISO YYYY-MM-DD
  city: string;
  country: string; // ISO 3166-1 alpha-2
  venue?: string;
  tickets?: string;
  available?: boolean;
};

export type Release = {
  title: string;
  album?: string;
  releaseDate: string; // ISO YYYY-MM-DD
  cover?: string;
  links?: Record<string, string>;
};

export type Booking = {
  email?: string;
  phone?: string;
};

export type Link = {
  label: string;
  url: string;
  icon: string;
  cover?: string;
};

const isISODate = (s?: string) => !!s && /^\d{4}-\d{2}-\d{2}$/.test(s);

export const isValidShow = (s: any): s is Show =>
  !!s &&
  typeof s.title === "string" &&
  isISODate(s.date) &&
  typeof s.city === "string" &&
  typeof s.country === "string";

export const isValidRelease = (r: any): r is Release =>
  !!r && typeof r.title === "string" && isISODate(r.releaseDate);

export const hasBooking = (b?: Booking) => !!b && (!!b.email || !!b.phone);

export const isValidLink = (l: any): l is Link =>
  !!l &&
  typeof l.label === "string" &&
  typeof l.url === "string" &&
  typeof l.icon === "string";
