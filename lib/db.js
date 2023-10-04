// helps with establishing connection to mongodb
import { MongoClient } from "mongodb"
require('dotenv').config()


export async function connectToDatabase(){

  const client =  await new MongoClient(
    process.env.MONGODB_URI// THIS IS FOR WHEN YOUR UPLOADING TO GITHUB FOR PRODUCTION!
    // process.env.API_KEY //THIS IS FOR WHEN YOU ARE TESTING IN YOUR LOCAL ENVIROMENT!
  )
  return client
}







