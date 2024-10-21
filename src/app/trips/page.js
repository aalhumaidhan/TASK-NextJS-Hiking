"use client";

import trips from "@/data/trips";
import { useState } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

import SearchBar from "@/components/SearchBar";
import TripCard from "@/components/TripCard";

function TripList() {
  const [query, setQuery] = useState("");

  const activeStyle =
    "bg-slate-700 hover:bg-primarydark text-white py-5 px-6 rounded-lg text-lg mx-2 mb-2 font-black italic";
  const inactiveStyle =
    "bg-primary hover:bg-primarydark text-white  py-5 px-6 rounded-lg text-lg mx-2 mb-2";

  const searchParams = useSearchParams();
  const difficulty = searchParams.get("difficulty");

  const tripCards = trips
    .filter(
      (trip) =>
        trip.name.toLowerCase().includes(query.toLowerCase()) &&
        (trip.difficulty === difficulty || !difficulty)
    )
    .map((trip, index) => <TripCard trip={trip} key={index} />);

  return (
    <section className="py-24 bg-white" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-center uppercase text-3xl md:text-4xl font-bold text-secondary mb-0">
          Explore Trips
        </h2>
        <br />
        <SearchBar setQuery={setQuery} />
        <div className="text-center mt-10 ">
          <Link
            className={difficulty === "easy" ? activeStyle : inactiveStyle}
            href={{
              pathname: "/trips",
              query: { difficulty: "easy" },
            }}
          >
            Easy
          </Link>
          <Link
            className={difficulty === "moderate" ? activeStyle : inactiveStyle}
            href={{
              pathname: "/trips",
              query: { difficulty: "moderate" },
            }}
          >
            Moderate
          </Link>
          <Link
            className={difficulty === "hard" ? activeStyle : inactiveStyle}
            href={{
              pathname: "/trips",
              query: { difficulty: "hard" },
            }}
          >
            Hard
          </Link>
        </div>
        <div className="flex justify-center items-center my-8">
          <div className="w-[10%] h-1 rounded bg-secondary"></div>
          <div className="mx-4 text-secondary text-2xl">
            <i className="fas fa-star"></i>
          </div>
          <div className="w-[10%] h-1 rounded bg-secondary"></div>
        </div>
        <div className="flex flex-wrap mx-4 justify-center items-center">
          {tripCards}
        </div>
      </div>
    </section>
  );
}

export default TripList;
