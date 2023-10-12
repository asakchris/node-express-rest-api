const express = require("express");
const multer = require("multer");
const checkAuth = require("../middleware/check-auth");

const moment = require("moment/moment");

const ProductsController = require("../controllers/products");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, moment().format("YYYY-MM-DD-H-mm-ss") + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});

router.get("/", ProductsController.get_all);

router.post(
  "/",
  checkAuth,
  upload.single("productImage"),
  ProductsController.create
);

router.get("/:productId", ProductsController.get);

router.patch("/:productId", checkAuth, ProductsController.update);

router.delete("/:productId", checkAuth, ProductsController.delete);

module.exports = router;
