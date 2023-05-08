
// import './App.css';


import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Navbar from './components/Navbar';
import Login from './screens/Login';
// import Signup from './screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
import Signup from './screens/SignUp';
import food_items from "./data/FoodItem"


function App() {
  return(
   
    
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
    
     

      ) 
  
}

export default App;
