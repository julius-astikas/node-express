import sequelize from "../config/database.js";

export const createUser = async (req, res) => {
  try {
    const { email, username } = req.body;

    if (!email || !username) {
      return res.status(400).json({
        message: "Invalid email or username",
      });
    }

    await sequelize.query(
      `INSERT INTO Users (username, email, createdAt)
   VALUES (:username, :email, GETDATE())`,
      {
        replacements: {
          username,
          email,
        },
      },
    );

    res.status(201).json({
      message: "Created new user successfully in Database!",
      data: { email, username },
    });
  } catch (err) {
    console.error("Error creating user:", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};
