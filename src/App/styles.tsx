import { Box, buttonClasses, styled } from "@mui/material";

const AppComponentName = "App Component";
export const AppComponent = styled(Box, { name: AppComponentName })(() => ({
  backgroundColor: "black",
  height: "auto",
  paddingBottom: 50,
  [`& .${buttonClasses.root}`]: {
    marginLeft: 20,
    fontSize: 15,
    fontFamily: "cursive",
    backgroundColor: "#39ed90",
    color: "white",
    borderRadius: 25,
  },
}));
