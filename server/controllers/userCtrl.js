module.exports = {
  getAllUserVotes: async (req, res) => {
    const db = req.app.get('db')

    try{
      const userVotes = await db.all_user_votes()
      res.status(200).send(userVotes)
    } catch (err){
      console.log(err);
      res.status(404).send('could not find user votes')
    }
  },

  getUserVotes: async (req, res) => {
    const db = req.app.get('db')
    const {user_votes_id} = req.params

    const userVote = await db.user_votes_by_id([user_votes_id])

    if(userVote[0]){
      res.status(200).send(userVote[0])
    } else {
      res.status(404).send('user vote not found')
    }

  },
  
  addUserVote: async (req, res) => {
    const db = req.app.get('db')
    const {item_id, users_id, vote_yes} = req.body

    const newVote = await db.add_user_vote({item_id, users_id, vote_yes})
    res.status(200).send(newVote[0])
  },

  deleteUserVote: async (req, res) => {
    const db = req.app.get('db')
    const {user_votes_id} = req.params

    db.delete_user_vote(user_votes_id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send('err in delete ctrl fn'))
  }
}