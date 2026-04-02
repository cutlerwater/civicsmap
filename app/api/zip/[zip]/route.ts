import { NextResponse } from "next/server";

type ZippopotamPlace = {
  "place name": string;
  state: string;
  "state abbreviation": string;
};

type ZippopotamResponse = {
  "post code": string;
  country: string;
  "country abbreviation": string;
  places: ZippopotamPlace[];
};

function slugifyStateName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ zip: string }> }
) {
  const { zip } = await context.params;

  if (!/^\d{5}$/.test(zip)) {
    return NextResponse.json(
      { error: "Please enter a valid 5-digit ZIP code." },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`https://api.zippopotam.us/us/${zip}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "ZIP code not found." },
        { status: 404 }
      );
    }

    const data = (await res.json()) as ZippopotamResponse;
    const firstPlace = data.places?.[0];

    if (!firstPlace?.state) {
      return NextResponse.json(
        { error: "No state found for that ZIP code." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      zip,
      city: firstPlace["place name"],
      state: firstPlace.state,
      stateAbbr: firstPlace["state abbreviation"],
      slug: slugifyStateName(firstPlace.state),
    });
  } catch {
    return NextResponse.json(
      { error: "Lookup failed. Please try again." },
      { status: 500 }
    );
  }
}