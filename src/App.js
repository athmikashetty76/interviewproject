
import {
 
  Route,

  BrowserRouter,Routes
} from "react-router-dom";
import './App.css';
import Home from "./Home/Home";


import Cart from "./Cart/Cart"



function App() {
  return (
    
  <BrowserRouter>
  <Routes>

<Route index element={<Home/>}></Route>
<Route path="/cart" element={<Cart />}></Route>



  </Routes>

</BrowserRouter>
  );
}



export default App;
