const jwt = require(`jsonwebtoken`)
const { JWT_SECRET } = require("../config/environment")
const users = require("../models/users")

module.exports = {
  optionalAuth: ( req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      next()
    } else {
      const token = authHeader.split(` `)[1]

      try {
        const { id } = jwt.verify(token, JWT_SECRET)
        req.authenticatedUser = users.findById(id)

        next()
      } catch (error) {
        return res.status(401).json({ message: `Invalid Token!` })
      }
    }
  },

  ensureAuth: ( req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) return res.status(401).json({ message: `Authorization header required!` })

    const token = authHeader.split(` `)[1]

    try {
      const { id } = jwt.verify(token, JWT_SECRET)
      req.authenticatedUser = users.findById(id)

      next()
    } catch (error) {
      return res.status(401).json({ message: `Invalid Token!` })
    }
  },

  ensureAdmin: ( req, res, next) => {
    if (req.authenticatedUser?.role === "admin") {
      next() 
    } else {
      res.status(403).json({ message: `Permission Denied` })
    }
  },
}