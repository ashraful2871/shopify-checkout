"use server";

export async function createCart() {
  const query = `
    mutation {
      cartCreate {
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
      body: JSON.stringify({ query }),
    }
  );

  return (await res.json()).data.cartCreate.cart;
}
