const { User } = require('../models');

const userData = [
    {   
        id: 1,
        username: "SalHobgoblin",
        email: "salister@gmail.com",
        password: "salmon123"
    },
    {
        id: 2,
        username: "RudieCaloodie",
        email: "chefman@gmail.com",
        password: "rudedude1"
    },
    {
        id: 3,
        username: "NewCoder2",
        email: "codeallday@gmail.com",
        password: "password123"
    },
    {
        id: 4,
        username: "TheFirst",
        email: "secondemail@gmail.com",
        password: "thirtythree33"
    },
    {
        id: 5,
        username: "HiddenLurker",
        email: "sneakydeaky@gmail.com",
        password: "neverpost23"
    }
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;