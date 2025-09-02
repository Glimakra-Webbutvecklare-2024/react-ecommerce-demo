import { useState, useEffect } from "react";

import Main from "../components/Main/Main";
import ProductList from "../components/ProductList/ProductList";
import SearchInput from '../components/SearchInput/SearchInput';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';

// Uppgift 1:
// använd useParams och routen /products/:category
// För att hämta produkter baserat på kategorie
// T.ex /products/beauty ska ge produkter från beauty

// Uppgift 2:
// Använd api dokumentationen https://dummyjson.com/ för att
// Hämta alla kategorier med useEffect och fetch
// spara det state-variabel: categories

// Uppgift 3:
// Ändring av kategori på sidan ska automatiskt ladda in nya produkter
// med angiven kategori
// T.ex användare skiftar från 'all' till 'beauty' och nya produkter laddas in


function Products() {
      // Vill spara användarens söksträng
  // State-varibel
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]);

  useEffect(() => {
          fetch('https://dummyjson.com/products') // denna raden kommer ändras
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