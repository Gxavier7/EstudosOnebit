const users = [
  { id: '1', name: 'Gabriel', email: 'gabriel@email.com', password: '123456', role: 'admin' },
  { id: '2', name: 'Isaac', email: 'isaac@email.com', password: '123456', role: 'standard' }
]

module.exports = {
  findAll: () => users,

  findById: ( id ) => users.find( user => user.id === id ),
  
  findByEmail: ( email ) => users.find( user => user.email === email ),

  registerUser: ( name, email, password, role = `standard` ) => {
    const userAlreadyRegistered = users.find( user => user.email === email )

    if ( userAlreadyRegistered ) return null

    const newUser = {
      id: Math.floor(Math.random() * 9999999999).tiString(),
      name,
      email,
      password,
      role
    }

    users.push(newUser)
    return newUser
  },

  deleteUser: (id) => {
    const userIndex = users.findIndex(user => user.id === id)

    if ( userIndex === -1) return null

    const [deletedUser] = users.splice(userIndex, 1)

    return deletedUser
  }
}