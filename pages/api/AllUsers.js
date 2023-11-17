import { connectToDatabase } from "@/lib/db";

export default async function AllUsersHandler(req, res){
    const client = await connectToDatabase();
    const db = client.db()
    
    if(req.method==="GET"){
        const users = await db.collection('users').find().toArray();
        res.status(200).json(users)
    }
    client.close()
}





