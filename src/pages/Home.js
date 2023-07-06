import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import header1 from "../images/header1.jpg";
import header2 from "../images/header2.jpg";
import header3 from "../images/header3.jpg";
import header4 from "../images/header4.jpg";
import { Box, Button, TextField, Typography, Chip } from "@mui/material";
import { useEffect } from "react";
import Axios from "../Axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		Axios.get("/product/get-all-products")
			.then((response) => {
				setProducts(response.data);
				console.log(response.data);
			})
			.catch((error) => console.error());
	}, []);
	useEffect(() => {
		Axios.get("/category/get-all-categories")
			.then((response) => {
				setCategories(response.data);
				console.log(response.data);
			})
			.catch((error) => console.error());
	}, []);

	return (
		<Box>
			<Box sx={{ height: "90vh" }}>
				<Carousel showThumbs={false} dynamicHeight={false}>
					<Box>
						<img src={header1} style={{ height: "80vh", objectFit: "cover" }} />
					</Box>
					<Box>
						<img src={header2} style={{ height: "80vh", objectFit: "cover" }} />
					</Box>
					<Box>
						<img src={header3} style={{ height: "80vh", objectFit: "cover" }} />
					</Box>
					<Box>
						<img src={header4} style={{ height: "80vh", objectFit: "cover" }} />
					</Box>
				</Carousel>
			</Box>
			<Box>
				<Box sx={{ display: "flex" }}>
					<Typography variant="h6">Explore {"   "} </Typography>
					<span> {"   "}</span>
					<Typography variant="h6" fontWeight={"bold"}>
						Categories
					</Typography>
				</Box>
				<Box sx={{ display: "flex", width: "100%", overflow: "scroll" }}>
					{categories.map((cat) => {
						return (
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
									mx: 2,
									borderRadius: "20px",
								}}
							>
								<img src={cat.imgUrl} alt="img" width={70} />
								<Typography variant="">{cat.name}</Typography>
								{/* <Box>
									{cat.tags.map((tag) => {
										return <Chip label={tag} />;
									})}
								</Box> */}
							</Box>
						);
					})}
				</Box>
			</Box>
			<Box>
				<Box sx={{ display: "flex" }}>
					<Typography variant="h6">Explore {"   "} </Typography>
					<span> {"   "}</span>
					<Typography variant="h6" fontWeight={"bold"}>
						Bestsellers
					</Typography>
				</Box>
				<Box sx={{ display: "flex", width: "100%", overflow: "scroll" }}>
					{products.map((product) => {
						return (
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
									mx: 2,
									borderRadius: "20px",
								}}
							>
								<img
									src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Ultima_Call_Packaging_1.2-removebg-preview_500x.png?v=1686963874"
									alt="img"
									width={200}
									onClick={() => {
										navigate(`/product/${product._id}`);
									}}
								/>
								<Typography variant="">{product.name}</Typography>
							</Box>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
}

export default Home;
