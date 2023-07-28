// this will automatically import the entire JSON file and store it in this data.
// import SHOP_DATA from '../../shop-data.json';
// instead of relying on SHOP DATA I will replace it to use the context i just created
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../Components/Product-card/Product-card";
import './Shop.styles.scss';

export default function Shop() {
    const {products} = useContext(ProductsContext)
    return (
        <div className="products-container">
            {
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    )
}