const express = require('express')
const app = express()
require('dotenv').config()
// const Sequelize = require('sequelize')
const db = require('./models')

const agentRout = require('./routes/agentRouts')
const employeeRout = require('./routes/employeeRouts')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

db.sequelize.sync()
.then(()=>console.log('Connection has been established successfully.'))
.catch((error)=>console.error('Unable to connect to the database:', error))
app.use('/',agentRout)
app.use('/employee',employeeRout)

const port = process.env.PORT || 4000

app.listen(port,()=>console.log('server run port :'+port))
module.exports = app