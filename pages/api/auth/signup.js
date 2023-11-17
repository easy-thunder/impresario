import { connectToDatabase } from "@/lib/db";
import {  MongoClient } from "mongodb"

import { hashPassword } from "./auth";
// import {readFileSync} from 'fs'
// import {writeFileSync} from 'fs'
// import fs from 'fs'
// import path from 'path'
 async function handler(req, res){

if(req.method==='POST'){

    
    const email =  req.body.email;
    const password =  req.body.password;
    const checkPassword =  req.body.checkPassword;
    const hashedPassword = await hashPassword(password)
    
    
    
    if(!email || !email.includes('@') || !password || password.trim().length<7 || !checkPassword===password ){
        res.status(422).json({message: "Invalid input - password should be seven characters long and valid email is needed or your password check failed.", status: 422})
        client.close()
        return
    }
    /////// mongodb connection  ///////////////
    // wait for the connection to establish
    const client = await connectToDatabase()

    
    
    
    const db=  client.db()
    // note had we placed newUser in the brackets we would have to access that user like findOne({newUser{email:email}})

    const existingUser = await db.collection('users').findOne({email:email})
    
    if(existingUser){
        //note that you still have to access .email as the findOne returns the whole existing user not just the email
        res.status(422).json({message:  `${existingUser.email} already exists try logging in`})
        client.close()
        return;
    }

           
        
         const result = await db.collection('users').insertOne({
            email: email,
            password: hashedPassword,
            messages: ["Welcome To Impresario Chat"],
         })
            
            ///////local connection///////////////

            // const filePath = path.join(process.cwd(),'data', 'login-data.json')
            // const jsonData = readFileSync(filePath)
            // const data = JSON.parse(jsonData)
            // data.push(newUser)
            // writeFileSync(filePath, JSON.stringify(data))
            
            res.status(201).json({message: `${email}`, feedback: email})
            
        client.close()
        }

}


export default handler;