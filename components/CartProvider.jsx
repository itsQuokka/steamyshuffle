"use client";

import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="http://steamshuffle.vercel.app/stripe/success"
      cancelUrl="http://steamyshuffle.vercel.app/stripe/error"
      language="en-US"
      currency="CAD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
