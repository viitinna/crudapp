const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
    const con = await mongoose.connect(process.env.MONGO_URL,{
        useNewUrParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })

    console.log(`MongooDB connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);

    }
}

module.exports = connectDB