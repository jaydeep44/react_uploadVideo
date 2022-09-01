import React, { useEffect } from "react";
import axios from "axios";
import { BACKEND_URI } from "../config/constants";
import StripeCheckout from 'react-stripe-checkout';
// import {Button} from 'react-bootstrap'

const Payment = () => {

   useEffect(()=>{
    const requestData ={
        "token":"jaydeep"
        
    }
    
           axios
            .post(`${BACKEND_URI}/api/v1/payment/pay`,requestData)
            .then((success) => {
              alert("Submitted successfully",success);
            })
            .catch((error) => {
              console.log(error);
              alert("Error happened!",error);
            });
   })

    const tokenHandler = (token) =>{

    console.log(token)
    }


    return (
         <StripeCheckout
         amount={100*100}
         shippingAddress
         currency="INR"
         stripeKey="pk_test_51LcPq0SF67Jsqbd4UiG4bjfLJvdUv9UK61jNdw8hHD3Gv1qbAEoI3tWdV05uIng3v3mrBH2lYpREnDI87nmOuPDs00VJMFJNDX"
         token={tokenHandler}
         >
            <button>pay</button>
            
         </StripeCheckout>
   
    )
}
 
export default Payment;