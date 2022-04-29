import { useEffect, useState, useContext } from "react";
import axios from "axios";

import CountriesContext from "../../appContexts/CountriesContext";

const useCountryList = () => {
  const [radioButtonValue, setRadioButtonValue] = useState("Africa");
  const [sliderValue, setSliderValue] = useState(20);
  const [countries, setCountriesData] = useState([]);

  const { setCountriesCount } = useContext(CountriesContext);

  const radioHandleChange = (event) => {
    setRadioButtonValue(event.target.value);
  };

  const SliderHandleChange = (event) => {
    setSliderValue(event.target.value);
  };

  const continantList = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountriesData(res.data);
      setCountriesCount(res.data.length)
      console.log(res.data);
      console.log("useEffect");
    });
  }, []);

  return [
    radioButtonValue,
    sliderValue,
    countries,
    continantList,
    {
      setCountriesData,
      radioHandleChange,
      SliderHandleChange,
    },
  ];
};

export default useCountryList;
