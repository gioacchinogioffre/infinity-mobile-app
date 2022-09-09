const {Comic,Review,Order} = require('../db')


const postComics = async(req,res)=>{
    try{
        const {name, price, description} = req.body
        if(!name || !price || !description){
            return res.status(400).json({ message: "Missing data" });
        }
        const comicExists = await Comic.findOne({where:{name : name}});
        if (comicExists) return res.status(400).json({ message: "Comic already exists" });

        const newComic = await Comic.create(req.body)
       
        res.status(201).json(newComic)
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

const getComics = async(req,res)=>{
    try{
            const comics = await Comic.findAll({
                include: [
                    {
                    model:Review,
                    attributes:["id","date","rating","comment","username"],
                    },
                    {
                    model: Order,
                    attributes:["id"],
                    through:{
                        attributes:[]
                    }
                    }
                ]
            })
            
        res.status(201).json(comics)
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

const getComicByID = async (req,res)=>{
    try{
        const {id} = req.params
        const comic = await Comic.findByPk(id,{
            include: [Review]
        })
        res.status(200).json(comic)
    }catch(error){
        res.status(404).json({message: error.message})
    }
}

const updateComic = async (req,res)=>{
    try{
        const {id} = req.params
        const {name,description,price,pageCount,rating,image,language,numReviews,stock} = req.body
        const updatedComic = await Comic.update({
            name: name,
            description: description,
            price: price,
            pageCount: pageCount,
            rating: rating,
            image: image,
            language: language,
            numReviews: numReviews,
            stock: stock
        },{where:{id}})
        updatedComic ? res.json({ message: "Comic updated successfully" }) : res.status(404).json({ message: "The comic has not been updated" });
        
    }catch(error){
        res.status(404).json({message: error.message})
    }
    
}
module.exports = {
    getComicByID,
    getComics,
    updateComic,
    postComics
}