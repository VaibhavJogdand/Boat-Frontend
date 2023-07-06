import logo from "./images/logo.svg";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Switch,
} from "react-router-dom";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import AddCategory from "./pages/AddCategory";
import Product from "./pages/Product";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Topbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/add-product" element={<AddProduct />} />
					<Route path="/add-category" element={<AddCategory />} />
					<Route path="/product/:id" element={<Product />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
