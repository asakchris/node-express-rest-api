const mongoose = require("mongoose");

const Order = require("../models/order");
const Product = require("../models/product");

exports.get_all = (req, res, next) => {
  Order.find()
    .select("product quantity _id")
    .populate("product", "name price _id")
    .exec()
    .then((docs) => {
      res.status(200).json({
        count: docs.length,
        orders: docs,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.create = (req, res, next) => {
  const id = req.body.productId;
  console.log(id);
  Product.findById(id)
    .exec()
    .then((product) => {
      console.log(product);
      const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        product: req.body.productId,
        quantity: req.body.quantity,
      });
      return order
        .save()
        .then((result) => {
          res.status(201).json({
            message: "Order created",
            createdOrder: result,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: "Product not found" });
    });
};

exports.get = (req, res, next) => {
  const id = req.params.orderId;
  Order.findById(id)
    .select("product quantity _id")
    .populate("product", "name price _id")
    .exec()
    .then((doc) => {
      console.log(doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: "Order not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.delete = (req, res, next) => {
  const id = req.params.orderId;

  Order.findOneAndRemove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Order deleted",
        product: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
