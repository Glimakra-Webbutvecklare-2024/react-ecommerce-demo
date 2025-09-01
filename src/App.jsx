import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Products from './pages/Products';
import Profile from './pages/Profile';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/profile/:userId' element={<Profile />}></Route>
        <Route path='/*' element={<p>No Route</p>}></Route>
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default App
