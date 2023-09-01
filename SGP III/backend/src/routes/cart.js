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
router.post("/:userId/update", async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(req.body);
    const updatedItems = req.body;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    for (let updatedItem of updatedItems) {
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
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/:userId/:productId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const productId = req.params.productId;
    console.log("Cart Api is Working");
    // Find the user's cart
    const cart = await Cart.findOne({ user: userId });
    // console.log(cart)
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the cart item corresponding to the productId
    // const cartItem = cart.items.find(item => item.icecream.toString() === productId);
    if (!cartItem) {
      return res.status(404).json({ message: "Product not found in cart" });
      // cart.items.push({ icecream: icecream._id, quantity: 1 });

    }

    // Find the product (icecream) corresponding to the productId
    const icecream = await Icecream.findById(productId);
    if (!icecream) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Increment the quantity of the cart item
    cartItem.quantity += 1;

    // Update the total of the cart
    const updatedTotal = cart.total + icecream.price;
    cart.total = updatedTotal;

    await cart.save();

    res.json({ message: "Product quantity incremented", cart: cart });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;
