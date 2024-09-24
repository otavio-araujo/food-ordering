import products from "@/assets/data/products";
import ProductListItem from "@/src/components/Product/ProductListItem";

export default function MenuScreen() {
  return (
    <>
      <ProductListItem product={products[1]} />
      <ProductListItem product={products[3]} />
    </>
  );
}
