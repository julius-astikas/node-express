import sequelize from "../config/database.js";

export const getAllUsers = async (req, res) => {
  try {
    const [users] = await sequelize.query("SELECT * FROM dbo.Users");
    res.status(200).json({
      data: users,
    });
  } catch (err) {
    console.error("Error fetching users:", err);
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};
