const express = require('express')
const Comment = require('../models/comment')
const router = express.Router()

//get comment 
router.get('/:id', getComment, (req, res) => {
    res.json(res.comment)
})

//delete comment 
router.delete('/:id', getComment, async (req, res) => {
    try {
        await res.comment.remove()
        res.json({ message: 'Deleted comment' })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
})


async function getComment(req, res, next) {
    try {
        comment = await Comment.findById(req.params.id)
        if (!comment) {
            return res.status(404).json({ message : 'Cannot find this comment'})
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.comment = comment
    next()
}

module.exports = router