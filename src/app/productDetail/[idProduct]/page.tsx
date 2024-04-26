
import { ProductContainer } from "@ui/organisms";

export default function ProductDetail({ params } : { params: { idProduct: string } }) {
  return (
      <ProductContainer idProduct={Number(params.idProduct)} />
  );
}
