const itemCtrl = require('./controllers/itemCtrl');

require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      authCtrl = require('./controllers/authCtrl'),
      userCtrl = require('./controllers/userCtrl'),
      houseCtrl = require('./controllers/houseCtrl'),
      mid = require('./middleware/middleware'),
      {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env,
      app = express();

app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 31}, // good for one month
  })
)


// authentication end points 
app.post(`/auth/register`, mid, authCtrl.register)
app.post(`/auth/login`, authCtrl.login)
app.delete(`/auth/logout`, authCtrl.logout)
app.get(`/auth/user`, authCtrl.getUser)

// user votes end points
app.get(`/users/votes/:id`, userCtrl.getUserVotes)
app.get(`/users/votes`, userCtrl.getAllUserVotes)
app.post(`/users/vote`, userCtrl.addUserVote)
app.delete(`/users/vote/:id`, userCtrl.deleteUserVote)

// house votes end points
app.get(`/house/votes/:id`, houseCtrl.getHouseVoteById)
app.get(`/house/votes`, houseCtrl.getAllHouseVotes)
app.post(`/house/vote`, houseCtrl.addHouseVote)

// items end points
app.post(`/items/item`, itemCtrl.addItem)

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
  console.log('db connected')
  app.listen(SERVER_PORT, () => console.log(`server is running on port ${SERVER_PORT}`))
}).catch(err => console.log('err starting db', err))
