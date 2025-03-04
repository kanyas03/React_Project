import React,{useState} from 'react'
import Navbar from '../compoents/Navbar'

function Addproduct() {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [productimg, setProductimg] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {

  //     const res = await fetch("/api/addproduct", {
  //       method: "POST",
  //       credentials: "include",
  //       headers:{
  //           'Content-Type':'application/json',
  //       },
  //       body:JSON.stringify({ProductId:productId,ProductName:productName,Category:category,Quantity:quantity,Product_img:productimg})
  //     })
  //     if (!res.ok) {
  //       throw new Error("Error adding product");
  //     }
  //       alert("Product Added Successfully!");
  //       setProductId("");
  //       setProductName("");
  //       setCategory("");
  //       setQuantity("");
  //       setProductimg("");
  //       setCourseImage(null);
  //     } 

  //    catch (error) {
  //     console.log(error);
  //     alert("Something went wrong: " + error.message);
  //   }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ProductId", productId);
    formData.append("ProductName", productName);
    formData.append("Category", category);
    formData.append("Quantity", quantity);
    formData.append("Product_img", productimg); // Image file
  
    try {
      const res = await fetch("/api/addproduct", {
        method: "POST",
        credentials: "include",
        body: formData, // No need for JSON headers
      });
  
      if (!res.ok) {
        throw new Error("Error adding product");
      }
  
      alert("Product Added Successfully!");
      setProductId("");
      setProductName("");
      setCategory("");
      setQuantity("");
      setProductimg(null);
    } catch (error) {
      console.log(error);
      alert("Something went wrong: " + error.message);
    }
  };
  
  return (
    <div className="bg-zinc-300">
    <Navbar/>
    
        <div className="bg-zinc-400 md:w-[500px] w-[280px] h-[500px] mt-10 rounded-3xl md:mx-auto drop-shadow-xl shadow-gray-950">
            <form className="md:px-24 px-5 " onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold md:text-center pt-5">Add Stock</h1><br></br>
                <label>Proudct Name :</label><br></br>
                <input type="text" className="md:w-[300px] w-[250px] bg-white rounded-l hover:border-2 " required value={productName} onChange={(e) => setProductName(e.target.value)}></input><br></br><br></br>
                <label>Proudct Id :</label><br></br>
                <input type="text" className="md:w-[300px] w-[250px] bg-white rounded-l hover:border-2 " required value={productId} onChange={(e) => setProductId(e.target.value)}></input><br></br><br></br>
                <label>Proudct Category :</label><br></br>
                <select className="md:w-[300px] w-[250px] bg-white rounded-l hover:border-2" required value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Category2">Disposible</option>
                    <option value="Category3">Non-Disposible</option>
                </select><br></br><br></br>
                <label>Quantity :</label><br></br>
                <input type="text" className="md:w-[300px] bg-white rounded-l" required value={quantity} onChange={(e) => setQuantity(e.target.value)}></input><br></br><br></br>
                <label className="font-semibold block">Product Image</label>
                <input
                    id="productImageInput"
                    className="border-2 border-black w-full p-2 mb-3"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        setProductimg(e.target.files[0]);
                    }
                    }}
                />
                <button className="bg-zinc-500 md:w-[300px] w-[250px] h-10 rounded-3xl font-bold">Add Stock</button>
            </form>
        </div>
    </div>

  )
}

export default Addproduct