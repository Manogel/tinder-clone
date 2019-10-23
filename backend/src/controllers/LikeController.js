const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    /* try {
      const { devId: idTargetDev } = req.params;
      const { user: idCurrentDev } = req.headers;

      const currentDev = await Dev.findById(idCurrentDev);
      const targetDev = await Dev.findById(idTargetDev);

      currentDev.likes.push(targetDev._id);
      await currentDev.save();

      return res.json(currentDev);
    } catch (e) {
      return res.status(400).json({ error: "Dev is not exists!" });
    } */
    const { devId: idTargetDev } = req.params;
    const { user: idCurrentDev } = req.headers;

    const currentDev = await Dev.findById(idCurrentDev);
    const targetDev = await Dev.findById(idTargetDev);

    if (!targetDev) {
      return res.status(400).json({ error: "Dev is not exists!" });
    }

    if (targetDev.likes.includes(currentDev._id)) {
      const currentSocket = req.conectedUsers[idCurrentDev];
      const targetSocket = req.conectedUsers[idTargetDev];

      console.log(currentSocket, targetSocket )

      if(currentSocket){
        req.io.to(currentSocket).emit('match', targetDev)
      }

      if(targetSocket){
        req.io.to(targetSocket).emit('match', currentDev)
      }

    }

    currentDev.likes.push(targetDev._id);
    await currentDev.save();

    return res.json(currentDev);
  }
};
