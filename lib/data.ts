import { StateOfficials } from "@/lib/types";

export const stateOfficials: Record<string, StateOfficials> = {
  maryland: {
    name: "Delaware",
    slug: "Delaware",
    abbreviation: "DE",
    governor: {
      id: "de-governor",
      name: "Governor Matt Meyer",
      title: "Governor",
      state: "Delaware",
      stateSlug: "delaware",
      chamber: "executive",
      party: "Democratic",
      website: "https://governor.delaware.gov/",
      contactUrl: "https://governor.delaware.gov/contact-us/",
      photoUrl: "",
    },
    senators: [
      {
        id: "de-sen-1",
        name: "Christopher Coons",
        title: "U.S. Senator",
        state: "Delaware",
        stateSlug: "delaware",
        chamber: "senate",
        party: "Democratic",
        website: "https://www.coons.senate.gov/",
        contactUrl: "https://www.coons.senate.gov/contact/email",
        photoUrl: "",
      },
      {
        id: "de-sen-2",
        name: "Lisa Blunt Rochester",
        title: "U.S. Senator",
        state: "Delaware",
        stateSlug: "delaware",
        chamber: "senate",
        party: "Democratic",
        website: "https://www.bluntrochester.senate.gov/",
        contactUrl: "https://www.rochester.senate.gov/contact/",
        photoUrl: "",
      },
    ],
    representatives: [
      {
        id: "de-rep-1",
        name: "Sarah McBride",
        title: "U.S. Representative",
        state: "Delaware",
        stateSlug: "delaware",
        chamber: "house",
        district: "1st District",
        party: "Democratic",
        website: "https://mcbride.house.gov/",
        contactUrl: "https://mcbride.house.gov/contact",
        photoUrl: "",
      },
      
    ],
  },
};