import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import Axios from "../Axios";
import { useParams } from "react-router-dom";

function Product() {
	const { id } = useParams();
	const [product, setProduct] = useState();

	useEffect(() => {
		Axios.get(`/product/get-product/${id}`)
			.then((res) => {
				setProduct(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const RootBox = styled(Box)({
		padding: "20px",
	});

	const handleAddToCart = () => {};

	return (
		<RootBox>
			<Box>
				<Grid container>
					<Grid item xs={5}>
						<Box>
							{product && (
								<img
									src={product.image}
									alt=""
									width={500}
									style={{ borderRadius: "10px" }}
								/>
							)}
						</Box>
					</Grid>
					<Grid item xs={7}>
						<Box>
							<Typography variant="h4" fontWeight={"semiBold"}>
								{product && product.name}
							</Typography>
							<Box sx={{ width: "50%", mt: 5 }}>
								<Button
									variant="contained"
									sx={{ borderRadius: "20px" }}
									fullWidth
									onClick={handleAddToCart()}
								>
									Add To Cart
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</RootBox>
	);
}

export default Product;
