/*
  Rutas de productos / products
  host + /api/products
*/
const { Router } = require('express')

const { getPaginatedProducts, findProduct, filterProduct } = require('../controllers/products')
const validateParams = require('../middlewares/validateParams')

const router = Router()

router.get('/', validateParams, getPaginatedProducts)
router.get('/find/:name', validateParams, findProduct)
router.get('/filter/:category_id', validateParams, filterProduct)

module.exports = router
