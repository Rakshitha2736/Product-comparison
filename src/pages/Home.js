import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Home.css';

function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:5000/api/products?search=${search}`);
      setResults(res.data);
    } catch (err) {
      alert('Search failed');
    }
  };

  return (
    <div className="home-container">
      <h2>Compare Products</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Enter product name"
          required
        />
        <button type="submit">Search</button>
      </form>

      {results.length > 0 && (
        <div>
          <h3>Results for "{search}":</h3>
          <ul className="product-list">
            {results.map((item, index) => (
              <li key={index} className="product-card">
                <img src={item.image} alt={item.name} width="200" /><br />
                <strong>{item.name}</strong><br />
                Price: ₹{item.price}<br />
                Quality: {item.quality}<br />
                <a href={item.link} target="_blank" rel="noopener noreferrer">Go to site</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
