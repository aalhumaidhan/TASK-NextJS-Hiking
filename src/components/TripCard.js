import Image from "next/image";
import Link from "next/link";

function TripCard({ trip }) {
  return (
    <Link
      href={"/trips/" + trip.slug}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8"
    >
      <div className="mx-auto cursor-pointer relative overflow-hidden rounded-lg aspect-square">
        <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-200">
          <div className="text-center text-white">
            <i className="fas fa-plus text-3xl"></i>
          </div>
        </div>
        <Image
          width={800}
          height={800}
          className="w-full h-full object-cover"
          src={trip.img}
          alt={trip.name}
        />
      </div>
    </Link>
  );
}

export default TripCard;
