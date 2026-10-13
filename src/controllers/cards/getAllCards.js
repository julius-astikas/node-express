import { cards } from "../../store/cards.js";

export const getAllCards = (req, res) => {
  res.status(200).json({
    data: cards,
  });
};
