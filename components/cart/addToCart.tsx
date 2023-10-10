
async function addToCart() {
  const cartAdded = await (await fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 1,
      products: [
        { id: 1, quantity: 1 }
      ]
    })
  })).json()

  console.log(cartAdded)

  return (
    <div>
      

    </div>
  )
}

export default addToCart