const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const createStorage = (folderName) => {
  return new CloudinaryStorage({
    cloudinary,
    params: async (req, res) => {
      return {
        folder: folderName,
        allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
      }
    }
  })
}

const uploadFolder = (folderName) => {
  const storage = createStorage(folderName)
  return multer({ storage })
}
const uploadHero = uploadFolder('Hero')
const uploadPower = uploadFolder('Power')

const deleteImg = (imgUrl) => {
  const imgSplit = imgUrl.split('/')
  const nameSplit = imgSplit.at(-1).split('.')[0]
  const folderSplited = imgSplit.at(-2)
  const public_id = `${folderSplited}/${nameSplit}`
  console.log('Attempting to delete image with public_id:', public_id)
  cloudinary.uploader.destroy(public_id, (error, result) => {
    if (error) {
      console.error('Error deleting image:', error)
    } else {
      console.log('Image deleted successfully:', result)
    }
  })
}

module.exports = { uploadPower, uploadHero, deleteImg }
