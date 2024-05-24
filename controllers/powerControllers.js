const Power = require('../models/Power')
const {
  ALL_POWERS,
  ERROR,
  DUPLICATE_POWER,
  CREATE_POWER,
  POWER_NOT_FOUND,
  UPDATE_POWER,
  DELETE_POWER
} = require('../helpers/messages_texts')
const { deleteImg } = require('../middleware/uploadImage')

const getAllPower = async (req, res) => {
  try {
    const power = await Power.find()
    return res.status(201).json({ message: ALL_POWERS, power })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}
const addPower = async (req, res) => {
  try {
    const { name } = req.body
    const existPower = await Power.findOne({ name })
    if (existPower) {
      deleteImg(req.file.path)
      return res.status(409).json({ message: DUPLICATE_POWER })
    }
    if (req.file) {
      const newPower = new Power(req.body)
      newPower.img = req.file.path
      await newPower.save()
      return res.status(201).json({ message: CREATE_POWER, newPower })
    } else {
      const newPower = new Power(req.body)
      await newPower.save()
      return res.status(201).json({ message: CREATE_POWER, newPower })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}
const updatePower = async (req, res) => {
  try {
    const { _id } = req.params
    const existPower = await Power.findById(_id)
    if (!existPower) {
      deleteImg(req.file.path)
      return res.status(404).json({ message: POWER_NOT_FOUND })
    }
    if (!req.file) {
      const updatePower = await Power.findByIdAndUpdate(_id, req.body, {
        new: true
      })
      return res.status(200).json({ message: UPDATE_POWER, updatePower })
    } else {
      deleteImg(existPower.img)
      const updatePower = await Power.findByIdAndUpdate(
        _id,
        {
          name: req.body.name,
          img: req.file.path
        },
        {
          new: true
        }
      )
      return res.status(200).json({ message: UPDATE_POWER, updatePower })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}
const deletePower = async (req, res) => {
  try {
    const { _id } = req.params
    const existPower = await Power.findById(_id)
    if (!existPower) return res.status(404).json({ message: POWER_NOT_FOUND })
    deleteImg(existPower.img)
    await Power.findByIdAndDelete(_id)
    return res.status(200).json({ message: DELETE_POWER })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR })
  }
}

module.exports = {
  getAllPower,
  addPower,
  updatePower,
  deletePower
}
