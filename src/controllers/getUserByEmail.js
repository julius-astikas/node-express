import { users } from "../store/user.store.js";

export const getUserByEmail = (req, res) => {
  const { email } = req.params;
  const user = users.find((item) => item.email === email);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.status(200).json({
    data: user,
  });
};
