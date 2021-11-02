const express = require("express")
const products = require("./data/productsData")

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
   
app.listen(5000,console.log("Server running on port 5000 "))