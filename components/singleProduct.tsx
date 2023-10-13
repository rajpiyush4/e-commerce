
import {addToCart} from "@/actions/addToCart"
import Image from "next/image"
import Link from 'next/link'
import Button from './button'


const color = ['blue', 'black', 'silver'] as const
async function page({ id, selectedColor }: { id: string, selectedColor: string | null }) {

  const product = await (await fetch(`https://dummyjson.com/product/${id}`)).json()
  

  return (
    <section className="flex rounded-md h-screen p-4 items-center bg-black my-8 border-[1px] border-stone-100/25">
      <div className="w-2/3 opacity-50 flex justify-center items-center">
        <Image className="rounded-md" src={product.images[0]} width={500} height={500} alt="img" />
      </div>

      <div className="w-1/3 flex flex-col gap-4 py-8">
        <span className="text-6xl text-white">{product.title}</span>
        <span className="text-xs rounded-[50px] text-white w-fit flex-shrink-0 bg-blue-700 p-3">${product.price} USD</span>
        <span className='text-[#d4d4d4] text-sm'>{product?.description}</span>
        <hr />

        <span className="text-white">Color</span>
        <div className="flex gap-2">
          {color.map((item: string, key: number) => <Link scroll={false} href={`/product/${id}/?color=${item}`} key={key} className={`text-sm hover:border-blue-500 hover:scale-105 transition-all bg-gray border-[1px] ${selectedColor == item ? 'border-blue-500' : 'border-stone-100/25'} p-2 rounded-[50px] text-white`}>{item}</Link>)}
        </div>
        <form action={async (formData: FormData) => {
          'use server'
          const data = await addToCart({ products: [{ id: parseInt(product.id), quantity: 1 }] });
          console.log(data)
        }}>
          <Button />
        </form>
      </div>
    </section>
  )
}

export default page