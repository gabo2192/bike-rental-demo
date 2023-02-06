import Link from "next/link";

const Header = () => {
  return (
    <header className="border-gray-500 border-b py-4 lg:px-[calc(50vw-640px)] px-[5vw]">
      <Link href="/">
        <h1 className="text-2xl font-bold">Bike Rental</h1>
      </Link>
    </header>
  );
};

export default Header;
