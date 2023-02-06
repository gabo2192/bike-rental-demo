import dateParser from "@/libs/date";
import { priceCalculation } from "@/libs/price";
import { Bike } from "@/types";
import { ChangeEvent, useState } from "react";

interface BikeFromProps {
  bike: Bike;
}

interface FormData {
  name: string;
  email: string;
  telephone: string;
  startDate: string;
  duration: number;
}

const BikeForm: React.FC<BikeFromProps> = ({ bike }) => {
  const [days, setDays] = useState(1);
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [price, setPrice] = useState(
    priceCalculation(new Date(), bike.type, 1)
  );

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  console.log({ price });

  const handleChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "duration") {
      setDays(Number(value));
      setPrice(priceCalculation(startDate, bike.type, Number(value)));
    }
    if (name === "date") {
      setStartDate(new Date(value));
      setPrice(priceCalculation(new Date(value), bike.type, days));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="name" className="flex justify-between items-center">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Jhon Doe"
          className=" bg-gray-900 border border-gray-500 px-4 py-2 rounded-md"
        />
      </label>
      <label htmlFor="email" className="flex justify-between items-center">
        Email:
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="jhon.doe@gmail.com"
          className="self-end bg-gray-900 border border-gray-500 px-4 py-2 rounded-md"
        />
      </label>
      <label htmlFor="telephone" className="flex justify-between items-center">
        Phone:
        <input
          type="phone"
          id="telephone"
          name="telephone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="+51929111222"
          className="ml-2 bg-gray-900 border border-gray-500 px-4 py-2 rounded-md"
        />
      </label>

      <label htmlFor="telephone" className="flex justify-between items-center">
        Date:
        <input
          type="date"
          id="date"
          name="date"
          value={dateParser(startDate)}
          onChange={handleChangeDate}
          required
          className="ml-2 bg-gray-900 border border-gray-500 px-4 py-2 rounded-md min-w-[256px]"
        />
      </label>
      <label htmlFor="telephone" className="flex justify-between items-center">
        Days:
        <input
          type="number"
          id="duration"
          name="duration"
          value={days}
          onChange={handleChangeDate}
          required
          className="ml-2 bg-gray-900 border border-gray-500 px-4 py-2 rounded-md min-w-[256px]"
        />
      </label>
      <button
        className="px-4 py-2 bg-slate-600 w-max rounded-md mx-auto"
        type="submit"
      >
        Reserve for ${price}
      </button>
    </form>
  );
};

export default BikeForm;
