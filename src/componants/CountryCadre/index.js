import { Grid } from "@mui/material";

const CountryCadre = ({country})=> {

    return (
    <Grid item xs={12} sm={6} md={3} lg={1}>
        <img src={country.flags.svg} style={{width:"100%"}}/>
        <div style={{display:"none"}}>
            <h2>{country.name.common}</h2>
            <h4>{country.capital}</h4>
            <h1>{country.population}</h1>
        </div>
    </Grid>)
}


export default CountryCadre;