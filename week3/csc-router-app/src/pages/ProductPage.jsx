import { useParams, useSearchParams } from "react-router-dom";

function ProductPage() {
  const { productId } = useParams(); // Get the productId from the URL
  const [searchParams] = useSearchParams(); // Get query parameters from the URL

  return (
    <>
      <h1>Product Page</h1>
      <h2>Product ID: {productId}</h2>
      <p>
        You searched for <i>{searchParams.get("size")}</i>
      </p>
    </>
  );
}

export default ProductPage;