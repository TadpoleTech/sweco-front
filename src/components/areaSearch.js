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

function SearchBar(props) {

  const handleCityChange = (value) => {
    props.onCityChange(value);
  }

  const handleSubAreaChange = (value) => {
    props.onSubAreaChange(value);
  }

  return (
    <div>
      <SelectSearch
        options={cities}
        value={props.city}
        name="city"
        placeholder="Choose your city"
        onChange={handleCityChange}
      /><SelectSearch
        options={regions[props.city]}
        value={props.subArea}
        name="subarea"
        onChange={handleSubAreaChange}
        placeholder="Choose your subarea"
      />
    </div>
  );
}

export default SearchBar;
