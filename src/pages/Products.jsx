import { useState, useEffect } from "react";

import Main from "../components/Main/Main";
import ProductList from "../components/ProductList/ProductList";
import SearchInput from '../components/SearchInput/SearchInput';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';
import { useParams } from "react-router-dom";

// Uppgift 1: DONE
// använd useParams och routen /products/:category
// För att hämta produkter baserat på kategorie
// T.ex /products/beauty ska ge produkter från beauty

// Uppgift 2:
// Använd api dokumentationen https://dummyjson.com/ för att
// Hämta alla kategorier med useEffect och fetch
// spara det state-variabel: allCategories

// Uppgift 3:
// Ändring av kategori på sidan ska automatiskt ladda in nya produkter
// med angiven kategori
// T.ex användare skiftar från 'all' till 'beauty' och nya produkter laddas in


function Products() {
      // Vill spara användarens söksträng
      const { category } = useParams();
  // State-varibel
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || 'beauty');
  const [products, setProducts] = useState([]);

  // allCategories tar över den gamla 'categories' jobb att vara listan av kategorier
  const [allCategories, setAllCategories] = useState([]);


  useEffect(() => {
          // om ingen category är angiven använd beauty som default
          fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
                  .then(res => res.json())
                  .then(data => setProducts(data.products))
  }, []);

  useEffect(() => {
          // om ingen category är angiven använd beauty som default
          fetch('https://dummyjson.com/products/category-list')
                  .then(res => res.json())
                  .then(data => setAllCategories(data))
  }, []);

  // Filtera products med avseende på searchTerm endast
  // category filter kommer från APIet numera
  const filteredProducts = products.filter(product => { 
                                            const isMatchingTitle = product.title.toLowerCase().includes(searchTerm.toLowerCase());                                        
                                            
                                            return isMatchingTitle;
                                          });


    return (<>
    <Main>

      <aside>
        <h2>Filtrera</h2>
        <SearchInput setSearchTerm={setSearchTerm} />

        <h3>Categories</h3>
        <CategoryFilter categories={allCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

      </aside>

      <h2>Products</h2>

      {/* Vill isolera detta till en egen komponent: ProductList */}
      <ProductList products={filteredProducts} />
    </Main>
    </>
    )
}

export default Products;