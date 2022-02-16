//require mongoose 89

const mongoose=require('mongoose')
//require the schema 
const schema=mongoose.Schema

//create the schema 
const contactSchema=schema({
    name:String, 
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:Number,
    dateCreation:{
        type:Date,
        default: Date.now()
    }
})

//create the model and export it 
module.exports=Contacts=mongoose.model("contact", contactSchema)