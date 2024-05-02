const express =require("express");
const cors=require("cors");
const morgan=require("morgan");
const path=require("path");
const rfs=require("rotating-file-stream");
// import "./leadEnvironment.mjs";
// const mongoose=require("mongoose");
const genroutes=require("./routes/record");
const adminroutes=require("./routes/adminRoutes");
const guestroutes=require("./routes/guestRoutes");
const hostroutes=require("./routes/hostRoutes");

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc')

require('dotenv').config();

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5050;
const app = express();



var accessLogStream = rfs.createStream("test.log", {
    interval: '15m', // Rotate every 15mins
    path: path.join(__dirname, 'log')
});

app.use(morgan('combined', { stream: accessLogStream }));

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/admin",adminroutes);
app.use("/guest",guestroutes);
app.use("/host",hostroutes);
app.use("/",genroutes);


// const uri=process.env.MONGODB_URI;
// mongoose.connect(uri);   
// const connection=mongoose.connection;
// connection.once('open', () => {
//     console.log("mongodb connection est successfully!");
// })
// error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const swaggerOptions = {
    swaggerDefinition: {
      openapi:"3.0.0",
      info: {
        title: 'Home-Away API Documentation',
        description: 'API documentation for home-away application',
        version: '1.0.0',
      },
      servers: [
        {
          url: `http://localhost:${PORT}/host`,
          description: "Local server",
  },
 ],
    },
    apis: ['./routes/*.js'],
    
  };
  
  const swaggerDocs = swaggerJsdoc(swaggerOptions);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});