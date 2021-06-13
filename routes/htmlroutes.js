const path = require('path')
const router = require('express').Router()

router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../Public/notes.html'))
}  ) 
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../Public/index.html'))
}  ) 
module.exports = router;