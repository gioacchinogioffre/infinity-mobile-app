const {Order,Comic, User} = require('../db');

const postOrder = async(req,res) =>{

    try{
    const {number,paymentMethod,date,total,state, comicId, userID} = req.body
    if(!number || !paymentMethod || !total || !comicId){
        return res.status(400).json({ message: "Missing data" });
    }
        const order = await Order.create(req.body)
        await order.addComics(comicId)
        order.setUser(userID);

    res.status(201).json(order)

    }catch(error){
        res.status(404).json({message: error.message})
    }
}



const getOrders = async(req,res)=>{
    try{
        const orders = await Order.findAll({
            include:[Comic,User]
        }) 
           
        res.status(201).json(orders)
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}

module.exports={
    getOrders,
    postOrder
}