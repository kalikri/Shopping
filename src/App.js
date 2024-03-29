
import './App.css';
import Navbar from './components/Navbar';
import Shopstop from './components/shopstop';
import Cart from './components/Cart';
import { useState,useEffect } from 'react';
function App() {
  const[show,setShow]=useState(true);
  const [cart,setCart]=useState([]);

    const handleClick=((item)=>{
if(cart.indexOf(item)!== -1) return;
       setCart([...cart,item])
    });

    const handleChange=(item,d)=>{
      const ind=cart.indexOf(item);
      const arr=cart;
      arr[ind].amount+=d;
      if(arr[ind].amount===0) arr[ind].amount=1;
      setCart([...arr]);

        };

       
  return (
    <div className="App">
   <Navbar setShow={setShow} size={cart.length}/>
   {show ? (<Shopstop handleClick={handleClick}/> 
   ) : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
   }
    </div>
  );
}

export default App;
