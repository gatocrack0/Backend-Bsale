const { response } = require('express')

const validateParams = (req, res = response, next) => {
  // Valores por defecto
  req.pageNumber = 1
  req.limitNumber = 8

  const { page, limit } = req.query

  if (page) {
    const pageNumber = parseInt(page)
    if (isNaN(pageNumber)) {
      res.status(400).json({
        error: {
          message: 'Page must be a number',
          code: 400
        }
      })
      return
    }
    if (pageNumber) {
      if (pageNumber < 0) {
        res.status(400).json({
          error: {
            message: 'Page must be greater than 0',
            code: 400
          }
        })
        return
      }
      req.pageNumber = pageNumber
    }
  }

  if (limit) {
    const limitNumber = parseInt(limit)
    if (isNaN(limitNumber)) {
      res.status(400).json({
        error: {
          message: 'Limit must be a number',
          code: 400
        }
      })
      return
    }
    if (limitNumber) {
      if (limitNumber < 0) {
        res.status(400).json({
          error: {
            message: 'Limit must be greater than 0',
            code: 400
          }
        })
        return
      }
      req.limitNumber = limitNumber
    }
  }
  next()
}

module.exports = validateParams
