import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Error from "./Components/Error";
import Signup from "./Components/Signup";
function App() {
	return (
		<div className="bg-veryLightGray backGroundImage">
			<Header />
			<RouterProvider router={appRouter} />
			<Footer />
		</div>
	);
}

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		errorElement: <Error />,
	},
	{
		path: "/form",
		element: <Form />,
		errorElement: <Error />,
	},
	{
		path: "/signupForm",
		element: <Signup />,
	},
]);

export default App;
