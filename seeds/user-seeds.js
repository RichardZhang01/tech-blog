const { User } = require('../models');

const userData = [
    {
        username: "SalHobgoblin",
        email: "salister@gmail.com",
        password: "salmon123"
    },
    {
        username: "RudieCaloodie",
        email: "chefman@gmail.com",
        password: "rudedude1"
    },
    {
        username: "NewCoder2",
        email: "codeallday@gmail.com",
        password: "password123"
    },
    {
        username: "TheFirst",
        email: "secondemail@gmail.com",
        password: "thirtythree33"
    },
    {
        username: "HiddenLurker",
        email: "sneakydeaky@gmail.com",
        password: "neverpost23"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;