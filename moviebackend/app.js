const express=require('express')
const app=new express()
const cors=require('cors')
app.use(express.json())
const bookmodel=require('./model/bookdata')

require('./connection')
app.use(cors())
app.get('/books',async(req,res)=>{
    try{const data=await bookmodel.find()
        res.send(data)
    }
    catch(error){console.log('data not found')}
})
app.post('/addbook',async(req,res)=>{
    try{var item=req.body;
        const datasave=new bookmodel(item);
        const saveddata=await datasave.save();
        res.send('post successfull')
    }
    catch(error){
        console.log('error')
    }
})
app.put('/editbook/:id',async(req,res)=>{
    try{
        const data=await bookmodel.findByIdAndUpdate(req.params.id,req.body);
        res.send('updataed successfully');
    }
    catch(error){
        console.log(error);
    }
})
app.delete('/deletebook/:id',async(req,res)=>{
    try{
        await bookmodel.findByIdAndDelete(req.params.id);
        res.send('deleted successfully')}
        catch(error){
            console.log(error)
        }
        
    })





app.listen(5000,()=>{
    console.log(('server is listening in port 5000'))})