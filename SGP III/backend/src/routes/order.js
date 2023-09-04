const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const User = require("../models/user");
const Cart = require("../models/cart"); // Assuming you have a Cart model

// Route to place an order
router.post("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const newOrder = new Order({
      user: userId,
      cart: cart._id,
      total: cart.total.toFixed(2),
      orderPlaced: true,
      orderDelivered: false, // Set initial status to not delivered
    });

    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Route to update the orderPlaced field when the order is placed
router.put("/:orderId", async (req, res) => {
    try {
      const orderId = req.params.orderId;
  
      const order = await Order.findById(orderId);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
  
      // Update the orderPlaced field to true
      order.orderDelivered = true;
      order.total=order.total.toFixed(2);
      await order.save();

      const userId = order.user; 
      const cart = await Cart.findOne({ user: userId });
      console.log(cart);
      if (cart) {
        cart.items = [];
        cart.total = 0;
        console.log("Cart cleared");
        await cart.save();
        
      }

      res.json({ message: "Order marked as Delivered", order: order });
      
    } catch (err) {
      res.status(500).json({ message: "Server Error" });
    }
  });

module.exports = router;
