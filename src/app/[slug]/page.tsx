"use client";
import { BikeForm } from "@/components/bike-form";
import bikes from "@/data/bikes";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const bike = bikes.find((bike) => bike.slug.split("/")[1] === params.slug);

  if (!bike)
    return (
      <div className="flex items-center flex-col gap-4 ">
        <p>Bike is not available please go back home</p>
        <Link
          href="/"
          className="px-4 py-2 bg-slate-600 w-max rounded-md mx-auto"
        >
          Go home
        </Link>
      </div>
    );
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src={bike.image} alt={bike.name} width={400} height={400} />
      <h2 className="text-2xl font-bold">{bike.name}</h2>
      <BikeForm bike={bike} />
    </div>
  );
};

export default Page;

export async function generateStaticParams() {
  return bikes.map((bike) => ({
    slug: bike.slug,
  }));
}
