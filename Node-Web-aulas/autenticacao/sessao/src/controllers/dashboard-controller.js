const users = require("../models/users")

module.exports = {
  dashboard: ( req, res) => {
    if ( !req.session.authenticated ) return res.redirect(`/`)
    
    res.render(`dashboard`, { user: req.session.currentUser })
  },

  users: ( req, res ) => {
    res.render(`users`, { users })
  }
}