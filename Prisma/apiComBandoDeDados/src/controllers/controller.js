const Product = require("../models/Product")

const productsController = {
  // GET /products
  index: async (req, res) => {
    const products = await Product.findAll()
    res.json(products)
  },

  // POST /products
  create: async (req, res) => {
    const newProduct = await Product.findAlcreate(req.body)
    res.status(201).json(newProduct)
  },

  // GET /products/:id
  show: async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.json(product)
  },

  // PUT /products/:id
  update: async (req, res) => {
    const updatedProduct = await Product.update(req.params.id, req.body)
    res.json(updatedProduct)
  },

  // DELETE /products/:id
  delete: async (req, res) => {
    const result = await Product.delete(req.params.id)
    res.json(result)
  }
}

module.exports = productsController