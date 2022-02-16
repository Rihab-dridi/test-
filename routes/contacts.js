const express = require("express");
//import Router middleware
const router = express.Router();
//import the Model
let Contacts = require("../model/Contacts");

//CRUD
//@role: Create a new contact
//@Url:http://localhost:5000/api/contacts/add

router.post("/add", async (req, res) => {
  //get the data from the user
  const { name, email, phone } = req.body;
  try {
    //create a new contact
    const newContact = new Contacts({ name, email, phone });
    //save the contact in the database
    newContact.save();
    // console.log(contact);
    res.status(200).json(newContact);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//@role: Read all the  contacts 
//@Url:http://localhost:5000/api/contacts/
router.get('/',async (req,res)=>{
    try {
        const contacts= await Contacts.find()
        res.status(200).send(contacts)
    } catch (error) {
        res.status(500).json({msg:error.message})
     

    }
})

//@role: delete a specific   contact 
//@Url:http://localhost:5000/api/contacts/delete/:id
router.delete('/delete/:id',async (req,res)=>{

// const {id}=req.params
const id=req.params.id 
try {
    const contacts=await Contacts.findByIdAndRemove(id)
    res.status(200).json(contacts)
} catch (error) {
    res.status(200).json({msg:error.message})
}

})

//@role: update  a specific   contact 
//@Url:http://localhost:5000/api/contacts/update/:id
router.put('/update/:id', async (req,res)=>{
    const id=req.params.id 
    try {
        const contact=await Contacts.findByIdAndUpdate(id, {$set:req.body},{new:true})
        res.status(200).json(contact)
    } catch (error) {
        res.status(200).json({msg:error.message})
    }   
})
module.exports = router;
