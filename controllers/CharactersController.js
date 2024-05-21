const Characters = require('../models/Characters')
const { deleteImg } = require('../middleware/uploadImage')

const getAllCharacters = async (req, res) => {
  try {
    const characters = await Characters.find()
    return res.status(201).json(characters)
  } catch (error) {
    console.log(error)
  }
}
const addCharacters = async (req, res) => {
  try {
    const { name } = req.body
    const exist = await Characters.findOne({ name })
    if (exist) {
      deleteImg(req.file.path)
      return res.status(409).json('Usuario duplicado')
    }
    if (req.file) {
      const newUser = new Characters()
      newUser.name = req.body.name
      newUser.img = req.file.path
      await newUser.save()
      return res.status(201).json(newUser)
    }
  } catch (error) {
    console.log(error)
  }
}
const updateCharacters = async (req, res) => {
  try {
    const { _id } = req.params
    const exist = await Characters.findById(_id)
    if (!exist) {
      deleteImg(req.file.path)
      return res.status(404).json('No encontrado')
    }
    if (!req.file) {
      const updateUser = await Characters.findByIdAndUpdate(_id, req.body, {
        new: true
      })
      return res.status(200).json(updateUser)
    } else {
      deleteImg(exist.img)
      const newUser = await Characters.findByIdAndUpdate(
        _id,
        {
          name: req.body.name,
          img: req.file.path
        },
        {
          new: true
        }
      )
      await newUser.save()
      return res.status(201).json(newUser)
    }
  } catch (error) {
    console.log(error)
  }
}
const deleteCharacters = async (req, res) => {
  try {
    const { _id } = req.params
    const exist = await Characters.findById(_id)
    if (!exist) return res.status(404).json('No encontrado')
    deleteImg(exist.img)
    await Characters.findByIdAndDelete(_id)
    return res.status(200).json('Usuario Eliminado')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllCharacters,
  addCharacters,
  updateCharacters,
  deleteCharacters
}
