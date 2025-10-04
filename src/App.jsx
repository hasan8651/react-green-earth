import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import AboutCampaign from "./components/AboutCampaign";
import Impact from "./components/Impact";
import PlantForm from "./components/PlantForm";
import Footer from "./components/Footer";
import Category from "./components/Category";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";
import Spinner from "./components/Spinner";

function App() {
  const [categories, setCategories] = useState([]);
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All Trees");
  const [cart, setCart] = useState([]);

  // Load Categories
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data.categories))
  }, []);

  // Load All Plants Initially
  useEffect(() => {
    setLoading(true);
    fetch("https://openapi.programming-hero.com/api/plants")
      .then(res => res.json())
      .then(data => {
        setPlants(data.plants);
        setLoading(false);
      });
  }, []);

  // Load Plants by Category
  const loadCategoryPlants = (id, name) => {
    setLoading(true);
    setActiveCategory(name);
    if (name === "All Trees") {
      fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => {
          setPlants(data.plants);
          setLoading(false);
        });
    } else {
      fetch(`https://openapi.programming-hero.com/api/category/${id}`)
        .then(res => res.json())
        .then(data => {
          setPlants(data.plants);
          setLoading(false);
        });
    }
  };

  // Cart functions
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar />
      <Banner />
        <div className="max-w-7xl px-4">
  <h2 className="text-center text-2xl md:text-3xl font-semibold mt-4">Choose Your Trees</h2>
  </div>

      <div className="flex flex-col md:flex-row">
        <aside className="w-1/5"> 
          <Category 
            categories={categories} 
            active={activeCategory} 
            onSelect={loadCategoryPlants} 
          />
        </aside>
        <section className="w-full">
          {loading ? <Spinner /> : <PlantList plants={plants} addToCart={addToCart} />}
        </section>
        <aside className="w-1/5">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </aside>
      </div>
      <AboutCampaign />
      <Impact />
      <PlantForm />
      <Footer />
    </>
  );
}

export default App;