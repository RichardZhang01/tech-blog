const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Incredible. Good thing I don't invest into crypto."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "You have my baguette."
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "And my axe!"
    },
    {
        user_id: 5,
        post_id: 1,
        comment_text: "👀"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Really cool blog!"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: "Hey NewCoder2, welcome!"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "You have come to the right place, young one."
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "Hey, welcome."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Thanks everyone!"
    },
    {
        user_id: 5,
        post_id: 2,
        comment_text: "👋"
    },
    {
        user_id: 4,
        post_id: 3,
        comment_text: "Great tips."
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "Oh, these are awesome. Thanks!"
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "One, two, and three especially, are very important."
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "It's all about the journey. One must learn to walk, before they can run. It's daunting, and we've all been where you are. You just need to do your best, and believe in yourself!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Basically me."
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "Just know that we all support you!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Hmmm, my advice is to take a lot of time for yourself. You'll find that breaks away from coding gives your brain time to process and make new associations. Also, breaks are just great for mental health."
    },
    {
        user_id: 5,
        post_id: 4,
        comment_text: "👍"
    },
    {
        user_id: 2,
        post_id: 5,
        comment_text: "Well, I mean... true."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Whoa, inspirational."
    },
    {
        user_id: 4,
        post_id: 5,
        comment_text: "Who is this guy, exactly?"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;