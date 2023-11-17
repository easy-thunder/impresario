import { connectToDatabase } from "@/lib/db";

import { hashPassword } from "./auth";

 async function handler(req, res){


if(req.method==='POST'){
    const email =  req.body.email;
    const password =  req.body.password;
    const checkPassword =  req.body.checkPassword;
    const hashedPassword = await hashPassword(password)
    const client = await connectToDatabase()
    const db=  client.db()
    const existingUser = await db.collection('users').findOne({email:email})

    if(!email || !email.includes('@') || !password || password.trim().length<7 || !checkPassword===password ){
       res.status(422).json({message: "Invalid input - password should be seven characters long and valid email is needed or your password check failed.", status: 422})
       return
   }

   if(existingUser){
       res.status(422).json({message:  `${existingUser.email} already exists try logging in`})
       return;
   }
   else{

       
       try{
           const result = await db.collection('users').insertOne({
               email: email,
               password: hashedPassword,
               messages: [],
            })
            
            
            
            res.status(201).json({message: `${email}`, feedback: email})
        }
        catch(error){
            console.error('Error during signup:', error);
            res.status(500).json({message: 'Internal Server Error'});
        }
        finally{
            if (client){client.close()}
        }
        
    }
}

}


export default handler;