const Hero = require('../models/Hero')
const { deleteImg } = require('../middleware/uploadImage')

const getAllHero = async (req, res) => {
  try {
    const hero = await Hero.find()
    return res.status(201).json(hero)
  } catch (error) {
    console.log(error)
  }
}
const addHero = async (req, res) => {
  try {
    const { name } = req.body
    const existHero = await Hero.findOne({ name })
    if (existHero) {
      deleteImg(req.file.path)
      return res.status(409).json('Usuario duplicado')
    }
    if (req.file) {
      const newHero = new Hero()
      newHero.name = req.body.name
      newHero.img = req.file.path
      await newHero.save()
      return res.status(201).json(newHero)
    }
  } catch (error) {
    console.log(error)
  }
}
const updateHero = async (req, res) => {
  try {
    const { _id } = req.params
    const existHero = await Hero.findById(_id)
    if (!existHero) {
      deleteImg(req.file.path)
      return res.status(404).json('No encontrado')
    }
    if (!req.file) {
      const updateHero = await Hero.findByIdAndUpdate(_id, req.body, {
        new: true
      })
      return res.status(200).json(updateHero)
    } else {
      deleteImg(existHero.img)
      const newHero = await Hero.findByIdAndUpdate(
        _id,
        {
          name: req.body.name,
          img: req.file.path
        },
        {
          new: true
        }
      )
      await newHero.save()
      return res.status(201).json(newHero)
    }
  } catch (error) {
    console.log(error)
  }
}
const deleteHero = async (req, res) => {
  try {
    const { _id } = req.params
    const existHero = await Hero.findById(_id)
    if (!existHero) return res.status(404).json('No encontrado')
    deleteImg(existHero.img)
    await Hero.findByIdAndDelete(_id)
    return res.status(200).json('Usuario Eliminado')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllHero,
  addHero,
  updateHero,
  deleteHero
}
