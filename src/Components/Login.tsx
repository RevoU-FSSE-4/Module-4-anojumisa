import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import Dashboard from "./Dashboard";
// import PrivateRoute from "./PrivateRoute";

function Login() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	
	const navigate = useNavigate();

	// function onSubmit() {
	// 	localStorage.setItem('isLogin', 'true');
	// 	navigate("/category");
	// }
	async function onSubmit(event: any) {
		// event.preventDefault();
		localStorage.setItem('isLogin', 'true');
		// navigate("/category");

		try {
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					"email": email,
					"password": password,
				}),
			};
			const response = await fetch(
				"https://library-crud-sample.vercel.app/api/user/login",
				options
			);
			if (!response.ok) {
				throw new Error("Network response was not okay");
			}
			const data = await response.json();
			console.log(data.token)

			const token = data.token;
			localStorage.setItem('token', token)

			setTimeout(() => {
				alert("Login Success");
				navigate("/category");
			},1000);
			
		} catch (e) {
			console.error('Error:', Error);
		}
	}

	const logInSchema = Yup.object().shape({
		email: Yup.string().email("Invalid email").required("Email is required"),
		password: Yup.string()

			.required("Password is required")
			.min(8, "Password must be at least 8 characters long")
			.matches(/[a-z]/, "Password must contain at least one lowercase letter")
			.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
			.matches(/\d/, "Password must contain at least one number")
			// .matches(/[^a-zA-Z0-9\s!@#$%^&*()]/),
	});
	return (
		<div>
			<h1 className="block text-green-300 py-2 font-bold mb-1 ">Login</h1>
			<Formik
				onSubmit={onSubmit}
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={logInSchema}
				// onSubmit={(values, actions) => {
				// 	// alert(JSON.stringify(values, null, 2));
				// }}
			>
				<Form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
					<label className="block text-blue-300 py-2 font-bold">
						Email Address
					</label>
					<br />
					<Field
						className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
						name="email"
						type="email"
						placeholder="Enter your email"
					></Field>
					<ErrorMessage
						className="text-red-400 italic text-sm"
						name="email"
						component="div"
					/>
					<label className="block text-blue-300 py-2 font-bold">Password</label>
					<br />
					<Field
						className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
						name="password"
						placeholder="Enter your password"
						type="password"
					></Field>
					<ErrorMessage
						className="text-red-400 italic text-sm"
						name="password"
						component="div"
					/>
					<br />
					<div className="flex items-center justify-between pt-4">
						<button
							
							className="mx-auto mt-5 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
							type="submit"
						>
							Log In
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
}
export default Login;
