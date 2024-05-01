import { makeStyles } from "@material-ui/core";
import { primaryColor, primaryFonts } from "../../constants/theme";

const useStyles = makeStyles(() => ({
  homeContainer: {
    margin: "30px",
  },
  actionItems: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userListEdit: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: "10px",
    padding: "8px 12px",
    margin: "10px",
    backgroundColor: primaryColor.lightBlue,
    fontFamily: primaryFonts.sourceSansPro,
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
  },
  userListDeleteItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: "10px",
    padding: "8px 12px",
    margin: "10px",
    backgroundColor: primaryColor.danger,
    fontFamily: primaryFonts.sourceSansPro,
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
  },
  userListDelete: {
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },
  loader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  containerRoot: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
  },
  headerCell: {
    fontWeight: "bold",
    backgroundColor: primaryColor.lightBlue,
    padding: "10px",
    color: primaryColor.white,
  },
  tableRow: {
    textAlign: "left",
    fontFamily: primaryFonts.sourceSansPro,
  },
  closed: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: primaryColor.danger,
    color: primaryColor.white,
    fontFamily: primaryFonts.sourceSansPro,
    fontWeight: "bold",
  },
  inprogress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: primaryColor.yellow,
    color: primaryColor.white,
    fontFamily: primaryFonts.sourceSansPro,
    fontWeight: "bold",
  },
  open: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: primaryColor.lightBlue,
    color: primaryColor.white,
    fontFamily: primaryFonts.sourceSansPro,
    fontWeight: "bold",
  },
  createContainer: {
    border: "none",
    borderRadius: "2px",
    width: "15%",
    padding: "8px 10px",
    marginBottom: "10px",
    backgroundColor: primaryColor.lightBlue,
    fontFamily: primaryFonts.sourceSansPro,
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  // Media queries for responsiveness
  "@media (max-width: 768px)": {
    userListEdit: {
      fontSize: "12px",
      margin: "15px",
    },
    userListDelete: {
      fontSize: "13px",
    },
    tableRow: {
      padding: "8px",
    },
    headerCell: {
      padding: "8px",
    },
  },
}));

export default useStyles;
