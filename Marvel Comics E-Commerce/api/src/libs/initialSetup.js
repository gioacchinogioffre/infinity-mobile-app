const {Role} = require('../db')

const  createRoles = async (req, res)=>{
    try{
        const values = await Promise.all([
            Role.create({name:'user'}),
            Role.create({name:'admin'})
        ])
     
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}

module.exports = {
    createRoles
}