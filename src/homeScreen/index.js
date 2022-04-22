import {Radio,FormLabel,Slider,Box} from "@mui/material";
import { useState } from "react";
import useStyles from './styles';

const Home = () => {
  const [radioButtonValue, setRadioButtonValue] = useState("a");
  const [sliderValue, setSliderValue] = useState(20);

  const radioHandleChange = (event) => {
    setRadioButtonValue(event.target.value);
  };

  const SliderHandleChange = (event) => {
    setSliderValue(event.target.value);
  };
  const style=useStyles();
  const continantList = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const radioComponant=(val)=>(
        <>
        <FormLabel sx={{ color: "#F3F3F3"}} >{val}</FormLabel>  
        <Radio
          checked={radioButtonValue === val}
          onChange={radioHandleChange}
          value={val}
          className={style.radioButton}
        />
        </>
  );

  return (
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
  );
};

export default Home;
