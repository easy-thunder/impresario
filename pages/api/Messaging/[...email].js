import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
  let client; // Define client variable outside try block

  try {
    const { email } = req.query;

    client = await connectToDatabase(); // Assign the client within the try block
    const db = client.db();
    const user = await db.collection('users').findOne({ email: email[0] });

    if (req.method === "GET") {
      if (user) {
        return res.status(200).json({ messages: user.messages });
      } else {
        console.log("User not found");
        return res.status(404).json({ success: false, message: 'User not found' });
      }
    }

    if (req.method === "PATCH") {
      const message = req.body.message;
      const admin = req.body.admin

      const result = await db.collection('users').updateOne(
        { email: user.email },
        { $push: { messages: {message: message, admin:admin}} }
      );

      if (result.modifiedCount === 1) {
        res.status(200).json({ success: true, message: 'Message added successfully' });
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    }
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (client) {
      await client.close(); 
    }
  }
}