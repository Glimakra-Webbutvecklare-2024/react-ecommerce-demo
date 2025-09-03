import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import Main from "../components/Main/Main";
import ProductList from "../components/ProductList/ProductList";
import SearchInput from '../components/SearchInput/SearchInput';
import CategoryFilter from '../components/CategoryFilter/CategoryFilter';


// KLAR
// Uppgift 1:
// använd useParams och routen /products/:category
// För att hämta produkter baserat på kategori
// T.ex /products/beauty ska ge produkter från beauty 

// KLAR
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
  const [categories, setCategories] = useState(['all']);

  const { category } = useParams();
  const navigate = useNavigate();

  // Hämta alla kategorier vid mount
  useEffect(() => {
          fetch('https://dummyjson.com/products/categories')
                  .then(res => res.json())
                  .then(data => {
                          const rawList = Array.isArray(data) ? data : [];
                          const normalized = rawList.map(item => typeof item === 'string' ? item : (item.slug ?? item.name ?? ''))
                                                    .filter(Boolean);
                          setCategories(['all', ...normalized]);
                  })
                  .catch(() => setCategories(['all']));
  }, []);

  // Reagera på route-param och ladda produkter
  useEffect(() => {
          const activeCategory = category ?? 'all';
          setSelectedCategory(activeCategory);

          const url = activeCategory === 'all'
                  ? 'https://dummyjson.com/products'
                  : `https://dummyjson.com/products/category/${encodeURIComponent(activeCategory)}`;

          fetch(url)
                  .then(res => res.json())
                  .then(data => setProducts(data.products ?? data))
  }, [category]);

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


  // När användaren väljer kategori uppdatera URLen
  useEffect(() => {
          if (selectedCategory === 'all') {
                  navigate('/products', { replace: true });
          } else if (category !== selectedCategory) {
                  navigate(`/products/${selectedCategory}`, { replace: true });
          }
  }, [selectedCategory]);

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