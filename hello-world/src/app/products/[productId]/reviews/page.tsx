const Reviews = ({params}: {
    params: {productId: string}
}) => {
    return (
        <div>
            <h1>All the reviews of Product - {params.productId}</h1>

            <h1>Review-1</h1>
            <h1>Review-2</h1>
            <h1>Review-3</h1>
        </div>
    )
}

export default Reviews;