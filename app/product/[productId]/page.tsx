'use server'

import SingleProduct from '@/components/singleProduct'


function Product({ searchParams, params }: { searchParams: { color
  : string }, params: {productId:string} }) {
  const selectedColor = searchParams.color || 'black'



  return (
    <>
      <SingleProduct id={params.productId} selectedColor={selectedColor} />
    </>
  )

}


export default Product