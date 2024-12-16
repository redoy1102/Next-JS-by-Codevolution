import Link from "next/link";

const metadata = () => {
    return {
        title: "Products"
    }
}
export {metadata};

const Products = () => {
    return (
        <div>
            <div className="flex justify-center items-center">
                <h1 className="text-4xl bg-green-600 text-red-600 font-bold mb-3">All Products</h1>
            </div>

            <div className="flex justify-between gap-4">
                <Link href='products/1'>Product-1</Link>
                <Link href='products/2'>Product-2</Link>
                <Link href='products/3'>Product-3</Link>
            </div>
        </div>
    )
}

export default Products;