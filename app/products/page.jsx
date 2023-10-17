import React, { Suspense } from 'react'
import ProductList from './ProductList'

function page() {



    return (
        <div>
            <h1>Products</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <ProductList />
            </Suspense>
        </div>
    )
}

export default page