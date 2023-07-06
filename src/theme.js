import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		background: {
			default: "#F4F6F8",
		},
		primary: {
			contrastText: "#FFFFFF",
			main: "#000000",
		},
		text: {
			primary: "#172b4d",
			secondary: "#6b778c",
		},
		secondary: {
			main: "#FF0000",
		},
	},
});

export default theme;
