export type Bill = {
    id: string;
    title: string;
    sponsor: string;
    party: string;
    status: string;
    topic: string;
    introducedDate: string;
};

export const bills: Bill[] = [
    {
        id: "HR-1234",
        title: "Affordable Housing Expansion Act",
        sponsor: "Alexandria Ocasio-Cortez",
        party: "Democratic",
        status: "Introduced",
        topic: "Housing",
        introducedDate: "2025-01-12",
    },
    {
        id: "S-567",
        title: "Border Security Enhancement Act",
        sponsor: "Ted Cruz",
        party: "Republican",
        status: "In Committee",
        topic: "Immigration",
        introducedDate: "2025-02-03",
    },
    {
        id: "HR-222",
        title: "Clean Energy Investment Act",
        sponsor: "Gavin Newsom",
        party: "Democratic",
        status: "Passed House",
        topic: "Energy",
        introducedDate: "2025-01-28",
    },
    {
        id: "S-890",
        title: "National Defense Funding Act",
        sponsor: "Lindsey Graham",
        party: "Republican",
        status: "Passed Senate",
        topic: "Defense",
        introducedDate: "2025-01-05",
    },
    {
        id: "HR-999",
        title: "Healthcare Cost Reduction Act",
        sponsor: "Elizabeth Warren",
        party: "Democratic",
        status: "Signed Into Law",
        topic: "Healthcare",
        introducedDate: "2024-12-10",
    },
];