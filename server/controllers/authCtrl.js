const bcrypt = require('bcrypt')

module.exports = {
  register: async (req, res) => {
    const {user_name, password, location} = req.body
    const db = req.app.get('db')

    const existingUser = await db.check_user(user_name)

    if(existingUser[0]){
      return res.status(409).send('user already exists')
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const [newUser] = await db.register_user([user_name, hash, location ])

    req.session.user = newUser
    res.status(200).send(req.session.user)
  },

  login: async (req, res) => {
    const {user_name, password} = req.body
    const db = req.app.get('db')
    
    const existingUser = await db.get_user_by_user_name(user_name)

    if(!existingUser[0]){
      return res.status(404).send('user does not exist')
    }

    const authenticated = bcrypt.compareSync(password, existingUser[0].password)

    if(!authenticated){
      return res.status(403).send('incorrect password')
    }

    delete existingUser[0].password
    req.session.user = existingUser[0]
    res.status(200).send(req.session.user)
  },

  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },

  getUser: async (req, res) => {
    if(req.session.user){
      res.status(200).send(req.session.user)
    } else {
      res.sendStatus(404)
    }
  },
}