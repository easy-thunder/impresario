// helps with establishing connection to mongodb
import { MongoClient } from "mongodb"
require('dotenv').config()


export async function connectToDatabase(){

  const client =  await new MongoClient(
    process.env.API_KEY
  )
  return client
}




