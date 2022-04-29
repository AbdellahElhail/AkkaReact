import { CountryCadreBlock, CountryFlag, CountryOverLayer, CountryOverLayerText } from "./styles";

const CountryCadre = ({ country }) => {
  return (
    <CountryCadreBlock >
      <CountryFlag
        src={country.flags.svg}
        alt={`${country.name.common} Flag`}
      />
      <CountryOverLayer>
        <CountryOverLayerText>{country.name.common}</CountryOverLayerText>
        <CountryOverLayerText>{country.capital}</CountryOverLayerText>
        <CountryOverLayerText>{country.population}</CountryOverLayerText>
      </CountryOverLayer>
    </CountryCadreBlock>
  );
};

export default CountryCadre;
