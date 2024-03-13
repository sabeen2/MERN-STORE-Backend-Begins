import express from "express";
import { PORT, MongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from "./models/bookModel.js";


const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send(`Welcome hello zzz`);
});


app.post("/books", async (request, response)=>{

  try {

    
  } catch (error) {
    console.log(error.message)
    response.status(500).send({message: error.message})
    
  }
});

mongoose.connect(MongoDBURL)
  .then(() => {
    console.log("App is connected");
    app.listen(PORT, () => {
        console.log(`Hello Sabin Welcome to backend port : ${PORT}`);
      });      
  })
  .catch((error) => {
    console.error(error);
  });
