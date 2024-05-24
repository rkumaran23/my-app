export default function ProductId({params}: {
    params:{productid:string}
}) {
    return<h1>Details about product {params.productid}</h1>;
}