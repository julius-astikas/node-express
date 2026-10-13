import { users } from "../store/user.store.js";

export const getUserByEmail = (req, res) => {
  const { email } = req.params;
  const user = users.find((item) => item.email === email);

  res.status(200).json({
    data: user,
  });
};
