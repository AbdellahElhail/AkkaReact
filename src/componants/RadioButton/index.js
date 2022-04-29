
import {Radio,FormLabel} from "@mui/material";
import React from "react";
import useStyles from './styles';

const RadioButton = ({val,radioButtonValue,radioHandleChange}) => {

    const style=useStyles();

    return(
    <>
    <FormLabel className={style.radioLabel} >{val}</FormLabel>  
    <Radio
      checked={radioButtonValue === val}
      onChange={radioHandleChange}
      value={val}
      className={style.radioButton}
    />
    </>
)};

export default RadioButton;