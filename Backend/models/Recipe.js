const mongoose=require("mongoose");


//model for recipe
const recipeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    ingredients:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
 
})

module.exports = mongoose.model("Recipes",recipeSchema);