'use client'

import { Input } from "./ui/input"
import Link from "next/link"
import Cart from "./cart/index"


function header() {
    return (
        <header className="flex w-full text-[#d4d4d4] justify-between items-center">
            <div className="flex gap-8 items-center">
                <nav>
                    <ul className="flex gap-6">
                        <li className="text-[#fff] font-bold"><Link href='/'>Vercel Store</Link></li>
                        <li>All</li>
                        <li>Search</li>
                        <li>Stickers</li>
                    </ul>
                </nav>
                <Input className="w-[350px] bg-[transparent] border-[1px] border-stone-100/25 rounded-md " type="search" placeholder='Search for products' />
            </div>
            <Cart />

        </header>
    )
}

export default header