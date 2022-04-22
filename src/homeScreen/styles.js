import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  radioButton: {
    color: "#61dafb",
  },
  radioLabel: {
    color: "#F3F3F3 !important", //Déconseillé d'utiliser !important: Ecrase toutes les règles css
  },
  slider: {
    width: "15%",
    marginRight: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#282c34",
    borderRadius: 10,
    height: 40,
  },
}));
