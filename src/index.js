import axios from "axios";
import { createRoot } from "react-dom/client";

import Config from "./config.js";
import MainPage from "./components/mainpage.jsx";

console.log(Config.adopteAPIUrl);
axios.get(
	new URL("/users",Config.adopteAPIUrl).href,{}
).then((data) => {
	console.log(data);
	let root = createRoot(document.querySelector(".main"));
	root.render(<MainPage />);
})
.catch((error) => {
	throw new Error(error)
})