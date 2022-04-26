import {Radio,FormLabel,Slider,Box, Container, Grid} from "@mui/material";
import { useEffect, useState } from "react";
import useStyles from './styles';
import axios from 'axios';
import CountryCadre from "../../componants/CountryCadre";

const Home = () => {
  const [radioButtonValue, setRadioButtonValue] = useState("a");
  const [sliderValue, setSliderValue] = useState(20);
  const [countries, setCountriesData] = useState([]);

  const radioHandleChange = (event) => {
    setRadioButtonValue(event.target.value);
  };

  const SliderHandleChange = (event) => {
    setSliderValue(event.target.value);
  };
  const style=useStyles();
  const continantList = ["Africa", "America", "Asia", "Europe", "Oceania"];


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then((res) => 
      {
        setCountriesData(res.data);
      });
  }, [])



  const radioComponant=(val)=>(
        <>
        <FormLabel className={style.radioLabel} >{val}</FormLabel>  
        <Radio
          checked={radioButtonValue === val}
          onChange={radioHandleChange}
          value={val}
          className={style.radioButton}
        />
        </>
  );


  return (
    
  <>
    <Box   className={style.container}>
      <Box className={style.slider}>
      <Slider
            defaultValue={sliderValue}
            marks={true}
            step={5}
            onChange={SliderHandleChange}
        />
      </Box>
      {continantList.map((val) => radioComponant(val))}
    </Box>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={ 4 } columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
      {
        countries.map((element, index) =>(
          <CountryCadre key={index} country={element}/>))
      }
    </Grid>
    </Box>
    
  </>
  );
};

export default Home;
