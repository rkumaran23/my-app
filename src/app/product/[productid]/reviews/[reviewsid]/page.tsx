export default function ReviewId({params }: {
    params: {
        productid: string
        reviewsid: string
    }
}) {
    return(
        <>
        <h1> Review {params.reviewsid} for product {params.productid}</h1>
        </>
    )
}