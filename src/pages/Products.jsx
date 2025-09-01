import { useState, useEffect } from "react";

import Main from "../components/Main/Main";
import ProductList from "../components/ProductList/ProductList";
import SearchInput from '../components/SearchInput/SearchInput';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';

function Products() {
      // Vill spara användarens söksträng
  // State-varibel
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]);

  useEffect(() => {
          fetch('https://dummyjson.com/products')
                  .then(res => res.json())
                  .then(data => setProducts(data.products))
  }, []);

  // Filtera products med avseende på searchTerm
  const filteredProducts = products.filter(product => { 
                                            const isMatchingTitle = product.title.toLowerCase().includes(searchTerm.toLowerCase());
                                            
                                            // om selectedCategory är 'all' behöver vi inte 
                                            // filtrera på categories (eftersom alla ska med)
                                            if (selectedCategory === 'all') {
                                              return isMatchingTitle;
                                            }

                                            const isMatchingCategory = product.category.includes(selectedCategory);
                                            return isMatchingTitle && isMatchingCategory;
                                          });


  const categories = ['all', 'electronics', 'clothing', 'home', 'sports'];

  console.log(products);
    return (<>
    <Main a={10}>

      <aside>
        <h2>Filtrera</h2>
        {/* Vill isolera detta till en egen komponent: SearchInput */}
        <SearchInput setSearchTerm={setSearchTerm} />

        <h3>Categories</h3>
        <CategoryFilter categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

      </aside>

      <h2>Products</h2>

      {/* Vill isolera detta till en egen komponent: ProductList */}
      <ProductList products={filteredProducts} />
    </Main>
    </>
    )
}

export default Products;