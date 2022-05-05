const express = require("express");
const router = express.Router();

const saucesCtrl = require("../controllers/sauces");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

//creation d'une nouvelle sauce
router.post("/", auth, multer, saucesCtrl.createSauces);
//afficher toutes les sauces
router.get("/", auth, saucesCtrl.getallSauces);
//modification d'un produit
router.put("/:id", auth, multer, saucesCtrl.modifySauces);
//affichage du produit dans sa propre page
router.get("/:id", auth, saucesCtrl.getOneSauces);
//suppression d'un produit
router.delete("/:id", auth, saucesCtrl.deleteSauces);

//like des sauces (pas encore créer)
router.post("/:id/like", auth, saucesCtrl.likeSauce);

module.exports = router;
