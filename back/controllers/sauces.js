const Sauces = require("../models/Sauces");

//créer une sauce
exports.createSauces = (req, res, next) => {
  const saucesObject = JSON.parse(req.body.sauces);
  delete saucesObject._id;
  const sauces = new Sauces({
    ...saucesObject,
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
  });
  sauces
    .save()
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//afficher toutes les sauces
exports.getallSauces = (req, res, next) => {
  Sauces.find()
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(400).json({ error }));
};

//modifier une sauce
//exports.modifySauces = (req, res, next) => {};

//afficher qu'une sauce
//exports.getOneSauces = (req, res, next) => {};

//avec une inspection de l'id pour savoir si c'est bien le même user que la publication
//exports.deleteSauces = (req, res, next) => {};
