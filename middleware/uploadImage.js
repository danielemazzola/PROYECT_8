const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'DragonBall',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'webp']
  }
})

const upload = multer({ storage })

const deleteImg = (imgUrl) => {
  const imgSplit = imgUrl.split('/')
  const nameSplit = imgSplit.at(-1).split('.')[0]
  const folderSplited = imgSplit.at(-2)
  const public_id = `${folderSplited}/${nameSplit}`
  cloudinary.uploader.destroy(public_id, () => {
    console.log('Image delete in cloudinary')
  })
}

module.exports = { upload, deleteImg }
