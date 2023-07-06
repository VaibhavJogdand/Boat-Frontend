import axios from "axios";

const Axios = axios.create({
	baseURL: "http://localhost:4000/api", // Replace with your Node.js backend URL
	// You can add other default configurations here, such as headers
});

export default Axios;
