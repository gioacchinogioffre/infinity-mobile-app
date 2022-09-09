const {Order,Comic, User} = require('../db');

const postOrder = async(req,res) =>{

    try{
    const {paymentMethod,date,total,state, comicID, userID} = req.body
    if(!paymentMethod || !total || !comicID){
        return res.status(400).json({ message: "Missing data" });
    }
        const order = await Order.create(req.body)
        await order.addComics(comicID)
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

const updateOrder = async (req,res)=>{
    try{
        const {id} = req.params
        const {total, paymentMethod, state} = req.body
        const updatedOrder = await Comic.update({
            total: total,
            paymentMethod: paymentMethod,
            state: state
        },{where:{id}})

        const orderUpdated = await Order.findOne({ where: { id: id }});
        res.status(200).json(orderUpdated)
        
    }catch(error){
        res.status(404).json({message: error.message})
    }
    
}



module.exports={
    getOrders,
    postOrder,
    updateOrder
}