const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_content: "Incredible. Good thing I don't invest into crypto."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_content: "You have my baguette."
    },
    {
        user_id: 3,
        post_id: 1,
        comment_content: "And my axe!"
    },
    {
        user_id: 5,
        post_id: 1,
        comment_content: "👀"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_content: "Really cool blog!"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_content: "Hey NewCoder2, welcome!"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_content: "You have come to the right place, young one."
    },
    {
        user_id: 2,
        post_id: 2,
        comment_content: "Hey, welcome."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_content: "Thanks everyone!"
    },
    {
        user_id: 5,
        post_id: 2,
        comment_content: "👋"
    },
    {
        user_id: 4,
        post_id: 3,
        comment_content: "Great tips."
    },
    {
        user_id: 3,
        post_id: 3,
        comment_content: "Oh, these are awesome. Thanks!"
    },
    {
        user_id: 1,
        post_id: 3,
        comment_content: "One, two, and three especially, are very important."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_content: "It's all about the journey. One must learn to walk, before they can run. It's daunting, and we've all been where you are. You just need to do your best, and believe in yourself!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_content: "Basically me."
    },
    {
        user_id: 2,
        post_id: 4,
        comment_content: "Just know that we all support you!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_content: "Hmmm, my advice is to take a lot of time for yourself. You'll find that breaks away from coding gives your brain time to process and make new associations. Also, breaks are just great for mental health."
    },
    {
        user_id: 5,
        post_id: 4,
        comment_content: "👍"
    },
    {
        user_id: 2,
        post_id: 5,
        comment_content: "Well, I mean... true."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_content: "Whoa, inspirational."
    },
    {
        user_id: 4,
        post_id: 5,
        comment_content: "Who is this guy, exactly?"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;