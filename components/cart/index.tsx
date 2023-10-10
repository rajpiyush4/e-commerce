'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ShoppingCart } from 'lucide-react'
import AddToCart from "./addToCart"
import { useEffect } from "react"

function Index() {
    useEffect(()=>{
        const cart=()=>{

        }

    },[])


    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <span className="block border-2 border-stone-100/25 p-2 rounded-md">
                        <ShoppingCart className="scale-75" /></span>
                </SheetTrigger>
                <SheetContent className="bg-black">
                    <SheetHeader>
                        <SheetTitle className="text-[#d4d4d4]">My Cart</SheetTitle>
                        <SheetDescription className="text-center text-lg flex justify-center">
                            Your Cart is empty
                            <ShoppingCart />
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default Index