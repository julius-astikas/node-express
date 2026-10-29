import { DataTypes } from "sequelize";

import sequelize from "../config/database.js";

const Card = sequelize.define(
  "Card",
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    cost: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    print: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    rulesText: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    flavorText: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    power: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    toughness: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    tableName: "t_Magic_Cards",
  },
);

export default Card;
