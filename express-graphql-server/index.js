const express = require('express')
require('dotenv').config() 
const app= express()
const colors = require('colors')
const {graphqlHTTP}  = require('express-graphql')
const schema =require('./schema/schema')
const connectDB=require('./config/db_connect')
const cors = require('cors')

connectDB()
const port =process.env.PORT ||4000 

app.use(cors())
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:process.env.NODE_ENV==='development',
}))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})

