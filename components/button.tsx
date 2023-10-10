'use client'

import { experimental_useFormStatus as useFormStatus } from "react-dom"
import {Plus} from 'lucide-react'


function button() {
    const { pending } = useFormStatus()
    return (
        <>
            <button disabled={pending ? true : false} type="submit" className='flex w-full bg-blue-700 text-white text-lg p-4 rounded-[50px]'>{pending?<span className="mr-4">...</span>:<Plus className='mr-4' color='white' />}Add to cart </button>
        </>
    )
}

export default button