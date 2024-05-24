const Hero = require('../models/Hero')
const Power = require('../models/Power')
const fusionController = async (req, res) => {
  const { hero, power } = req.body

  const existHero = await Hero.findOne({ name: hero })
  const existPower = await Power.findOne({ name: power })
  if (!existHero) return res.status(409).json('Hero no existe')
  if (!existPower) return res.status(409).json('Power no existe')
  const duplicatePower = existHero.powers.some(
    (val) => val.toString() === existPower._id.toString()
  )
  if (duplicatePower) return res.status(201).json('PODER DUPLICADO')
  const fusion = await Hero.findByIdAndUpdate(
    existHero._id,
    {
      powers: [...existHero.powers, existPower._id]
    },
    { new: true }
  )
  return res.status(201).json(fusion)
}

module.exports = { fusionController }
