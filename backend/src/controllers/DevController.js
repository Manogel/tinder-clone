const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    try {
      const { username: user } = req.body;

      const userExist = await Dev.findOne({ user });

      if (userExist) {
        return res.json(userExist);
      }

      const response = await axios.get(`https://api.github.com/users/${user}`);

      const { name, bio, avatar_url: avatar } = response.data;

      const dev = await Dev.create({
        user,
        name,
        avatar,
        bio
      });
      return res.json(dev);
    } catch (e) {
      return res
        .status(500)
        .json({ error: "Erro na conexão com o banco de dados!" });
    }
  },

  async index(req, res) {
    try {
      const { user } = req.headers;
      const currentUser = await Dev.findById(user);
      const users = await Dev.find({
        $and: [
          { _id: { $ne: currentUser._id } },
          { _id: { $nin: currentUser.likes } },
          { _id: { $nin: currentUser.dislikes } }
        ]
      });
      return res.json(users);
    } catch (e) {
      return res
        .status(500)
        .json({ error: "Erro na conexão com o banco de dados!" });
    }
  }
};
