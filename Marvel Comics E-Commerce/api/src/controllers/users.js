const { User, Role, Review, Order} = require("../db");
const bcrypt = require('bcrypt');

const getUsers = async (req, res) => {
    
    try {
        const users = await User.findAll({
            include:[Role,Review,Order]
            });
        return res.json(users);
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const getUserByEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const user = await User.findOne({ where: { email }, include: [
            {
                model: Role,
                through: {
                    attributes:[]
                }
            },
            
            {model:Review},

            { model:Order,}

        ]} ); // role, review, order

        user ? res.json(user) : res.status(400).json({ message: "User not found " });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const updateUser = async (req, res) => { 
    const { email: paramEmail } = req.params;
    let { username, email, password, city, country, telephone_number, address, postalCode,status,show, gender,birthday} = req.body;
    
    const userExists = await User.findOne({ where: { email: paramEmail }});

    if (!userExists) return res.status(400).json({ message: "User not found"});

    if(password){
        password = bcrypt.hashSync(password,10)
    }
    try {
       
        const response = await User.update(
            {
                username: username,
                email: email,
                city: city,
                country: country,
                password:password,
                telephone_number: telephone_number,
                address: address,
                postalCode: postalCode,
                status:status,
                show:show,
                gender: gender,
                birthday:birthday
            }, {where: { email: paramEmail }}
        )

        const userUpdated = await User.findOne({ where: { email: paramEmail }});
        res.status(200).json(userUpdated)
        // response ? res.json(response) : res.json({ message: "The data has not been updated" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
  getUsers,
  getUserByEmail,
  updateUser
}
