const express = require('express')
const app = express()
require('dotenv').config()
// const Sequelize = require('sequelize')
const db = require('./models')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const swaggerOptions = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        version: "1.0.0",
        title: "CNSS API",
        description: "CNSS API Information",
        contact: {
          name: "AZIZI ABDELHAMID"
        },
        servers: ["http://localhost:4000"]
      }
    },
    // ['.routes/*.js']
    apis: ['./routes/*.js']
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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