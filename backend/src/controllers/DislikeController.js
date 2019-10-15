const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    const { devId: idTargetDev } = req.params;
    const { user: idCurrentDev } = req.headers;

    const currentDev = await Dev.findById(idCurrentDev);
    const targetDev = await Dev.findById(idTargetDev);

    if (!targetDev) {
      return res.status(400).json({ error: "Dev is not exists!" });
    }

    currentDev.dislikes.push(targetDev._id);
    await currentDev.save();

    return res.json(currentDev);
  }
};
