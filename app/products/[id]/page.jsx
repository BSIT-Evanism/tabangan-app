import React from 'react'

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
            <h1>Product {id}</h1>
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
            <p>{product.description}</p>

        </>
    )
}

export default page