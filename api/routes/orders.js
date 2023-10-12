const express = require("express");
const checkAuth = require("../middleware/check-auth");

const OrdersController = require("../controllers/orders");

const router = express.Router();

router.get("/", checkAuth, OrdersController.get_all);

router.post("/", checkAuth, OrdersController.create);

router.get("/:orderId", checkAuth, OrdersController.get);

router.delete("/:orderId", checkAuth, OrdersController.delete);

module.exports = router;
