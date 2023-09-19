const express=require("express");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const cors = require("cors");
const recipesRoutes=require("./Routes/RecipeRoutes");

const app=express();
const PORT=process.env.PORT || 8000;

app.use(bodyParser.json());

//used to run frontend and backend simultaniously
app.use(cors());

//use recipesroutes
app.use("/",recipesRoutes);

//mongoDB url
const mongoDB_URL="mongodb+srv://dishan:dishan1234@cluster0.kndmwg1.mongodb.net/RecipesDB?retryWrites=true&w=majority";

//Connect to mongoDB database
mongoose.connect(mongoDB_URL)
.then(()=>console.log("DB Connected..."))
.catch((err)=>console.log("DB not connected...",err));

//start server
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));

