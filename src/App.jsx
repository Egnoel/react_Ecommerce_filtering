import { useState } from 'react';
import './index.css';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/data';
import Card from './components/Card';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState('');
  const handleInputChange = (event) => setQuery(event.target.value);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (event) => setSelectedCategory(event.target.value);
  const handleClick = (event) => setSelectedCategory(event.target.value);

  const filteredData = (products, selected, query) => {
    let filtered = products;
    if (query) filtered = filteredProducts;
    if (selected) {
      filtered = filtered.filter(
        ({ category, color, title, newPrice, company }) =>
          category === selected ||
          color === selected ||
          title === selected ||
          newPrice === selected ||
          company === selected
      );
    }
    return filtered.map(
      ({ img, title, starCount, newPrice, reviews, prevPrice }, index) => (
        <Card
          key={index}
          img={img}
          title={title}
          starCount={starCount}
          prevPrice={prevPrice}
          newPrice={newPrice}
          reviews={reviews}
        />
      )
    );
  };

  const result = filteredData(products, selectedCategory, query);
  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
}

export default App;
