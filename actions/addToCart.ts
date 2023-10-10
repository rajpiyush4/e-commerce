'use server'

type Products = {
    id: number,
    quantity: number
}


export async function addToCart({products}:{products:Products[]}) {
    const cartAdded = await( await fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 1,
          products
        })
      })).json()

  return cartAdded
}
