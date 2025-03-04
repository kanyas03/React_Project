
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList.jsx'
import Addproduct from './pages/Addproduct.jsx'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'

function App() {


  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<SignUp/>} />
    <Route path='/login' element={<Login/>} />
    <Route path="/home" element={<Home />} /> 
    <Route path="/products" element={<ProductList />} />
    <Route path="/addproduct" element={<Addproduct/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
