export type AppState = {
  name: string;
  slug: string;
  abbreviation: string;
};

export const states: AppState[] = [
  { name: "Delaware", slug: "delaware", abbreviation: "DE" },
  { name: "Maryland", slug: "maryland", abbreviation: "MD" },
  { name: "Virginia", slug: "virginia", abbreviation: "VA" },
  { name: "Pennsylvania", slug: "pennsylvania", abbreviation: "PA" },
  { name: "West Virginia", slug: "west virginia", abbreviation: "WV" },
  { name: "New York", slug: "new york", abbreviation: "NY" },
  { name: "New Jersey", slug: "new jersey", abbreviation: "NJ" },
  { name: "Connecticut", slug: "connecticut", abbreviation: "CT" },
  { name: "Rhode Island", slug: "rhode Island", abbreviation: "RI" },
  { name: "Massachussetts", slug: "new york", abbreviation: "MA" },
  { name: "Maine", slug: "maine", abbreviation: "ME" },
  { name: "Vermont", slug: "vermont", abbreviation: "VT" },
  { name: "New Hampshire", slug: "new hampshire", abbreviation: "NH" },
  { name: "North Carolina", slug: "North Carolina", abbreviation: "NC" },
  { name: "South Carolina", slug: "south carolina", abbreviation: "SC" },
  { name: "Georgia", slug: "georgia", abbreviation: "GA" },
  { name: "Florida", slug: "florida", abbreviation: "FL" },
];