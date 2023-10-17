import React, { Suspense } from 'react'
import Image from 'next/image'

async function getProductsDetails(id) {
    const response = await fetch('https://fakestoreapi.com/products/' + id, {
        next: {
            revalidate: 30
        }
    })
    return response.json()

}

async function page({ params }) {
    const id = params.id
    const product = await getProductsDetails(params.id)
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <h1>Product {id}</h1>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                <p>{product.description}</p>
                <Image src={product.image} alt={product.title} width={200} height={200} />
            </Suspense>

        </>
    )
}

export default page