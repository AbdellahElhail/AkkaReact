import styled from "styled-components";

export const CountryOverLayer = styled.div({
  display: "none",
  position: "absolute",
  backgroundColor: "rgba(0,0,0, .5)",
  top: 0,
  height: 100,
  width: 160,
  flexDirection: "column",
  justifyContent: "",
  alignItems: "center",
  borderRadius: 10,
});

export const CountryCadreBlock = styled.div({
  position: "relative",
  height: "",
  /* &: Element courant. On donne ici à un element enfant (ici CountryOverLayer) un couple de clé/valeur à changer lors d'un hover */
  [`&:hover > ${CountryOverLayer}`]: {display:"flex"}
});



export const CountryFlag = styled.img({
  height: 100,
  width: 160,
  objectFit: "cover",
  borderRadius: 10,

});

export const CountryOverLayerText = styled.span({
  fontSize: 13,
  color: "#fff",
  margin: "15px 0",
  fontFamily:"Helvetica",
});