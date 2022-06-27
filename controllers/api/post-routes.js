const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/withAuth');

router.post('/', withAuth, async (req, res) => {
    
    try {
        const createPost = await Post.create({
        title: req.body.title,
        post_content: req.body.post_content,
        user_id: req.session.user_id
        })

        res.status(200).json({ 
            message: "Successfully created post",
            data: createPost
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ 
            message: "Internal server error",
            error: err 
        });
    };
});

module.exports = router;