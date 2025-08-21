import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Logo from './components/Logo/Logo'
import Nav from './components/Nav/Nav'
import ProductList from './components/ProductList/ProductList'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample products data
  const allProducts = [
    { id: 1, title: 'Wireless Headphones', price: '$99.99', category: 'electronics' },
    { id: 2, title: 'Cotton T-Shirt', price: '$24.99', category: 'clothing' },
    { id: 3, title: 'JavaScript Guide', price: '$39.99', category: 'books' },
    { id: 4, title: 'Garden Tools Set', price: '$79.99', category: 'home' },
    { id: 5, title: 'Running Shoes', price: '$129.99', category: 'sports' },
    { id: 6, title: 'Smartphone Case', price: '$19.99', category: 'electronics' }
  ];

  // Filter products based on search and category
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Header />
      <Nav />
      <Logo />
      <main style={{ display: 'flex', padding: '2rem', gap: '2rem', minHeight: '60vh' }}>
        <Sidebar onSearch={handleSearch} onCategoryChange={handleCategoryChange} />
        <ProductList products={filteredProducts} />
      </main>
      <Footer />
    </>
  )
}

export default App
