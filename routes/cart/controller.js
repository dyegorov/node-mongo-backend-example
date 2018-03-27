const cartController = Cart => {
  const show = (req, res) => {
    res.send("Cart route reached");
  }
  return {show};
}

module.exports = cartController;