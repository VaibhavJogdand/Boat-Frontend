import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

import logo from "../images/login_logo.png";
import firebase from "../firebase";

const RootBox = styled(Box)(({ theme }) => ({
	display: "flex",
	width: "25%",
	alignItems: "center",
	flexDirection: "column",
	margin: "auto",
	justifyContent: "center",
	height: "100vh",
}));

function Login() {
	// signInWithPopup(auth, provider)
	// 	.then((result) => {
	// 		// This gives you a Google Access Token. You can use it to access the Google API.
	// 		const credential = GoogleAuthProvider.credentialFromResult(result);
	// 		const token = credential.accessToken;
	// 		// The signed-in user info.
	// 		const user = result.user;
	// 		// IdP data available using getAdditionalUserInfo(result)
	// 		// ...
	// 	})
	// 	.catch((error) => {
	// 		// Handle Errors here.
	// 		const errorCode = error.code;
	// 		const errorMessage = error.message;
	// 		// The email of the user's account used.
	// 		const email = error.customData.email;
	// 		// The AuthCredential type that was used.
	// 		const credential = GoogleAuthProvider.credentialFromError(error);
	// 		// ...
	// 	});

	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider);
	};

	return (
		<RootBox>
			<Box>
				<img src={logo} alt="" />
			</Box>

			<Box
				sx={{
					display: "flex",
					alignItems: "left",
					flexDirection: "column",
					mt: 7,
					width: "100%",
				}}
			>
				<Typography variant="h5" fontWeight="bold">
					Login
				</Typography>
				<Box
					sx={{ mt: 1 }}
					sx={{
						display: "flex",
						alignItems: "left",
					}}
				>
					<Typography fontWeight="bold" sx={{ mr: 1 }}>
						New to boAt?
					</Typography>

					<Link to="/signup" sx={{ TextDecoder: "none" }}>
						<Typography>Create an account</Typography>
					</Link>
				</Box>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					mt: 7,
				}}
			>
				<TextField
					id="outlined-basic"
					label="Mobile Number"
					variant="outlined"
					fullWidth
				/>
				<Box sx={{ mt: 3 }}>
					<Button
						variant="contained"
						color="secondary"
						fullWidth
						size="large"
						fontWeight="bold"
						onClick={() => handleGoogleSignIn()}
					>
						send otp
					</Button>
				</Box>
			</Box>
		</RootBox>
	);
}

export default Login;
