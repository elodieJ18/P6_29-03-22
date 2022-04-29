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
    .save(sauces)
    .then(() => res.status(201).json({ message: "Objet enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//afficher toutes les sauces

//modifier une sauce
//Récupère une sauce unique par l'id
