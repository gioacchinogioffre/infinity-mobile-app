const {Review, User, Comic} = require('../db')

const postReview = async(req,res)=>{
    try{
        const {rating, comment, date, comicID, userID } = req.body  // agregar relacion con  usuario
        if(rating < 1 || rating > 5){
            return res.status(404).json({message: `min 1 - max 5`})
        }
        const review = await Review.create(req.body)
        review.setComic(comicID);
        review.setUser(userID);

        res.status(201).json(review)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

const getReviews = async(req,res)=>{
    try{
         const reviews = await Review.findAll({
            include:[User, Comic]
         }) 
    
        res.status(201).json(reviews)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

const getReviewByID = async (req,res)=>{
    try{
        const {id} = req.params
        const review = await Review.findByPk(id,{
            include:[User, Comic]
        })
        res.status(200).json(review)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

module.exports ={
    getReviews,
    getReviewByID,
    postReview
}