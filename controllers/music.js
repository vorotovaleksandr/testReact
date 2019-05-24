const Music = require('../models/music');
const errorHandler = require('../routes/utils/errorHandler');

module.exports.add = async (req, res) => {
  console.log('req.body', req.body);
  const music = new Music({
    value: req.body.value,
  });
  try {
    await music.save();
    res.status(201).json(music)
  } catch (e) {
    errorHandler(res, e)
  }
};
module.exports.register = async (req, res) => {
  //email password
  const candidate = await User.findOne({
    email: req.body.email
  });
  if (candidate) {
    //user use again
    res.status(409).json({
      message: 'such an email is already taken'
    })
  } else {
    // created use
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      await user.save();
      res.status(201).json(user)
    } catch (e) {
      errorHandler(res, e)
    }
  }
};
module.exports.get = async (req, res) => {
  //email password
  const candidate = await User.findOne({
    email: req.body.email
  });
  if (candidate) {
    res.status(201).json(candidate)
  }
};
module.exports.update = async (req, res) => {
  //email password
  const updated = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const todo = await User.findOneAndUpdate({
      email: req.body.defEmail,
    }, {
      $set: updated
    });
    res.status(200).json(todo)
  } catch (e) {
    errorHandler(res, e)
  }

};