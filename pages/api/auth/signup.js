import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "./auth";

async function handler(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const checkPassword = req.body.checkPassword;
    const hashedPassword = await hashPassword(password);
    let client;
    client = await connectToDatabase();
    const db = client.db();

    if (!email || !email.includes('@') || !password || password.trim().length < 7 || !checkPassword === password) {
        res.status(422).json({ message: "Invalid input - password should be seven characters long and valid email is needed or your password check failed.", status: 422 });
        return;
    }




    if (req.method === 'POST') {
       

      

        try {

            const existingUser = await db.collection('users').findOne({ email: email });

            if (existingUser) {
                res.status(422).json({ message: `${existingUser.email} already exists, try logging in` });
                return;
            }



        } catch {
            const result = await db.collection('users').insertOne({
                email: email,
                password: hashedPassword,
                messages: [],
            });

            res.status(201).json({ message: `${email}` });
            
        } finally {
            if (client) {
                await client.close();
            }
        }
        return;
    }
}

export default handler;