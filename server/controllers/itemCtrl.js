module.exports = {
  addItem: async (req, res) => {
    const db = req.app.get('db')
    const {item_name, description} = req.body

    const newItem = await db.add_item(item_name, description)

    res.status(200).send(newItem[0])
  },

  allItems: async (req, res) => {
    const db = req.app.get('db')

    try{
      const items = await db.all_items()
      res.status(200).send(items)
    } catch (err){
      res.status(404).send('could not find items')
    }
  }
}