import express from "express"
import dotenv from "dotenv"
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import connectDB from "./config/db.js"  // for js file need to add .js extension for es module with Node

import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json()) // allow json data in body

// if request made on “/” - root, send simple message
app.get('/',function(req,res){
    res.send('API is running....') // send as response
   })

app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)

app.get('/api/config/paypal',(req,res) => 
  res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
   
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))