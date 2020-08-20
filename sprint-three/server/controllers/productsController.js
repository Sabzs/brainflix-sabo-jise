// load model
const products = require('../models/productsModel');

// get product array
function listProducts(_req, res) {
  res.json(products.list());
}

// get product by id
function getProductByID(req, res) {
  res.json(products.getByID(req.params.id));
}

// post new product
function addProduct(req, res) {
  console.log(req.body);
  if (!req.body.name || !req.body.price) {
    res.status(400).json({
      error: 'POST body must contain all requiredProperties',
      requiredProperties: ['name', 'price'],
    });
  }
  res.json(products.add(req.body));
}

// delete product
function deleteProduct(req, res) {
  res.json(products.deleteProduct(req.params.id));
}

// update product, pass id and body
function updateProduct(req, res) {
  res.json(products.updateProduct(req.params.id, req.body));
}

// export functions
module.exports = {
  listProducts,
  addProduct,
  getProductByID,
  deleteProduct,
  updateProduct,
};


// i think products here could be "videos"? //