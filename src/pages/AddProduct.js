import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Axios from "../Axios";

const validationSchema = yup.object({
	name: yup.string("Enter your name").required("name is required"),
	// .name("Enter a valid name")
	price: yup.number("Enter your price").required("price is required"),
	// .min(8, "price should be of minimum 8 characters length")
	color: yup.string("Enter product color"),
	category: yup.string("Enter product category"),
});

function AddProduct() {
	const [tempImg, setTempImg] = useState("");
	const [tempImages, setTempImages] = useState([]);

	const formik = useFormik({
		initialValues: {
			name: "",
			price: "",
			color: "",
			category: "",
			image: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
			const data = {
				name: values.name,
				price: values.price,
				color: values.color,
				category: values.category,
				image: tempImg,
			};
			Axios.post("/product/add-new-product", data)
				.then((response) => {
					console.log(response.data);
					// Handle successful response
				})
				.catch((error) => {
					console.error(error);
					// Handle error
				});
		},
	});

	return (
		<div>
			<Box sx={{ width: "60%", margin: "auto", mt: 5 }}>
				<Typography variant="h4">Add New Product</Typography>
				<form onSubmit={formik.handleSubmit}>
					<Grid container spacing={4}>
						<Grid item xs={6}>
							<TextField
								fullWidth
								id="name"
								name="name"
								label="Name"
								value={formik.values.name}
								onChange={formik.handleChange}
								error={formik.touched.name && Boolean(formik.errors.name)}
								helperText={formik.touched.name && formik.errors.name}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								fullWidth
								id="price"
								name="price"
								label="price"
								type="price"
								value={formik.values.price}
								onChange={formik.handleChange}
								error={formik.touched.price && Boolean(formik.errors.price)}
								helperText={formik.touched.price && formik.errors.price}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								fullWidth
								id="color"
								name="color"
								label="Color"
								value={formik.values.color}
								onChange={formik.handleChange}
								error={formik.touched.color && Boolean(formik.errors.color)}
								helperText={formik.touched.color && formik.errors.color}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								fullWidth
								id="category"
								name="category"
								label="Category"
								value={formik.values.category}
								onChange={formik.handleChange}
								error={
									formik.touched.category && Boolean(formik.errors.category)
								}
								helperText={formik.touched.category && formik.errors.category}
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								fullWidth
								id="images"
								name="Image Url"
								label="Image Url"
								value={tempImg}
								onChange={(e) => {
									setTempImg(e.target.value);
								}}
								error={formik.touched.images && Boolean(formik.errors.images)}
								helperText={formik.touched.images && formik.errors.images}
							/>
						</Grid>
						<Grid item xs={12}>
							<Button
								color="primary"
								variant="contained"
								fullWidth
								type="submit"
							>
								ADD PRODUCT
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
		</div>
	);
}

export default AddProduct;
