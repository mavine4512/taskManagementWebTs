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
    border: "none",
    borderRadius: "10px",
    padding: "5px 10px",
    margin: "30px",
    backgroundColor: primaryColor.lightBlue,
    fontFamily: primaryFonts.sourceSansPro,
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
  },
  userListDelete: {
    color: "#fff",
    fontSize: "15px",
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
    textAlign: "right",
    fontFamily: primaryFonts.sourceSansPro,
  },
  priorityHigh: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: primaryColor.danger,
    color: primaryColor.white,
    fontFamily: primaryFonts.sourceSansPro,
    fontWeight: "bold",
  },
  priorityNormal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: primaryColor.lightBlue,
    color: primaryColor.white,
    fontFamily: primaryFonts.sourceSansPro,
    fontWeight: "bold",
  },
  priorityLow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    backgroundColor: primaryColor.lightGray,
    fontFamily: primaryFonts.sourceSansPro,
    fontWeight: "bold",
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
