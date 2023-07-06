// helps with establishing connection to mongodb
import { MongoClient } from "mongodb"


export async function connectToDatabase(){
  const client =  await new MongoClient(
    'mongodb+srv://jakediehl17:X8lQj4FJtUCJydAc@cluster0.fboojzq.mongodb.net/auth?retryWrites=true&w=majority')

  return client
}




