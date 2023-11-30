const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// import Cors from 'cors';

// import initMiddleware from '@/lib/init-middleware'; // Replace with the actual path to the file

// const cors = initMiddleware(
//   Cors({
//     methods: ['GET', 'POST'],
//   })
// );

export default async function handler(req, res) {
  


  // await cors(req,res);
  
  if (req.method === "GET") {
    try {
      const products = await stripe.products.list({
        limit: 15,
      });
  
      const productsWithPrices = await Promise.all(products.data.map(async (product) => {
        const price = await stripe.prices.retrieve(product.default_price);
        return {
          ...product,
          price: price.unit_amount / 100, // Convert amount to dollars or your desired currency
          currency: price.currency,
        };
      }));
  
      return res.status(200).json({ message: productsWithPrices });
    } catch (error) {
      console.error('Error fetching products:', error.message);
     return res.status(500).json({ error: 'Internal Server Error' }); // Send an appropriate error response
    }
  }






  
////////////////////////////////////////

if (req.method === 'POST') {
  const { formData } = await req.body;
  console.log("form Data",formData, "end form data")

  
  try {

    const session = await stripe.checkout.sessions.create({
      line_items:
      formData,
      mode: 'payment',
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
      automatic_tax: { enabled: true },
    });
    // console.log(session.url)
    res.status(200).json({ url: session.url });
    } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
} 
else {
  res.setHeader('Allow', 'POST');
  res.status(405).end('Method Not Allowed');
}




  
}