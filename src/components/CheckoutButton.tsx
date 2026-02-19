"use client";

import { addLines } from "@/service/addLines";
import { createCart } from "@/service/createCart";

export default function CheckoutButton() {
  const handleCheckout = async () => {
    const cart = await createCart();
    console.log(cart);
    const updatedCart = await addLines(cart.id, [
      {
        merchandiseId: "gid://shopify/ProductVariant/46771291324568",
        quantity: 1,
      },
    ]);
    window.location.href = updatedCart.checkoutUrl;
  };

  //
  //// TODO: Add error handling and loading state
  return <button onClick={handleCheckout}>Checkout</button>;
}
