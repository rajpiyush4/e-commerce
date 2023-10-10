import Image from "next/image"
import Link from "next/link"


async function carousel() {
  const { products } = await (await fetch('https://dummyjson.com/products?limit=10')).json()

  return (
    <section className='overflow-hidden p-4 my-4 rounded-md '>
      <div className='flex gap-8 overflow-x-scroll p-4 '>

        <div className='flex gap-8 animate-carousel'>
          {products.map((item: any, key: number) => <Link href={`/product/${item.id}`} key={key} className='w-[300px] h-[200px] relative group hover:border-[1px] hover:border-blue-500 flex justify-center items-center bg-black  border-[1px] border-slate-100/25 rounded-md object-cover overflow-hidden'>
            <div className="m-auto p-4 opacity-50 group-hover:scale-105 transition-all rounded-md">
              <Image className="rounded-md" src={item.images[0]} width={300} height={100} alt="img" />
            </div>
            <div className="absolute bottom-5 text-sm rounded-[50px] gap-4 flex justify-between items-center border-[1px] border-stone-100/25 p-1">
              <span className="text-white p-2"> {item.title}</span>  <span className="p-2 bg-blue-700 rounded-[50px] px-2 text-white">${item.price} USD</span>
            </div>
          </Link>

          )}
        </div>
      </div>
    </section>
  )
}

export default carousel