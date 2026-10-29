import Card from "../../models/Cards.js";

export const addCard = async (req, res) => {
  try {
    // Check if an array of cards is sent (bulk insert)
    if (Array.isArray(req.body)) {
      const cards = await Card.bulkCreate(req.body);
      return res.status(201).json({
        message: `${cards.length} cards created successfully!`,
        data: cards,
      });
    }

    // If a single card object is sent
    const { name, cost, type, print, rulesText, flavorText, power, toughness } =
      req.body;

    const newCard = await Card.create({
      name,
      cost,
      type,
      print,
      rulesText,
      flavorText,
      power,
      toughness,
    });

    return res.status(201).json({
      message: "Card created successfully!",
      data: newCard,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to create card(s)",
      details: error.message,
    });
  }
};
