/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

export async function addLines(cartId: string, lines: any[]) {
  const query = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          checkoutUrl
        }
      }
    }
  `;

  const res = await fetch(
    `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`,
    {
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token":
          process.env.SHOPIFY_STOREFRONT_TOKEN!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { cartId, lines },
      }),
    }
  );

  return (await res.json()).data.cartLinesAdd.cart;
}
