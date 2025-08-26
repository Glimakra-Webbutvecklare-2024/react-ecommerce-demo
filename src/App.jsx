import { useState } from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProductList from "./components/ProductList/ProductList";
import SearchInput from './components/SearchInput/SearchInput';

function App() {
  // Vill spara användarens söksträng
  // State-varibel
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  console.log('selectedCategory', selectedCategory);

  const products = [
    { id: 1, title: 'Wireless Headphones', price: 99.99, category: 'electronics' },
    { id: 2, title: 'Cotton T-Shirt', price: 24.99, category: 'clothing' },
    { id: 3, title: 'JavaScript Guide', price: 39.99, category: 'books' },
    { id: 4, title: 'Garden Tools Set', price: 79.99, category: 'home' },
    { id: 5, title: 'Running Shoes', price: 129.99, category: 'sports' },
    { id: 6, title: 'Smartphone Case', price: 19.99, category: 'electronics' }
  ];

  // Filtera products med avseende på searchTerm
  const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()) 
                                                  && product.category.includes(selectedCategory));


  const categories = ['all', 'electronics', 'clothing', 'home', 'sports'];

  return (
    <>
    <Header />
    <Main a={10}>

      <aside>
        <h2>Filtrera</h2>
        {/* Vill isolera detta till en egen komponent: SearchInput */}
        <SearchInput setSearchTerm={setSearchTerm} />

        <h3>Categories</h3>
        <div className="category-options">
          { categories.map(category => (
            <label className="category-option"><input type="radio" value={category} checked="" name="category" onChange={evt => setSelectedCategory(evt.target.value)} /><span>{ category.toUpperCase() }</span></label>
          )) }
        </div>


      </aside>

      <h2>Products</h2>

      {/* Vill isolera detta till en egen komponent: ProductList */}
      <ProductList products={filteredProducts} />
    </Main>
    </>
  )
}

export default App
