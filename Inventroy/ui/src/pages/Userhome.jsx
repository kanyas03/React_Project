import React, { useState, useEffect } from "react";
import Unavbar from "../compoents/Unavbar";

const UserHome = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All"); // New state for category filtering

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/getProduct");
        const data = await res.json();
        setProducts(data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Add product to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.p_Id === product.p_Id);
    if (existingItem) {
      alert("Product already in cart!");
      return;
    }

    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Product added to cart!");
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.p_category === selectedCategory);

  return (
    <div className="bg-zinc-300 ">
      <Unavbar />

      <h1 className="font-extrabold mt-10 text-center text-2xl">MEDICAL PRODUCTS</h1>

      {/* Category Filter Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button 
          className={`bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10 ${selectedCategory === "All" ? "bg-indigo-700 text-white" : "bg-gray-300"}`}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        <button 
          className={`bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10 ${selectedCategory === "Disposable" ? "bg-indigo-700 text-white" : "bg-gray-300"}`}
          onClick={() => setSelectedCategory("Disposable")}
        >
          Disposable
        </button>
        <button 
          className={`bg-indigo-950 md:w-[250px] w-[180px] text-white font-bold rounded-2xl ml-10 ${selectedCategory === "Non-Disposable" ? "bg-indigo-700 text-white" : "bg-gray-300"}`}
          onClick={() => setSelectedCategory("Non-Disposable")}
        >
          Non-disposable
        </button>
      </div>

      {/* Product Listing */}
      {loading ? (
        <h1 className="text-center mt-10 text-xl font-bold">Loading...</h1>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 p-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.p_Id} className="bg-zinc-400 p-6 rounded-2xl shadow-lg">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-xl font-bold">{product.p_Name}</h1>
                    <h1>ID: {product.p_Id}</h1>
                    <p>Available: {product.p_quantity}</p>
                  </div>
                  <img src={`data:image/jpg;base64,${product.image}`} alt={product.p_Name} className="w-24 h-24 rounded" />
                </div>
                <button
                  className="bg-indigo-950 text-white font-bold rounded-2xl w-full mt-4 py-2"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <h1 className="text-center text-xl font-bold">No products available in this category.</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default UserHome;
