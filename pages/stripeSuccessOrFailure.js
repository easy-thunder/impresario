import  { Fragment, useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function PreviewPage() {
  const [formData, setFormData] = useState({
    codesToSend:[
      { price: 'price_1OEb1VAdCijzaWdMd9g9CXUz', quantity: 1 },
      { price: 'price_1OEazcAdCijzaWdMuCBUT2ZC', quantity: 1 },
    ]
  });



  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    
    
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          formData
        
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Assuming the server returns a JSON object with a 'url' property
      const result = await response.json();
      console.log(result)
      
      // Redirect the user to the Stripe checkout session URL
      window.location.href = result.url;
  };

  return (
    <Fragment>
        <div className="marginPastHeader whiteText"></div>
        <h1 className="whiteText updatedCenter">Welcome</h1>
        <div style={{backgroundColor: "white"}}>
        <form 
        // action={"/api/checkout_sessions"} method="POST" 
        onSubmit={submitHandler}
        >
      <section>
        <button
        //  onClick={(e)=>submitHandler(e)} role="link" 
         type="submit"
         >
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>


          </div>
          </Fragment>
  );
}