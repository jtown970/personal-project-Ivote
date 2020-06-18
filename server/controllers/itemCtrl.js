module.exports = {
  addItem: async (req, res) => {
    const db = req.app.get('db')
    const {item_name} = req.body

    const newItem = await db.add_item(item_name)

    res.status(200).send(newItem[0])
  }
}