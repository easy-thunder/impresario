import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDatabase } from "@/lib/db";
import { verifyPassword } from "./auth";
// import Credentials from "next-auth/providers/credentials";
//comment to git commit


export default NextAuth({
  session:{
    strategy: 'jwt'
  },
  providers:[
    CredentialsProvider({

      async authorize(credentials){
        const client = await  connectToDatabase()

        const usersCollection = client.db().collection('users');

        const user= await usersCollection.findOne({email: credentials.email})
        if(!user){        client.close()
          throw new Error('No User Found!')}
        const isValid = await verifyPassword(credentials.password, user.password)
        if(!isValid){         client.close()
          throw new Error("Wrong Password")}

        client.close()
        return{email: user.email}

        
      }
    })
  ], 
  secret: process.env.NEXTAUTH_SECRET,
});


