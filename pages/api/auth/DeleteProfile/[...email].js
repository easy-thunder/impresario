import { connectToDatabase } from "@/lib/db";



export default async function handler(req,res){
    const client= await connectToDatabase();
    const db = client.db();
    const collection = db.collection('users')
    if(!collection){
        res.status(404).json({message: "Collection not found"})
        client.close();
        return;
    }


    if(req.method==="DELETE"){
        const email = req.query.email;
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
    client.close();
    
}





