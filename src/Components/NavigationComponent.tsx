import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import Register from "./Register";
import Login from "./Login";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import Category from "./Category";

function NavigationComponent() {
	return (
		<div className=" text-base  justify-end max-w-7xl px-2 sm:px-6 lg:px-8">
			<div className="fixed top-0 left-0 w-full z-50 shadow-md px-4 py-2 flex items-center justify-end">
				<Link
					to="/"
					className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
				>
					Home
				</Link>
				<Link
					to="/register"
					className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
				>
					Register
				</Link>
				<Link
					to="/login"
					className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
				>
					Login
				</Link>
			</div>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/" element={<PrivateRoute />}>
					<Route path="/dashboard" element={<Dashboard />}></Route>
					<Route path="/category" element={<Category />}></Route>
				</Route>
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default NavigationComponent;
