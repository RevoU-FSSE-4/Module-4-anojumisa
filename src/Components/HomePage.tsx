import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className="container pt-22 mx-auto flex flex-wrap flex-col md:flex-row items-center">
			<h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
				Empower your full-stack development skills with the
				<br />
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
					RevoU Library{" "}
				</span>
			</h1>
			<br />
			<div className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
				<p className="text-sm">
					This comprehensive resource library is designed exclusively for RevoU
					bootcamp students, providing you with the knowledge and tools you need
					to excel in the exciting world of software engineering.
				</p>
				<div className="flex justify-between">
					<Link to="/register">
						<button className="mx-auto mt-5 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold  px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
							Sign Up
						</button>
					</Link>
                    <Link to="/login">
                    <button className="mx-auto mt-5 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold  px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
						Log in
					</button>
                    </Link>
					
				</div>
			</div>
		</div>
	);
}

export default HomePage;
