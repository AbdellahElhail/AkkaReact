import { Slider, Box } from "@mui/material";

import useStyles from "./styles";
import CountryCadre from "../../componants/CountryCadre";
import RadioButton from "../../componants/RadioButton";
import useCountryList from "../../hooks/useCountryList";
import CountriesContext from "../../appContexts/CountriesContext";

const Home = () => {
  const style = useStyles();
  const [
    radioButtonValue,
    sliderValue,
    countries,
    continantList,
    { radioHandleChange, SliderHandleChange },
  ] = useCountryList();

  return (
    <>
      <Box className={style.container}>
        <Box className={style.slider}>
          <Slider
            defaultValue={sliderValue}
            marks={true}
            step={5}
            onChange={SliderHandleChange}
          />
        </Box>
        {continantList.map((val) => (
          <RadioButton
            val={val}
            radioButtonValue={radioButtonValue}
            radioHandleChange={radioHandleChange}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: 3,
        }}
      >
        {countries
          .filter((elem) => radioButtonValue == elem.region)
          .sort((a, b) => a.population - b.population)
          .slice(0, sliderValue)
          .map((element) => (
            <CountryCadre key={element.name.common} country={element} />
          ))}
      </Box>
    </>
  );
};

export default Home;
