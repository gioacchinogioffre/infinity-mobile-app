import Comic from "../models/Comic";


export const postComics = async(req,res)=>{
    try{
        const {name, price, description} = req.body
        if(!name || !price || !description){
            return res.status(400).json({ message: "Missing data" });
        }
        const comicExists = await Comic.findOne({ name : name});
        if (comicExists) return res.status(400).json({ message: "Comic already exists" });

        const newComic = new Comic(req.body)
        const comicSaved = await newComic.save();
        res.status(201).json(comicSaved)
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}

export const getComics = async(req,res)=>{
    try{
            const comics = await Comic.find().populate("reviews",{
                comicID:0,
                userID:0,

            })

        res.status(201).json(comics)
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}

export const getComicByID = async (req,res)=>{
    try{

        const {ComicID} = req.params
        const comic = await Comic.findById(ComicID)
        res.status(200).json(comic)
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}

export const updateComicByID = async (req,res)=>{
    try{
        const {ComicID} = req.params
        await Comic.findByIdAndUpdate(ComicID, req.body,{
            new:true
        })
        res.status(200).json("Successfully updated comic")
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
    
}

export const deleteComicByID = async (req,res)=>{
    try{
        const {ComicID}= req.params
        await Comic.findByIdAndDelete(ComicID)
        res.status(200).send("Successfully comic removed")
    
    }catch(error){
        res.status(404).json({message: `${error}`})
    }
}