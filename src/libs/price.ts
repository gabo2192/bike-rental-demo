export const priceCalculation = (
  date: Date,
  type: "electric" | "normal" | "old",
  duration: number
): number => {
  const basePrice = date.getDate() < 15 ? 10 : 12;

  let rentalPrice = 0;
  switch (type) {
    case "electric":
      rentalPrice = basePrice * duration;
      break;
    case "normal":
      rentalPrice = basePrice * Math.min(duration, 3);
      if (duration > 3) {
        rentalPrice += (duration - 3) * basePrice;
      }
      break;
    case "old":
      rentalPrice = basePrice * Math.min(duration, 5);
      if (duration > 5) {
        rentalPrice += (duration - 5) * basePrice;
      }
      break;
    default:
      break;
  }
  return rentalPrice;
};
