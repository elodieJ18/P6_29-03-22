const express = require("express");

//crééer un application express

const app = express();

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

// intercepter requête post
app.post("/api/stuff", (req, res, next) => {
  //console.log(req.body); ça ne marche pas sans app.use(express.json());
  console.log(req.body);
  res.status(201).json({
    message: "Objet créée",
  });
});

// middleware objet des info d'api
app.use("/api/stuff", (req, res, next) => {
  const stuff = [
    {
      _id: "oeihfzeoi",
      title: "Mon premier objet",
      description: "Les infos de mon premier objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 4900,
      userId: "qsomihvqios",
    },
    {
      _id: "oeihfzeomoihi",
      title: "Mon deuxième objet",
      description: "Les infos de mon deuxième objet",
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
      price: 2900,
      userId: "qsomihvqios",
    },
  ];

  //Nous envoyons ensuite ces articles sous la forme de données JSON
  //avec un code 200 pour une demande réussie

  res.status(200).json(stuff);
});

// pour exporter l'application/constante pour acceder aux fichiers depuis notre server node
module.exports = app;
