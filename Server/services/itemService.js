const Fondation = require("../models/Fondation");
const User = require("../models/User");


async function getAll() {
  return Fondation.find({});
}

async function getByUserId(userId) {
  return Fondation.find({ _ownerId: userId });
}

async function getById(id) {
  return Fondation.findById(id);
}

async function create(fondation) {
  return Fondation.create(fondation);
}

async function update(id, fondation) {
  const existing = await Fondation.findById(id);

  existing.title = fondation.title;
  existing.description = fondation.description;
  existing.location = fondation.location;
  existing.img = fondation.img;

  return existing.save();
}

async function deleteById(id) {
  return Fondation.findByIdAndDelete(id);
}

async function donate(fondationId, userId) {
  return User.updateOne({ _id: userId }, { $addToSet: { donations: fondationId } })
}

module.exports = {
  getAll,
  getByUserId,
  getById,
  create,
  update,
  deleteById,
  donate
};
