const { Post } = require('../models');

const postData = [
    {
        title: "Crypto Stolen!",
        post_content: "They're at it again. Them sneaky hackers stole another $100 million worth of crytocurrency. What can we do to safeguard our dogecoin? How much do they have to steal until the e-police say enough is enough? I say all of us on the internet unite to take down these heinous criminals. If we pool our collective abilities, the impossible becomes possible!",
        user_id: 4
    },
    {
        title: "First Post",
        post_content: "Hey guys. First post here. I just wanted to say that this blog is like, so cool man. Also, do you guys know that StackOverflow site? It's totally cool too. Anyway, just wanted to say hi, so like hi!",
        user_id: 3
    },
    {
        title: "10 Tips for New Programmers",
        post_content: "1. Ask Questions, 2. Be Inquisitive, 3. Leave Your Comfort Zone, 4. Stay as Up-to-Date as You Can, 5. Look for Open Source Projects and Try New Libraries, 6. Be Organized, 7. Keep it Simple, 8. Be Mindful of your Interpersonal Skills, 9. Work on Your Work/Life Balance, 10. Love What You do and do What You Love",
        user_id: 2

    },
    {
        title: "Question About Imposter-Syndrome",
        post_content: "Hello. Long time lurker here. I was just wondering, how do you guys deal with imposter-syndrome? I try to keep learning as much as I can, but I never seem to be able to learn enough.",
        user_id: 5
    },
    {
        title: "Programmers are basically gods",
        post_content: "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops. ― Joseph Weizenbaum",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;