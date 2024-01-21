"use client"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckoutForm';
import { useSearchParams } from 'next/navigation';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY}`);

export default function App() {
    const searchParams = useSearchParams()
    const options: any = {
        mode: 'payment',
        currency: 'usd',
        amount: Number(searchParams.get('amount')) * 100
    };

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckOutForm amount={Number(searchParams.get('amount'))} />
        </Elements>
    );
};