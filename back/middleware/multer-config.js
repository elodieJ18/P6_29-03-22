const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

//diskStorage()  configure le chemin et le nom de fichier pour les fichiers entrants.
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    //le nom generer en enlevant les espaces
    const name = file.originalname.split(" ").join("_");
    //extension rajouter pour rendre le fichier plus unique
    const extension = MIME_TYPES[file.mimetype];
    //callback: création du fichier en entier
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("image");
