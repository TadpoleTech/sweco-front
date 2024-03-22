import { useState } from "react";
import SelectSearch from "react-select-search";
import "../styles/areaSearch.css";

const cities = [
  { name: "Helsinki", value: "helsinki" },
  { name: "Vantaa", value: "vantaa" },
  { name: "Espoo", value: "espoo" },
];

const regions = {
  helsinki: [
    { name: "Kallio", value: "kallio" },
    { name: "Kamppi", value: "kamppi" },
  ],
  vantaa: [
    { name: "Korso", value: "korso" },
    { name: "Tikkurila", value: "tikkurila" },
    { name: "Myyrmäki", value: "myyrmaki" },
  ],
  espoo: [
    { name: "Leppävaara", value: "leppavaara" },
    { name: "Tapiola", value: "tapiola" },
    { name: "Matinkylä", value: "matinkyla" },
  ],
};

function SearchBar() {
  const [selectedCity, setSelectedCity] = useState("helsinki");

  const handleCityChange = (value) => {
    setSelectedCity(value);
  }

  return (
    <div>
      <SelectSearch
        options={cities}
        value={selectedCity}
        name="language"
        placeholder="Choose your language"
        onChange={handleCityChange}
      /><SelectSearch
        options={regions[selectedCity]}
        name="language"
        placeholder="Choose your language"
      />
    </div>
  );
}

export default SearchBar;
