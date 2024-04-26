import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
	return (
		<>
			<Link
				to="/login"
				className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-1 duration-300 ease-in-out fixed top-0 left-0 w-full z-50 shadow-md px-4 py-2 flex items-center justify-end"
			>
				Logout
			</Link>
			<h1>Welcome, username</h1>
            <p>This is a RevoU Library where you can see all RevoU collection.</p>
            <button className=" text-sm mx-auto mt-5 mb-5 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">Click here to see RevoU collection</button>

		</>
	);
}

export default Dashboard;
