import Order from "../models/Order";
import User from "../models/User";

export const postOrder = async(req,res) =>{

    try{
    const {number,paymentMethod,userID,date,total,state} = req.body
    if(!number || !paymentMethod || !total){
        return res.status(400).json({ message: "Missing data" });
    }

    let user = await User.findById(userID)

    let newOrder = new Order({
        number,
        paymentMethod,
        date,
        total,
        state,
        userID:user._id
    })

    const orderSaved = await newOrder.save()

    user.orders = user.orders.concat(orderSaved._id)
    await user.save()

    res.status(201).json(orderSaved)

    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}

export const getOrders = async(req,res)=>{
    try{
            const orders = await Order.find().populate('userID',{
               password:0,
               roles:0,
               reviews:0,
               orders:0
            })

        res.status(201).json(orders)
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}