import { Url } from "next/dist/shared/lib/router/router";

export type Official = {
  id: string;
  name: string;
  title: string;
  state: string;
  stateSlug: string;
  party?: string;
  district?: string;
  chamber: "executive" | "senate" | "house" | "Judicial";
  photoUrl?: string;
  website?: string;
  contactUrl?: string;
  officeaddress?: string,
  assumedoffice?: string,
  predecessor?: string,
  born?: string,
  college?: string,
  phone?: string,
  level?: string,
  serveswith?: string,
  committees?: string,
  previousoffices?: string,
  military?: string,

};

export type StateFacts = {
  capital?: string;
  population?: string;
  area?: string;
  statehood?: string;
  flagUrl?: string;
  sealUrl?: string;
  mapUrl?: string;
  ltgovernor?: string;
  largestcity?: string;
  legislature?: string;
  judiciary?: string;
  counties?: string;
  incomerank?: string;
  medianincome?: string;
  website?: string;
  electoral?: string;
  nickname?: string;
  
};

export type StateOfficials = {
  name: string;
  slug: string;
  abbreviation: string;
  governor: Official | null;
  senators: Official[];
  representatives: Official[];
  facts?: StateFacts;
};