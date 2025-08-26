import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Logo from "./components/Logo/Logo";
import ProductList from "./components/ProductList/ProductList";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample products data
  const allProducts = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: "$99.99",
      category: "electronics",
      productImage: "https://www.kjell.com/globalassets/productimages/898881_60940_01_m045n--_00.jpg?ref=C6C6202FE9&format=jpg&w=1280&h=1280&mode=max"
    },
    { 
      id: 2, 
      title: "Cotton T-Shirt", 
      price: "$24.99", 
      category: "clothing",
      productImage: "https://www.titus-shop.com/cdn/shop/files/salba_tiger_redux_white_vorderansicht.jpg?format=webp&v=1724675045&width=1214"
    },
    { 
      id: 3, 
      title: "JavaScript Guide", 
      price: "$39.99", 
      category: "books",
      productImage: "https://m.media-amazon.com/images/I/61yVFD4iGQL._UF1000,1000_QL80_.jpg"
    },
    { 
      id: 4, 
      title: "Garden Tools Set", 
      price: "$79.99", 
      category: "home",
      productImage: "https://m.media-amazon.com/images/I/61bNJhMmFoL.jpg"
    },
    { 
      id: 5, 
      title: "Running Shoes", 
      price: "$129.99", 
      category: "sports",
      productImage: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1743689444-mhl-run-shoes-puma-410-67ee96da42c5e.jpg?crop=1xw:1xh;center,top&resize=980:*" 
    },
    {
      id: 6,
      title: "Smartphone Case",
      price: "$19.99",
      category: "electronics",
      productImage: "https://sfycdn.speedsize.com/19464703-36eb-4c15-80b7-604735fdf8c8/eu.mous.co/cdn/shop/files/G25Launch_HeroMobile012x.jpg?v=1755601669&width=800"
    },
  ];

  // Filter products based on search and category
  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
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
      {/* <Logo /> */}
      {/* <HeroSection /> */}
      <div className="my-32"></div>
      <ProductCarousel products={allProducts} />
      <div className="flex justify-center my-16">
        <div className="ml-8 border-b w-64 border-black"></div>
      </div>
      <main className="flex gap-8 p-8 max-w-screen overflow-x-auto box-border">
        <Sidebar
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
        />
        <div className="flex-1 min-w-0">
          
          <div className="overflow-x-auto">
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
