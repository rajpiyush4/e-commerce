'use client'

import { addToCart } from "@/actions/addToCart"

function cart() {
    const cartin = async () => {
        const productsInCart = await addToCart({
            products: [
                { id: 1, quantity: 1 }
            ]
        })
        console.log(productsInCart)

    }
    cartin()




    return (
        <>
            <span>
                cart
            </span>
        </>
    )
}

export default cart