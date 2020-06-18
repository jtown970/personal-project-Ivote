module.exports = {
  getAllHouseVotes: async (req, res) => {
    const db = req.app.get('db')

    try{
      const houseVotes = await db.all_house_votes()
      res.status(200).send(houseVotes)
    } catch (err){
      console.log(err)
      res.status(500).send('could not get house votes')
    }
  },

  getHouseVoteById: async (req, res) => {
    const db = req.app.get('db')
    const {house_votes_id} = req.params

    const houseVote = await db.house_vote_by_id([house_votes_id])

    if(houseVote[0]){
      res.status(200).send(houseVote[0])
    } else {
      
      res.status(404).send('could not find house vote')
    }
  },

  addHouseVote: async (req, res) => {
    const db = req.app.get('db')
    const {item_id, rep_name, location, voted_yes, passed} = req.body

    const newVote = await db.add_house_vote({item_id, rep_name, location, voted_yes, passed})

    res.status(200).send(newVote[0])
  },
  
}