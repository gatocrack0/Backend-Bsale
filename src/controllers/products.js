const { request, response } = require('express')
const db = require('../database/config')
const pagination = require('../helpers/pagination')

const getPaginatedProducts = (req = request, res = response) => {
  const page = req.pageNumber
  const limit = req.limitNumber

  db.query('SELECT * FROM product', (err, products) => {
    try {
      if (err) throw err
      const paginatedProducts = pagination(products, page, limit)
      res.status(200).json({ data: paginatedProducts })
    } catch (err) {
      console.log(err)
      res.status(500).json({
        error: {
          message: err.message,
          code: 500
        }
      })
    }
  })
}

const findProduct = (req = request, res = response) => {
  const page = req.pageNumber
  const limit = req.limitNumber
  const { name: product } = req.params

  db.query(`SELECT * FROM product WHERE name LIKE '%${product}%'`, (err, products) => {
    try {
      if (err) throw err
      const paginatedProducts = pagination(products, page, limit)
      res.status(200).json({ data: paginatedProducts })
    } catch (err) {
      console.log(err)
      res.status(500).json({
        error: {
          message: err.message,
          code: 500
        }
      })
    }
  })
}

const filterProduct = (req = request, res = response) => {
  const page = req.pageNumber
  const limit = req.limitNumber
  const { category_id: categoryId } = req.params

  db.query(`SELECT P.* FROM product P JOIN category C ON (C.id = P.category) WHERE C.id = ${categoryId}`, (err, products) => {
    try {
      if (err) throw err
      const paginatedProducts = pagination(products, page, limit)
      res.status(200).json({ data: paginatedProducts })
    } catch (err) {
      console.log(err)
      res.status(500).json({
        error: {
          message: err.message,
          code: 500
        }
      })
    }
  })
}

module.exports = {
  getPaginatedProducts,
  findProduct,
  filterProduct
}
