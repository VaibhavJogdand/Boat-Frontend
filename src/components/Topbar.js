import React from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import logo from "../images/logo.svg";
import styled from "@emotion/styled";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";

const RootBox = styled(Paper)(({ theme }) => ({
	position: "sticky",
	display: "flex",
	padding: "20px",
}));

const SearchBar = styled(TextField)(({ theme }) => ({
	borderRadius: "20px",
}));

function Topbar() {
	const navigate = useNavigate();

	return (
		<RootBox>
			<Grid container>
				<Grid item xs={3}>
					<img src={logo} alt="" width={100} onClick={() => navigate("/")} />
				</Grid>
				<Grid item xs={6}>
					<Paper
						component="form"
						sx={{
							p: "2px 4px",
							display: "flex",
							alignItems: "center",
							width: "100%",
							borderRadius: "20px",
						}}
					>
						<InputBase
							sx={{ ml: 1, flex: 1 }}
							placeholder="Searching for..."
							inputProps={{ "aria-label": "search google maps" }}
						/>
						<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
							<SearchIcon />
						</IconButton>
						<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
						<Box sx={{ p: 1, display: "flex", justifyContent: "center" }}>
							All categories
							<KeyboardArrowDownIcon />
						</Box>
					</Paper>
				</Grid>
				<Grid
					item
					xs={3}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "right",
					}}
				>
					<ShoppingBagIcon sx={{ mx: 2 }} fontSize="large" />
					<PersonIcon
						sx={{ mx: 2 }}
						fontSize="large"
						onClick={() => {
							navigate("/login");
						}}
					/>
				</Grid>
			</Grid>
		</RootBox>
	);
}

export default Topbar;
