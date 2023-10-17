import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products', {
        next: {
            revalidate: 30
        }
    })
    return response.json()

}

async function ProductList() {
    const products = await getProducts()
    return (
        <>
            <div className='grid grid-cols-4 gap-5'>
                {products.map((product) => (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <div className='w-fit h-auto border-2'>
                            <h1>{product.title}</h1>
                            <h2>{product.price}</h2>
                            <Image src={product.image} alt={product.title} width={200} height={200} />
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default ProductList