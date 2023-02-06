import { Bike } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface BikeListProps {
  bikes: Bike[];
}

const BikeList: React.FC<BikeListProps> = ({ bikes }) => {
  return (
    <ul className="gap-4 grid grid-cols-1 md:grid-cols-3">
      {bikes.map((bike) => (
        <li key={bike.name}>
          <Link href={`${bike.slug}`}>
            <>
              <Image
                src={bike.image}
                alt={bike.name}
                width={400}
                height={400}
              />
              <strong className="text-xl">{bike.name}</strong>
              <br />
              <em>Type: {bike.type}</em>
            </>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BikeList;
