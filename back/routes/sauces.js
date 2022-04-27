const express = require("express");
const router = express.Router();

const saucesCtrl = require("../controllers/sauces");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

//creation d'une nouvelle sauce
router.post("/", auth, multer, saucesCtrl.createSauces);
//modification d'un produit
router.put("/:id", auth, saucesCtrl.modifySauces);
//afficher toutes les sauces
router.get("/", auth, saucesCtrl.getallSauces);
//suppression d'un produit
//router.delete("/:id", auth, saucesCtrl.deleteSauces);
//affichage du produit dans sa propre page
//router.get("/:id", auth, saucesCtrl.getOneSauces);
//like des sauces (pas encore créer)

module.exports = router;
