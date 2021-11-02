import express from "express"
import dotenv from "dotenv"
import products from "./data/productsData.js" // for js file need to add .js extension for es module syntax

dotenv.config()

const app = express()

// if request made on “/” - root, send simple message
app.get('/',function(req,res){
    res.send('API is running....'); // send as response
   })

// get all products data
app.get('/api/products',function(req,res){
    res.json(products);
})
// get product details based in id
app.get('/api/products/:id',function(req,res){
    const product = products.find(p => p._id === req.params.id)
    res.send(product);
})
const PORT = process.env.PORT || 5000
   
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))