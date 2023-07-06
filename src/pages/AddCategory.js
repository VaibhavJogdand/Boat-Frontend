import { Box, Button, Grid, TextField, Typography, Chip } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Axios from "../Axios";
import { useState } from "react";

const validationSchema = yup.object({
	name: yup.string("Enter your name").required("name is required"),
	// .name("Enter a valid name")
	imgUrl: yup.string("Enter your price").required("price is required"),
	// .min(8, "price should be of minimum 8 characters length")
});

function AddCategory() {
	const [tempTag, setTempTag] = useState("");
	const [tags, setTags] = useState([]);

	const formik = useFormik({
		initialValues: {
			name: "",
			imgUrl: "",
			features: [],
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
			const data = {
				name: values.name,
				imgUrl: values.imgUrl,
				tags: tags,
			};
			Axios.post("/category/add-new-category", data)
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

	const addTags = () => {
		if (!tags.includes(tempTag)) setTags((prevVal) => [...prevVal, tempTag]);
	};

	return (
		<div>
			<Box sx={{ width: "60%", margin: "auto", mt: 5 }}>
				<Typography variant="h4">Add New Category</Typography>
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
								id="imgUrl"
								name="imgUrl"
								label="Image Url"
								type="imgUrl"
								value={formik.values.imgUrl}
								onChange={formik.handleChange}
								error={formik.touched.imgUrl && Boolean(formik.errors.imgUrl)}
								helperText={formik.touched.imgUrl && formik.errors.imgUrl}
							/>
						</Grid>
						<Grid item xs={6}>
							<Box>
								{tags.map((tag) => {
									return (
										<Chip
											label={tag}
											//   onClick={handleClick}
											//   onDelete={handleDelete}
										/>
									);
								})}
							</Box>
						</Grid>
						<Grid item xs={6}>
							<TextField
								fullWidth
								label="Tag"
								value={tempTag}
								onChange={(e) => {
									setTempTag(e.target.value);
								}}
								error={formik.touched.color && Boolean(formik.errors.color)}
								helperText={formik.touched.color && formik.errors.color}
								size="small"
							/>
							<Button variant="outlined" size="small" onClick={addTags}>
								Add tag
							</Button>
						</Grid>
						<Grid item xs={12}>
							<Button
								color="primary"
								variant="contained"
								fullWidth
								type="submit"
							>
								Submit
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
		</div>
	);
}

export default AddCategory;
