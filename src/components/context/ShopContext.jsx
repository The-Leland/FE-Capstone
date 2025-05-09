import { useState, createContext, useEffect } from "react";
export const ShopContext = createContext();

export default function ShopProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    function addCart(product, quantity) {
        const addProduct = {
            product: product, quantity: quantity, id: product.id
        }
        console.log(addProduct)
        setCart(prevState => [...prevState, addProduct] )
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then((data) => {
            setProducts(data);
            console.log("Products fetched from API:", data);
          })
          .catch((error) => {
            console.error("Failed to fetch products:", error);
          });
      }, []);

      console.log("📦 Products in context:", products);

    const shopState = {
        products, setProducts, cart, setCart, addCart
    }

    return (
        <ShopContext.Provider value={shopState}>{children}</ShopContext.Provider>
    );
}


