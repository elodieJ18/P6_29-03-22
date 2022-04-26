const express = require("express");
const router = express.Router();

const saucesCtrl = require("../controllers/sauces");

//afficher toute les données de l'api
router.get("/", saucesCtrl.getallSauces);
//modification d'un produit
router.get("/:id", saucesCtrl.modifySauces);
//affichage du produit dans sa propre page
router.get("/:id", saucesCtrl.getOneSauces);
//suppression d'un produit
router.delete("/:id", saucesCtrl.deleteSauces);
//creation d'une nouvelle sauce
router.post("/", saucesCtrl.createSauces);
//like des sauces (pas encore créer)
/*router.post("/", saucesCtrl.createSauce);*/

module.exports = router;
