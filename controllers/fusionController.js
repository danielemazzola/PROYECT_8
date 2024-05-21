const Hero = require('../models/Hero')
const Power = require('../models/Power')
const fusionController = async (req, res) => {
  const { hero, power } = req.body

  const existHero = await Hero.find().where('name').equals(hero)
  const existPower = await Power.find().where('name').equals(power)
  if (!existHero) return res.status(409).json('Hero no existe')
  if (!existPower) return res.status(409).json('Power no existe')
  const duplicatePower = existHero[0].powers.filter(
    (val) => val.toString() === existPower[0]._id.toString()
  )
  if (duplicatePower.length) return res.status(201).json('PODER DUPLICADO')
  const fusion = await Hero.findByIdAndUpdate(
    existHero[0]._id,
    {
      powers: [...existHero[0].powers, existPower[0]._id]
    },
    { new: true }
  )
  return res.status(201).json(fusion)
}

module.exports = { fusionController }
