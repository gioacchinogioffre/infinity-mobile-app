const { User, Role, Review, Order} = require("../db");


const getUsers = async (req, res) => {
    
    try {
        const users = await User.findAll({
            include:[Role,Review,Order]

            // {
            //     model: Review,
            //     attributes:["id"],
            //     through: {
            //         attributes: [],
            //     }
            // },
            // {
            //     model: Order,
            //     attributes:["id"],
            //     through: {
            //         attributes: [],
            //     }
            // }
        
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
        const user = await User.findOne({ where: { email }, include: [Role, Review, Order]} );

        user ? res.json(user) : res.status(400).json({ message: "User not found " });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

const updateUser = async (req, res) => { 
    const { email: paramEmail } = req.params;
    const { username, email, password, city, country, telephone_number, address, postalCode,} = req.body;
    
    const userExists = await User.findOne({ where: { email: paramEmail }});

    if (!userExists) return res.status(400).json({ message: "User not found"});

    try {
       
        const response = await User.update(
            {
                username: username,
                email: email,
                city: city,
                country: country,
                telephone_number: telephone_number,
                address: address,
                postalCode: postalCode,
            }, {where: { email: paramEmail }}
        )
        response ? res.json({message: "Data updated successfully"}) : res.json({ message: "The data has not been updated" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = {
  getUsers,
  getUserByEmail,
  updateUser
}
