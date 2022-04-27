const express = require("express");
//crééer un application express
const mongoose = require("mongoose");

const path = require("path");

const app = express();
//import des routes
const authRoutes = require("./routes/user");
const saucesRoutes = require("./routes/sauces");

mongoose
  .connect(
    "mongodb+srv://elody18:BISqUQGEeeNgubM9@cluster0.wsjqa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//intercepter toute requête d'un contenttype.json
app.use(express.json());

// middlewear general qui s'applique à toute les roots
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Gestion de la ressource image de façon statique
app.use("/images", express.static(path.join(__dirname, "images")));

//routes
app.use("/api/auth", authRoutes);
app.use("/api/sauces", saucesRoutes);

// pour exporter l'application/constante pour acceder aux fichiers depuis notre server node
module.exports = app;
