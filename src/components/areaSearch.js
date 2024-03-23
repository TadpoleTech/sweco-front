
import SelectSearch from "react-select-search";
import "../styles/areaSearch.css";
import React, { useEffect, useState } from "react";

function SearchBar(props) {
  const [cities, setCities] = useState([]);
  const [regions, setRegions] = useState({});

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('/cities.json');
        if (!response.ok) {
          throw new Error('Failed to fetch cities');
        }
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, []);

  const handleCityChange = (value) => {
    props.onCityChange(value);
  };

  const handleSubAreaChange = (value) => {
    props.onSubAreaChange(value);
  };

  return (
    <div>
      <SelectSearch
        options={cities.map(city => ({ name: city.city, value: city.city }))}
        search={true}
        value={props.city}
        name="city"
        placeholder="Choose your city"
        onChange={handleCityChange}
      />
      <SelectSearch
        options={regions[props.city] || []}
        search={true}
        value={props.subArea}
        name="subarea"
        onChange={handleSubAreaChange}
        placeholder="Choose your subarea"
      />
    </div>
  );
}

export default SearchBar;
