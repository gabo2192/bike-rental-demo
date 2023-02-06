import dateParser from "@/libs/date";
import { priceCalculation } from "@/libs/price";
import { Bike } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment, useState } from "react";
interface BikeFromProps {
  bike: Bike;
}

const BikeForm: React.FC<BikeFromProps> = ({ bike }) => {
  const [days, setDays] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setPrice(priceCalculation(startDate, bike.type, days));
    setIsOpen(true);
  };

  const handleModalSubmit = () => {
    localStorage.setItem("reserved", JSON.stringify(bike));
    setSubmitted(true);
  };

  return (
    <>
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
        <label
          htmlFor="telephone"
          className="flex justify-between items-center"
        >
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

        <label
          htmlFor="telephone"
          className="flex justify-between items-center"
        >
          Date:
          <input
            type="date"
            id="date"
            name="date"
            value={dateParser(startDate)}
            onChange={(e) => setStartDate(new Date(e.target.value))}
            required
            className="ml-2 bg-gray-900 border border-gray-500 px-4 py-2 rounded-md min-w-[256px]"
          />
        </label>
        <label
          htmlFor="telephone"
          className="flex justify-between items-center"
        >
          Days:
          <input
            type="number"
            id="duration"
            name="duration"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            required
            className="ml-2 bg-gray-900 border border-gray-500 px-4 py-2 rounded-md min-w-[256px]"
          />
        </label>
        <button
          className="px-4 py-2 bg-slate-600 w-max rounded-md mx-auto"
          type="submit"
        >
          Reserve now
        </button>
      </form>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                {isSubmitted ? (
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6"
                    >
                      Thank you for your reservation
                    </Dialog.Title>

                    <div className="flex mt-2 gap-4">
                      <Link
                        className="px-4 py-2 bg-slate-600 w-max rounded-md "
                        href="/"
                      >
                        Go back home
                      </Link>
                    </div>
                  </Dialog.Panel>
                ) : (
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-medium leading-6"
                    >
                      Reverse now!
                    </Dialog.Title>
                    <div className="mt-2">
                      <Dialog.Description>
                        You are about to reserve one {bike.name} for{" "}
                        <strong className="text-xl">${price}.00</strong>
                      </Dialog.Description>
                    </div>
                    <div className="flex mt-2 gap-4">
                      <button
                        className="px-4 py-2 bg-slate-600 w-max rounded-md "
                        onClick={() => handleModalSubmit()}
                      >
                        Reserve
                      </button>
                      <button
                        className="px-4 py-2 bg-slate-700 w-max rounded-md "
                        onClick={() => setIsOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                )}
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BikeForm;
