import React, { useState, useEffect } from "react";
import Navbar from '../compoents/Navbar'

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orderdetails");
        const data = await res.json()
        setOrders(data);
      } catch (error) {
        console.error("Error fetching Orders:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-5 p-4">
        <h1 className="font-extrabold text-2xl text-center mb-4">📦 Orders List</h1>

        {loading ? (
          <p className="text-center text-lg">Loading orders...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : orders.length === 0 ? (
          <p className="text-center text-lg">No orders available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="border-collapse border border-gray-700 w-full text-sm md:text-md">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-3 border border-gray-600">Order ID</th>
                  <th className="p-3 border border-gray-600">Product Name</th>
                  <th className="p-3 border border-gray-600">Quantity</th>
                  <th className="p-3 border border-gray-600">Order Date</th>
                  <th className="p-3 border border-gray-600">User ID</th>
                  <th className="p-3 border border-gray-600">User Name</th>
                  <th className="p-3 border border-gray-600">Department</th>
                  <th className="p-3 border border-gray-600">Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.orderId} className="border-gray-600 border hover:bg-gray-100">
                    <td className="p-3 border border-gray-500">{order.orderId || "N/A"}</td>
                    <td className="p-3 border border-gray-500">{order.productName || "N/A"}</td>
                    <td className="p-3 border border-gray-500">{order.quantity || "N/A"}</td>
                    <td className="p-3 border border-gray-500">{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td className="p-3 border border-gray-500">{order.userDetails?.userId || "N/A"}</td>
                    <td className="p-3 border border-gray-500">{order.userDetails?.userName || "N/A"}</td>
                    <td className="p-3 border border-gray-500">{order.userDetails?.department || "N/A"}</td>
                    <td className="p-3 border border-gray-500">{order.userDetails?.phone || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderDetails;
