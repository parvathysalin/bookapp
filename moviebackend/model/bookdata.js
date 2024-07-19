const mongoose=require('mongoose');
const bookSchema=mongoose.Schema({

    Image:String,
    Name:String,
    Author:String,
    Description:String,
 
})
const bookdata=mongoose.model('bookdetail',bookSchema);
module.exports=bookdata;