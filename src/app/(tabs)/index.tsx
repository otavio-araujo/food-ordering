import products from "@/assets/data/products";
import ProductListItem from "@/src/components/Product/ProductListItem";

export default function MenuScreen() {
  return (
    <>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[7]} />
    </>
  );
}
