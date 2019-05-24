const Music = require('../models/music');
const errorHandler = require('../routes/utils/errorHandler');

module.exports.add = async (req, res) => {
  console.log('req.body', req.body);
  const music = new Music({
    value: req.body.value,
    email: req.body.email
  });
  try {
    await music.save();
    res.status(201).json(music)
  } catch (e) {
    errorHandler(res, e)
  }
};
module.exports.getAll = async (req, res) => {
  //email password
  const candidate = await Music.find({
    email: req.body.email
  });
  if (candidate) {
    res.status(201).json(candidate)
  }
};

module.exports.update = async (req, res) => {
  //email password
  console.log('req.body', req.body);
  const music = new Music({
    value: req.body.value,
    email: req.body.email
  });
  try {
    await music.save();
    res.status(201).json(music)
  } catch (e) {
    errorHandler(res, e)
  }

};