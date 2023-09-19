const router = require ("express").Router();
const Recipe = require("../models/Recipe")

// get all recipes
router.route("/").get((req,res)=>{

    Recipe.find().then((recipes)=>{
        res.json(recipes);
    }).catch((err)=>{
        console.log(err);
    })
})

//add a recipe 
router.post("/add",(req,res)=>{
    const name=req.body.name;
    const ingredients=req.body.ingredients;
    const description=req.body.description;

    const newRecipe=new Recipe({
        name,
        ingredients,
        description
    }).save().then(()=>{
        res.json("New Recipe Added!");
    }).catch((err)=>{
        console.log(err);
    })
    
})

//update a recipe with an id
router.route("/update/:id").put((req,res)=>{
    let recipeId=req.params.id;
    const {name,ingredients,description}=req.body;

    const updateRecipe={
        name,
        ingredients,
        description,
    }

    Recipe.findByIdAndUpdate(recipeId,updateRecipe)
    .then(()=>{
        res.json("Recipe is updated!")
    }).catch((err)=>{
        console.log("Update unsuccessful!",err);
    })
})

// delete recipe with an id
router.route("/delete/:id").delete((req,res)=>{
    let recipeId=req.params.id;

    Recipe.findByIdAndDelete(recipeId)
    .then(()=>{
        res.json("Recipe is deleted!");
    }).catch((err)=>{
        console.log("Recipe deletion unsuccessful")
    })
})
module.exports=router;

