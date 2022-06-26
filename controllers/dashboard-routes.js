const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/withAuth');

router.get('/', withAuth, async (req, res) => {
    console.log(req.session);
    try {
        const dbPostData = await Post.findAll({
            attributes: [
                'id',
                'title',
                'post_content',
                'created_at'
            ],
            include: [
                {
                    model: Comment,
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        });

        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
        
    } catch (err) {

        console.log(err);
        res.status(500).json(err);

    };
});

module.exports = router;