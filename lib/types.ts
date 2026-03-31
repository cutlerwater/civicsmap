export type Official = {
  id: string;
  name: string;
  title: string;
  state: string;
  stateSlug: string;
  party?: string;
  district?: string;
  chamber: "executive" | "senate" | "house";
  photoUrl?: string;
  website?: string;
  contactUrl?: string;
};

export type StateOfficials = {
  name: string;
  slug: string;
  abbreviation: string;
  governor: Official | null;
  senators: Official[];
  representatives: Official[];
};