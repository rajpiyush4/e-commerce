'use client'

import SingleProduct from '@/components/singleProduct'
import { useSearchParams } from 'next/navigation'


function page({ params: name }: { params: { productId: string } }) {
  const params = useSearchParams()
  const selectedColor = params.get('color')


  return (
    <>
      <SingleProduct id={name.productId} selectedColor={selectedColor} />
    </>
  )

}

export default page