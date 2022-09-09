const jwt = require('jsonwebtoken')
const {User, Role} = require('../db')
const verifyToken = async (req,res,next)=>{
    try{
        const token = req.headers["x-access-token"]
        
        if(!token) return res.status(403).json({message: "No token provided"})
        const decoded = jwt.verify(token, "secret")
        
        req.userID = decoded.user.id
     
        const user = await User.findByPk(req.userID)
   
        if(!user) return res.status(404).json({message:"user not found with that token"})
        next()
    }catch(error){
        return res.status(401).json({message:"Unauthorized"})
    }
}

 const isAdmin = async (req,res,next)=>{
    const user = await User.findByPk(req.userID,{ include: {
        model:Role,
        attributes:["name","id"],
        through:{
            attributes: [],
        }
    } })
    let idRole = user.dataValues.roles[0].dataValues.id
    const roles = await Role.findAll({where:{id: idRole}})
    for (let i = 0; i < roles.length; i++) {
        if(roles[i].name === 'admin'){
            next();
            return;
        } 
    }
    return res.status(403).json({message: "Require Admin Role"})
}


module.exports = {
    verifyToken,
    isAdmin
}