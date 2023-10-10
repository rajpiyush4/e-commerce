import Image from "next/image"
import Link from "next/link"

async function ThreeBoxGrid() {
    const p1 = await (await fetch('https://dummyjson.com/products/1')).json()
    const p2 = await (await fetch('https://dummyjson.com/products/2')).json()
    const p3 = await (await fetch('https://dummyjson.com/products/3')).json()

    return (
        <section className='mt-8 mx-auto h-screen grid justify-center max-w-screen-2xl gap-4 md:grid-cols-6 md:grid-rows-2'>

            <Link href={`/product/${p1.id}`} className='relative group hover:border-[1px] hover:border-blue-500 md:col-span-4 md:row-span-2 flex justify-center items-center border-[1px] border-slate-100/25 bg-black rounded-md object-contain overflow-hidden'>
                <div className="rounded-md opacity-50 group-hover:scale-105 transition-all w-1/2 h-1/2">
                    <Image className="rounded-md" src={p1.images[0]} width={600} height={400} alt="img" />
                </div>
                <div className="absolute bottom-5 text-sm rounded-[50px] gap-4 flex justify-between items-center border-[1px] border-stone-100/25 p-1">
                    <span className="text-white p-2"> {p1.title}</span>  <span className="p-2 bg-blue-700 rounded-[50px] px-2 text-white">${p1.price} USD</span>
                </div>
            </Link>

            <Link href={`/product/${p2.id}`} className='relative group md:col-span-2 md:row-span-1 hover:border-[1px] hover:border-blue-500 bg-black flex justify-center items-center  border-[1px] border-slate-100/25 rounded-md object-cover overflow-hidden'>
                <div className="m-auto opacity-50 w-1/2 h-1/2 group-hover:scale-105 transition-all">
                    <Image className="rounded-md" src={p2.images[0]} width={300} height={100} alt="img" />
                </div>
                <div className="absolute bottom-5 text-sm rounded-[50px] gap-4 flex justify-between items-center border-[1px] border-stone-100/25 p-1">
                    <span className="text-white p-2"> {p2.title}</span>  <span className="p-2 bg-blue-700 rounded-[50px] px-2 text-white">${p2.price} USD</span>
                </div>
            </Link>

            <Link href={`/product/${p3.id}`} className='relative group md:col-span-2 md:row-span-1 hover:border-[1px] hover:border-blue-500 flex justify-center items-center bg-black  border-[1px] border-slate-100/25 rounded-md object-cover overflow-hidden'>
                <div className="m-auto opacity-50 w-1/2 h-1/2 group-hover:scale-105 transition-all rounded-md">
                    <Image className="rounded-md" src={p3.images[0]} width={300} height={100} alt="img" />
                </div>
                <div className="absolute bottom-5 text-sm rounded-[50px] gap-4 flex justify-between items-center border-[1px] border-stone-100/25 p-1">
                    <span className="text-white p-2"> {p3.title}</span>  <span className="p-2 bg-blue-700 rounded-[50px] px-2 text-white">${p3.price} USD</span>
                    </div>
            </Link>

        </section>
    )
}

export default ThreeBoxGrid