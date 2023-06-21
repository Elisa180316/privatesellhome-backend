const multer = require ('multer')
const uploadRoute = require ('express').Router()

const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        cb (null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb (null, req.body.filename)
    }
})

const upload = multer ({
    storage:storage
})

//UPLOAD IMAGE//

uploadRoute.post ('/image', upload.single ('image'), async (req,res) => {
    try {
        return res.status(200).json ('Image uploaded successfully')
    } catch (error) {
       console.error (error) 
    }
})

module.exports = uploadRoute