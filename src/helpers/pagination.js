const pagination = (products, page, limit) => {
  const data = {}
  const totalProducts = products.length
  const totalPages = Math.ceil(totalProducts / limit)

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  data.products = products.slice(startIndex, endIndex)
  data.page = page
  data.limit = limit
  data.totalResults = totalProducts

  totalProducts === undefined || totalProducts === 0
    ? data.totalPages = 0
    : data.totalPages = totalPages

  return data
}

module.exports = pagination
