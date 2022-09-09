const {Role} = require('../db')

const ROLES = ["admin","user"]

const getRoles = async (req, res)=>{
    try{
        ROLES.map(async rol => {
           await Role.findOrCreate({where : {name: rol}})
        })
        return res.status(200).json({message: "roles created successfully"})
         
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}

module.exports = {
    getRoles
}
