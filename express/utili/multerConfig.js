const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "uploades");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
const uploade = multer({ storage });
module.exports = uploade;
