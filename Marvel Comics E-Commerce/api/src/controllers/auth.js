const { User, Role,Order } = require("../db");
const jwt =  require('jsonwebtoken');
const bcrypt = require('bcrypt');

 const signup = async (req,res)=>{
    try{
        const {username, email, roles, password, city,country,address,postalCode, telephone_number,gender,birthday} = req.body
        
        if(!username|| !email || !password){
            return res.status(404).json({message: "Missing data"})
        }
        let hashPassword = bcrypt.hashSync(password,10)
        
        const checkUserExist = await User.findOne({where:{username:username}})
        const checkEmailExist = await User.findOne({where:{email:email}})
        if(checkUserExist || checkEmailExist) return res.status(404).json({message:"The user already exists"})

        const newUser = await  User.create({
            username: username,
            email: email,
            password: hashPassword,
            city,
            country,
            address,
            postalCode,
            telephone_number,
            gender,
            birthday

        })
        if(roles){
            await newUser.addRoles([roles])
        }
        else{
            let userRole = await Role.findOne({where:{name:"user"}})
            userRole = userRole.dataValues.id
            await newUser.addRoles([userRole])
        }
        let token = jwt.sign({id:newUser.id},"secret",{
            expiresIn:84600
        })
        res.status(200).json({
            user: newUser,
            token:token
        })
    }catch(error){
        res.status(404).json({message:`${error}`})
    }
}
 const signin = async (req,res)=>{
 const {email, password} = req.body
    User.findOne({where:{email: email}, include:[Order,Role]})
    
    .then(user=>{
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        if(bcrypt.compareSync(password, user.password)){
            let token = jwt.sign({user:user},"secret",{
                expiresIn:84600
            })
            res.json({
                user:user,
                token:token
            })
        }
        else{
            return res.status(401).json({message:"Invalid password"})
        }
    }).catch(err=>{
        res.status(500).json(err)
    })
}

module.exports = {
    signin,
    signup
}