import {
  Box,
  generateUtilityClasses,
  inputBaseClasses,
  outlinedInputClasses,
  textFieldClasses
} from "@mui/material";
import { styled } from "@mui/material/styles";

const headerComponentName = "headerComponent";

export const headerComponentClasses = generateUtilityClasses(
  "headerComponentClasses",
  ["heading", "textInput"]
);

export const HeaderComponent = styled(Box, { name: headerComponentName })(
  () => ({
    [`& .${headerComponentClasses.heading}`]: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      color: "#39ed90",
      fontSize: 30,
      fontFamily: "Cursive",
    },
    [`& .${headerComponentClasses.textInput}`]: {
      marginTop: 20,
      flexDirection: "column",
      alignItems: "center",

      [`& .${inputBaseClasses.root}`]: {
        borderRadius: 25,
        width: 300,
        fontFamily: "cursive",
      },
      [`& .${textFieldClasses.root}`]: {
        backgroundColor: "white",
        borderRadius: 25,
        position: "relative",
        "&:hover": {
          transform: "translateY(1px), translateX(10px)",
          boxShadow: "2px 2px 15px 2px  rgba(53, 219, 208, 0.7)",

          transition: "transform 1s",
        },
        [`& .${outlinedInputClasses.notchedOutline}`]: { border: "none" },
      },
    },
  })
);
