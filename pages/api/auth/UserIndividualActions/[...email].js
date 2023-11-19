import { connectToDatabase } from "@/lib/db";
import nodemailer from 'nodemailer'
require('dotenv').config()




export default async function handler(req,res){
    const client= await connectToDatabase();
    const db = client.db();
    const collection = db.collection('users')
    if(!collection){
        res.status(404).json({message: "Collection not found"})
        client.close();
        return;
    }
    const email = req.query.email[0];



    if(req.method==="DELETE"){
        try{

            const result = await collection.deleteOne({email: email})
            if (result.deletedCount===1){
                res.status(200).json({message:"Successful Deletion"})
            } else{
                res.status(404).json({message:"User not found"});
            }
        }
        catch{res.status(404).json({message:"User Not Found"})}
    }


    if (req.method === "PATCH" && req.body.action === "CHAT") {

        try {
            const result = await collection.updateOne({ email: email }, { $set: { viewedChat: true } });
            if (result.modifiedCount === 1) {
                sendEmailNotification(email)
                res.status(200).json({ message: "Chat updated successfully" });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }


    }
    
    if (req.method==="PATCH" && req.body.action === "HIDESHOWCHAT"){
        try{
            const result = await collection.updateOne({ email: email }, { $set: { viewedChat: false } });
            if (result.modifiedCount === 1) {
                res.status(200).json({ message: "Chat updated successfully" });
            } else {
                res.status(404).json({ message: "User not found" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal Server Error" });
        }
        
    }
    client.close();


    function sendEmailNotification(userEmail) {
        console.log("trying to email", userEmail)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'jddiehl17@gmail.com', // Replace with your email
                pass: `${process.env.GOOGLE_MAILER}`,       // Replace with your email password or use an app-specific password
            },
        });
    
        const mailOptions = {
            from: 'jddiehl17@gmail.com',   // Replace with your email
            to: 'jddiehl17@gmail.com',     // Replace with your email
            subject: 'Chat Application Notification',
            text: `User with email ${userEmail} has opened the chat application.`,
        };
    
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
    }
    
}





