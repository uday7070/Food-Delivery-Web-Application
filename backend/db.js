const mongoose=require("mongoose")
const url="mongodb://uday:asdfghj@ac-q3rmerr-shard-00-00.6fkhb9a.mongodb.net:27017,ac-q3rmerr-shard-00-01.6fkhb9a.mongodb.net:27017,ac-q3rmerr-shard-00-02.6fkhb9a.mongodb.net:27017/?ssl=true&replicaSet=atlas-bkc04u-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.set('strictQuery', true)
const mongoDB=()=>{
    mongoose.connect(url).then(()=>{
        console.log("connected successfully")
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports=mongoDB;


