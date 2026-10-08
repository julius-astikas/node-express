import { users } from "../store/user.store.js";

export const createUser = (req, res) => {
  const { email, username } = req.body;

  const user = {
    email,
    username,
  };

  users.push(user);

  res.status(201).json({
    message: "Created new user",
    data: user,
  });
};
