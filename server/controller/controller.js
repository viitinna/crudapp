var Userdb = require('../model/model');


// creat and sev new user
 exports.create = (req,res) =>{
     //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"})
        return;
    }

    // new user
    const user = new Userdb({
        username: req.body.username,
        firstname: req.body.fistname,
        lastname: req.body.lastname,
        email: req.body.email,
        usertype: req.body.uaertype

    })

    // save user in the database
    user
    .save(user)
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message || "Some error occurred while creating a create operation"
        })
    })

 }

 // retrieve return all users// retrieve return a single users
 exports.find = (req,res) =>{
     
    if(req.body.id){
        const id = req.require.id;

    Userdb.findById(id)
    .then(data =>{
        if(!data){
            res.sattus(404).send({message: "Not found user with id"+id})
        }else{
            res.send(data)
        }
    })
    .cath(err =>{
        res.status(500).send({message: "Error retrieving user with id"+id})
    })


    }else{
        Userdb.find()
        .then(user =>{
            res.send(user)
        })
        .catch(err =>{
            res.status(500).send({message:err.message ||"Error Occurred while retriving user information"})
        })
    }
}


// update a new identified user by user id
exports.update = (req,res) =>{
   if(!req.body){
       return res
       .status(400)
       .send({message:"Data to update can not be empty"})
   }

   const id = req.params.id;
   Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
   .then(data =>{
       if(!data){
           res.status(404).send({message:`Cannot Update user with ${id}. Maybe user not found`})
       }else{
           res.send(data)
       }
   })
   .catch(err =>{
       res.status(500).send({message: "Error Update user information"})
   })
}

// delete user
exports.delete = (req,res) =>{
    const id = req.params.id;

    Userdb.findOneAndDelete(id)
    .then(data => {
     if(!data){
         res.status(404).send({message:`Cannot Delete with id ${id}. Maybe id is wrong`})
     }else{
         res.send({
             message: "User was deleted successfully!"
         })
     }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete User with id="+id
        });
    });
}