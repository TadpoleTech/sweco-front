import SelectSearch from "react-select-search";
import "../styles/areaSearch.css";
import React, { useEffect, useState } from "react";

function SearchBar(props) {
  const [cities, setCities] = useState([]);
  const [suburbs, setSuburbs] = useState([]);

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

  const handleCityChange = async (value) => {
    props.onCityChange(value);
    // Fetch suburbs based on the selected city
    try {
      const response = await fetchSuburbs(value);
      setSuburbs([...new Set(response)]);
    } catch (error) {
      console.error('Error fetching suburbs:', error);
    }
  };

  const fetchSuburbs = async (city) => {
    try {
      const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: "data=" + encodeURIComponent(`
          [out:json][timeout:3000];
          area["name"="${city}"]->.searchArea;
          (
            nwr[place="town"](area.searchArea);
            nwr[place="suburb"](area.searchArea);
          );
          out geom;
        `)
      });
      if (!response.ok) {
        throw new Error('Failed to fetch suburbs');
      }
      const data = await response.json();
      return data.elements.map(element => element.tags.name);
    } catch (error) {
      throw new Error('Error fetching suburbs:', error);
    }
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
        placeholder="City"
        onChange={handleCityChange}
      />
      <SelectSearch
        options={suburbs.map(suburb => ({ name: suburb, value: suburb }))}
        search={true}
        value={props.subArea}
        name="subarea"
        onChange={handleSubAreaChange}
        placeholder="Suburb"
      />
    </div>
  );
}

export default SearchBar;
