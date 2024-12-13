import mongoose from "mongoose";

 export const coonectDB = async () =>{ 
    await mongoose.connect('mongodb+srv://malyachoudha:Malyachoudha14@cluster0.ellj3.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}