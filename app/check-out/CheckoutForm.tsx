
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { json } from 'stream/consumers';
import { Cartcontext } from '../_context/Cartcontext';
import { useUser } from '@clerk/nextjs';
import OrderApis from '../_utlis/OrderApis';
import CartApis from '../_utlis/CartApis';

const CheckOutForm = ({ amount }: any) => {
    const { cart, setCart }: any = useContext(Cartcontext)
    const { user } = useUser()
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false)
    const [errormessage, setErrorMessage] = useState()
    const handleSubmit = async (event: any) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        const handleError = (error: any) => {
            setLoading(false)
            setErrorMessage(error.message)
        }
        createOrder()
        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
            handleError(submitError);
            return;
        }

        const res = await fetch('api/create-intent', {
            method: 'POST',
            body: JSON.stringify({
                amount: amount
            })
        })
        const clientSecret = await res.json()
        const result = await stripe.confirmPayment({
            clientSecret,
            //`Elements` instance that was used to create the Payment Element
            elements,
            confirmParams: {
                return_url: `https://courses-spider.vercel.app/Thanksorder?total=${amount}`,
            },
        });

        if (result.error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(result.error.message);
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`
        }
    };
    const createOrder = () => {
        let prodid: any = []
        cart.forEach((element: any) => {
            prodid.push(element?.product?.id)
        });
        const data = {
            data: {
                email: user?.primaryEmailAddress?.emailAddress,
                username: user?.firstName,
                amount,
                products: prodid
            }
        }
        OrderApis.createOrder(data).then((res: any) => {
            if (res) {
                cart.forEach((element: any) => {
                    CartApis.deletitem(element?.id).then((res: any) => {

                    })
                });
            }
        })
    }
    return (
        <form className=' h-screen p-[10%] flex justify-center items-center' onSubmit={handleSubmit}>
            <div className="shadow-2xl  flex flex-col justify-center items-center rounded-xl p-10 lg:w-[50%]">
                <PaymentElement  className='w-[100%]'/>
                <button className='bg-primary text-white p-2 w-40 mt-2 items-center rounded-xl'  >Submit</button>
           </div>
        </form>
    );
}


export default CheckOutForm;