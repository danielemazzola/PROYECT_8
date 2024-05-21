const Hero = require('../models/Hero')
const { deleteImg } = require('../middleware/uploadImage')
const {
  ALL_HEROES,
  DUPLICATE,
  CREATE_HERO,
  USER_NOT_FOUND,
  UPDATE_HERO,
  DELETE,
  ERROR
} = require('./helpers/messages_texts')

const getAllHero = async (req, res) => {
  try {
    const hero = await Hero.find()
    return res.status(201).json({ message: ALL_HEROES, hero })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}
const addHero = async (req, res) => {
  try {
    const { name } = req.body
    const existHero = await Hero.findOne({ name })
    if (existHero) {
      deleteImg(req.file.path)
      return res.status(409).json({ message: DUPLICATE })
    }
    if (req.file) {
      const newHero = new Hero()
      newHero.name = req.body.name
      newHero.img = req.file.path
      await newHero.save()
      return res.status(201).json({ message: CREATE_HERO, newHero })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}
const updateHero = async (req, res) => {
  try {
    const { _id } = req.params
    const existHero = await Hero.findById(_id)
    if (!existHero) {
      deleteImg(req.file.path)
      return res.status(404).json({ message: USER_NOT_FOUND })
    }
    if (!req.file) {
      const updateHero = await Hero.findByIdAndUpdate(_id, req.body, {
        new: true
      })
      return res.status(200).json({ message: UPDATE_HERO, updateHero })
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
      return res.status(201).json({ message: UPDATE_HERO, newHero })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}
const deleteHero = async (req, res) => {
  try {
    const { _id } = req.params
    const existHero = await Hero.findById(_id)
    if (!existHero) return res.status(404).json({ message: DUPLICATE })
    deleteImg(existHero.img)
    await Hero.findByIdAndDelete(_id)
    return res.status(200).json({ message: DELETE })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

module.exports = {
  getAllHero,
  addHero,
  updateHero,
  deleteHero
}
