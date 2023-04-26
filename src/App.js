import { Route, Routes } from 'react-router-dom';
import './App.css';
import NabBar from './navbar/NabBar';
import ProductAll from './homepage/ProductAll';
import ProductDetail from './homepage/ProductDetail';
import Login from './homepage/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
  const [userlogin, setUserlogin] = useState(false)


  return (
    <div>
      <NabBar userlogin={userlogin} setUserlogin={setUserlogin}/>
      
      <Routes>
        <Route path='/' element={<ProductAll userlogin={userlogin} />}/>
        <Route path='/detail/:id' element={<ProductDetail/>}/>
        <Route path='/login' element={<Login setUserlogin={setUserlogin}/>}/>
      </Routes>
    </div>
  );
}

export default App;
