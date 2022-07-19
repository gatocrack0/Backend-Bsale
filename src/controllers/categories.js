const { request, response } = require('express')
const db = require('../database/config')

const getCategories = (req = request, res = response) => {
  db.query('SELECT * FROM category', (err, categories) => {
    try {
      if (err) throw err
      const data = {}
      data.categories = categories
      res.status(200).json({ data })
    } catch (err) {
      console.log(err)
      res.status(500).json({ error: err.message })
    }
  })
}

module.exports = getCategories
