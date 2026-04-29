export type FederalOfficial = {
    name: string;
    role: string;
    party?: string;
    image?: string;
    appointedBy?: string;
};

export const federalData = {
    executive: [
        {
            name: "Donald J. Trump;",
            role: "President",
            party: "Republican",
            image: "/images/fed/Trump.jpg",
            servedsince: "January 20, 2025 and January 21, 2017"
        },
        {
            name: "J.D. Vance",
            role: "Vice President",
            party: "Republican",
            image: "/images/fed/Vance.jpg",
            servedsince: "January 20, 2025"
        },
    ],

    cabinet: [
        {
            name: "Marco Rubio",
            role: "Secretary of State",
            image: "/images/fed/Rubio.jpg",
            servedsince: "January 21, 2025"
        },
        {
            name: "Scott Bessent",
            role: "Secretary of the Treasury",
            image: "/images/fed/bessent.jpg",
            servedsince: "January 28, 2025"
        },
        {
            name: "Pete Hegseth",
            role: "Secretary of War",
            image: "/images/fed/hegseth.jpg",
            servedsince: "January 25, 2025"
        },
        {
            name: "Pam Bondi (not in office currently)",
            role: "Attorney General",
            image: "/images/fed/bondi.jpg",
            servedsince: "February 5, 2025 – April 2, 2026"
        },
        {
            name: "Doug Burgum",
            role: "Secretary of the Interior",
            image: "/images/fed/bergum.jpg",
            servedsince: "February 1, 2025"
        },
        {
            name: "Brooke Rollins",
            role: "Secretary of Agriculture",
            image: "/images/fed/Rollins.jpg",
            servedsince: "February 13, 2025"
        },
        {
            name: "Howard Lutnick",
            role: "Secretary of Commerce",
            image: "/images/fed/lutnick.jpg",
            servedsince: "February 21, 2025"
        },
        {
            name: "Lori Chavez-DeRemer (not in office currently)",
            role: "Secretary of Labor",
            image: "/images/fed/deremer.jpg",
            servedsince: "March 11, 2025 – April 20, 2026"
        },
        {
            name: "Robert F. Kennedy Jr.",
            role: "Secretary of Health and Human Services",
            image: "/images/fed/rfkjr.jpg",
            servedsince: "February 13, 2025"
        },
        {
            name: "Scott Turner",
            role: "Secretary of Housing and Urban Development2",
            image: "/images/fed/STurner.jpg",
            servedsince: "February 5, 2025"
        },
        {
            name: "Sean Duffy",
            role: "Secretary of Transportation",
            image: "/images/fed/Duffy.jpg",
            servedsince: "January 28, 2025"
        },
        {
            name: "Chris Wright",
            role: "Secretary of Energy",
            image: "/images/fed/CWright.png",
            servedsince: "February 3, 2025"
        },
        {
            name: "Linda McMahon",
            role: "Secretary of the Education",
            image: "/images/fed/McMahon.jpg",
            servedsince: "March 3, 2025"
        },
        {
            name: "Doug Collins",
            role: "Secretary of Veterans Affairs",
            image: "/images/fed/DCollins.jpeg",
            servedsince: "February 5, 2025"
        },
        {
            name: "Markwayne Mullin ",
            role: "Secretary of the Homeland Security",
            image: "/images/fed/Mullin.jpg",
            servedsince: "March 24, 2026"
        },
    ],

    supremeCourt: [
        {
            name: "John Roberts",
            role: "Chief Justice",
            appointedBy: "George W. Bush",
            image: "/images/fed/jroberts.jpg",
            servedsince: "September 29, 2005"
        },
        {
            name: "Clarence Thomas",
            role: "Associate Justice",
            appointedBy: "George H. W. Bush",
            image: "/images/fed/cthomas.jpg",
            servedsince: "October 23, 1991"
        },
        {
            name: "Samuel Alito",
            role: "Associate Justice",
            appointedBy: "George W. Bush",
            image: "/images/fed/alito.jpg",
            servedsince: "January 31, 2006"
        },
        {
            name: "Sonia Sotomayor",
            role: "Associate Justice",
            appointedBy: "Barack Obama",
            image: "/images/fed/sotomayor.jpg",
            servedsince: "August 8, 2009"
        },
        {
            name: "Elena Kagan",
            role: "Associate Justice",
            appointedBy: "Barack Obama",
            image: "/images/fed/kagan.jpg",
            servedsince: "August 7, 2010"
        },
        {
            name: "Neil Gorsuch",
            role: "Associate Justice",
            appointedBy: "Donald Trump",
            image: "/images/fed/gorsuch.jpg",
            servedsince: "April 10, 2017"
        },
        {
            name: "Brett Cavanaugh",
            role: "Associate Justice",
            appointedBy: "Donald Trump",
            image: "/images/fed/cavanaugh.jpg",
            servedsince: "October 6, 2018"
        },
        {
            name: "Amy Coney Barrett",
            role: "Associate Justice",
            appointedBy: "Donald Trump",
            image: "/images/fed/abarrett.jpg",
            servedsince: "October 27, 2020"
        },
        {
            name: "Ketanji Brown Jackson",
            role: "Associate Justice",
            appointedBy: "Joseph Biden",
            image: "/images/fed/kjb.jpg",
            servedsince: "June 30, 2022"
        },
    ],

    congress: [
        {
            name: "Mike Johnson",
            role: "Speaker of the House",
            party: "Republican",
            image: "/images/fed/mjohnson.jpg",
            servedsince: "January 3, 2017"
        },
        {
            name: "John Thune",
            role: "Senate Majority Leader",
            party: "Republican",
            image: "/images/fed/thune.jpg",
            servedsince: "January 3, 2005"
        },
        {
            name: "Chuck Schumer",
            role: "Senate Minority Leader",
            party: "Democratic",
            image: "/images/fed/schumer.jpg",
            servedsince: "January 3, 1999"
        },
        {
            name: "Steve Scalise",
            role: "Majority Leader",
            party: "Republican",
            image: "/images/fed/scalise.jpg",
            servedsince: "May 3, 2008"
        },
        {
            name: "Hakeem Jeffries",
            role: "House Minority Leader",
            party: "Democratic",
            image: "/images/fed/jeffries.jpg",
            servedsince: "January 3, 2013"
        },
        {
            name: "Tom Emmer",
            role: "House Majority Whip",
            party: "Republican",
            image: "/images/fed/emmer.jpg",
            servedsince: "January 3, 2015"
        },
        {
            name: "Katherine Clark",
            role: "House Minority Whip",
            party: "Democratic",
            image: "/images/fed/kclark.jpg",
            servedsince: "December 10, 2013"
        },
    ],
};