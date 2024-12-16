import Link from "next/link";

const ProductDetailsLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <Link href='/products' className="text-5xl bg-green-600 text-red-600 font-bold mb-3 underline">Back</Link>
            </div>
            {children}
        </>
    )
}

export default ProductDetailsLayout;