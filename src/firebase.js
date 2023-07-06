import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAw_me8w_sp-G-8qggEldhDCvn71o485a8",
	authDomain: "fir-auth-demo-99bf4.firebaseapp.com",
	projectId: "e-commerce-1cc5b",
	appId: "1:825591458421:web:dd566d263ac9fad0f1663c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
