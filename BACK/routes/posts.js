const express = require('express')
const router = express.Router()
const Post = require('../models/post')


//get all Posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})



//get all post by a user
router.get('/:idUser', getPostsByUser, async (req, res) => {
    try {
        res.json(res.posts)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//get post 
router.get('/:id', getPostWithId, (req, res) => {
    res.json(res.post)
})

//update post 
router.patch('/:id', getPostWithId, async (req, res) => {
    if (req.body.title != null) {
        res.post.title = req.body.title
    }
    if (req.body.lastName != null) {
        res.post.lastName = req.body.lastName
    }
    if (req.body.comments != null) {
        res.post.comments = req.body.comments
    }
    if (req.body.description != null) {
        res.post.description = req.body.email
    }
    if (req.body.adresse != null) {
        res.post.adresse = req.body.adresse
    }
    if (req.body.image != null) {
        res.post.image = req.body.image
    }
    if (req.body.isGuarded != null) {
        res.post.isGuarded = req.body.isGuarded
    }
    try {
        const updatePost = await res.post.save()
        res.json(updatePost)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// create post 
router.post('/', async (req, res) => {
    const post = new Post({
        ...req.body,
    })
    try {
        const newPost = await post.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//delete post 
router.delete('/:id', getPostWithId, async (req, res) => {
    try {
        await res.post.remove()
        res.json({ message: 'Deleted post' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


async function getPostsByUser(req, res, next) {
    try {
        const posts = await Post.find({ idUser: req.params.idUser })
        if (posts.length === 0) {
            return res.status(404).json({ message: 'This user has no post uploaded' })
        }
        res.posts = posts
        next()
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


async function getPostWithId(req, res, next) {
    try {
        post = await Post.findOne(req.params.id)
        if (!post) {
            return res.status(404).json({ message: 'Cannot find this post' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.post = post
    next()
}

module.exports = router