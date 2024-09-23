const multer = require ('multer')

const uploadMiddlewares = multer({
  dest: "uploads/"
})

uploadMiddlewares.any()

module.exports = uploadMiddlewares