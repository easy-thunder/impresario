import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "./auth";

async function handler(req, res) {
    if (req.method === 'POST') {
        const email = req.body.email;
        const password = req.body.password;
        const checkPassword = req.body.checkPassword;
        const hashedPassword = await hashPassword(password);

        if (!email || !email.includes('@') || !password || password.trim().length < 7 || !checkPassword === password) {
            res.status(422).json({ message: "Invalid input - password should be seven characters long and valid email is needed or your password check failed.", status: 422 });
            return;
        }

        // Retry logic for database operation
        const maxRetries = 3;
        const delayBetweenRetries = 1000; // 1 second delay between retries

        let client;
        try {
            // Establish MongoDB connection
            client = await connectToDatabase();
            const db = client.db();

            // Check for existing user
            const existingUser = await db.collection('users').findOne({ email: email });

            if (existingUser) {
                res.status(422).json({ message: `${existingUser.email} already exists, try logging in` });
                return;
            }

            // Retry the user insertion operation
            const result = await retryOperation(
                () => db.collection('users').insertOne({
                    email: email,
                    password: hashedPassword,
                    messages: [],
                }),
                maxRetries,
                delayBetweenRetries
            );

            // Respond to the client
            res.status(201).json({ message: `${email}`, feedback: email, result });
        } catch (error) {
            console.error('Error during signup:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        } finally {
            if (client) {
                await client.close();
            }
        }
    }
}

// Retry function
async function retryOperation(operation, maxRetries, delayBetweenRetries) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const result = await operation();
            return result;
        } catch (error) {
            console.error(`Attempt ${attempt} failed: ${error.message}`);
            if (attempt < maxRetries) {
                console.log(`Retrying in ${delayBetweenRetries / 1000} seconds...`);
                await sleep(delayBetweenRetries);
            } else {
                console.error(`Max retries reached. Operation failed.`);
                throw error;
            }
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default handler;