import React, { useState } from "react";
import axios from "axios";

function SearchBar() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const apiKey = "YOUR_API_KEY_HERE";
    const response = await axios.get(apiUrl);
    setSearchResults(response.data.hits);
  };

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit} className="flex py-2">
        <input
          className="px-4 py-2 border border-gray-400 rounded-l-md w-full"
          type="text"
          placeholder="Rechercher"
          value={searchQuery}
          onChange={handleSearchInput}
        />
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-r-md">
          Rechercher
        </button>
      </form>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {searchResults.map((result) => (
          <img key={result.id} src={result.webformatURL} alt={result.tags} />
       
        ))}
  </div>
  </div>


  )
        };