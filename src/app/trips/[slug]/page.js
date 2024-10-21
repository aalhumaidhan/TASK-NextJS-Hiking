import trips from "@/data/trips";
import Image from "next/image";
import { redirect } from "next/navigation";

function TripDetail({ params }) {
  const trip = trips.find((trip) => trip.slug === params.slug);

  if (!trip) redirect("/trips");

  return (
    <div className="max-w-5xl mx-auto border-gray-300 border-2 rounded-md mb-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="text-center p-8">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="w-full lg:w-2/3">
                <h2 className="text-4xl text-center font-extrabold text-secondary uppercase mb-4">
                  {trip.name}
                </h2>
                <div className="flex justify-center items-center my-8">
                  <div className="w-[30%] h-1 rounded bg-secondary"></div>
                  <div className="mx-4 text-secondary text-2xl">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="w-[30%] h-1 rounded bg-secondary"></div>
                </div>
                <Image
                  width={500}
                  height={500}
                  className="w-full h-auto rounded mb-4"
                  src={trip.img}
                  alt={trip.name}
                />
                <p className="mb-4 text-gray-700">
                  City: {trip.city}
                  <br />
                  Length: {trip.length1}Km
                  <br />
                  Rating: {trip.rating}
                  <br />
                  Difficulty: {trip.difficulty}
                  <br />
                  Details: {trip.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetail;
