const express = require("express");
const router = express.Router();
const Cart = require("../models/cart");
const User = require("../models/user");
const Icecream = require("../models/icecream");

// Route to get a user's cart
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const cart = await Cart.findOne({ user: userId }).populate("items.icecream", "name price");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

//Router to update cart according to request params
router.put("/:userId/update", async (req, res) => {
  try {
    const userId = req.params.userId;
    const updatedItems = req.body;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    for (const updatedItem of updatedItems) {
      const itemIndex = cart.items.findIndex(item => item.icecream.toString() === updatedItem.itemId);
      if (itemIndex !== -1) {
        // Update existing item
        const itemToUpdate = cart.items[itemIndex];
        const icecream = await Icecream.findById(itemToUpdate.icecream);
        if (!icecream) {
          return res.status(404).json({ message: "Ice cream not found" });
        }

        const oldQuantity = itemToUpdate.quantity;
        itemToUpdate.quantity = updatedItem.quantity;

        cart.total = cart.total - (icecream.price * oldQuantity) + (icecream.price * updatedItem.quantity);
      } else {
        // Add new item to cart
        const icecream = await Icecream.findById(updatedItem.itemId);
        if (!icecream) {
          return res.status(404).json({ message: "Ice cream not found" });
        }

        cart.items.push({ icecream: icecream._id, quantity: updatedItem.quantity });
        cart.total += icecream.price * updatedItem.quantity;
      }
    }

    await cart.save();

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;
