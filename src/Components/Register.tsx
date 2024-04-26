import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPassword] = useState("");

	const navigate = useNavigate();

	const onSubmit = async (values: {
		name: string;
		email: string;
		password: string;
	}) => {
		const response = await fetch(
			"https://library-crud-sample.vercel.app/api/user/register",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: values.name,
					email: values.email,
					password: values.password,
				}),
			}
		);

		console.log("response register", response);
		const result = await response.json();

		try {
			if (!response.ok) {
				alert("Register failed");
			} else {
				console.log("response success", result);
				alert("Register success");
				navigate("/login");
			}
		} catch (error) {
			alert(error);
		}
	};

	const signUpSchema = Yup.object().shape({
		name: Yup.string().required("Required"),
		email: Yup.string().email("Invalid email").required("Email is required"),
		password: Yup.string()
		.required("Password is required"),
		// .min(8, "Password must be at least 8 characters long")
		// .matches(/[a-z]/, "Password must contain at least one lowercase letter")
		// .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
		// .matches(/\d/, "Password must contain at least one number"),
	});
	return (
		<div>
			<h1 className="block text-green-300 py-2 font-bold mb-1 ">
				Create Account
			</h1>
			<Formik
				onSubmit={onSubmit}
				initialValues={{
					name: "",
					email: "",
					password: "",
				}}
				validationSchema={signUpSchema}
				// onSubmit={(values, actions) => {
				// 	// alert(JSON.stringify(values, null, 2));
				// }}
			>
				<Form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
					<label className="block text-blue-300 py-2 font-bold">
						Full Name
					</label>
					<br />
					<Field
						// onChange={(e: any) => setName(e.target.value)}
						// id="name"
						className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
						name="name"
						placeholder="John Doe"
					></Field>
					<ErrorMessage
						className="text-red-400 italic text-sm"
						name="name"
						component="div"
					/>
					<br />
					<label className="block text-blue-300 py-2 font-bold">
						Email Address
					</label>
					<br />
					<Field
						// onChange={(e: any) => setEmail(e.target.value)}
						// id="email"
						className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
						name="email"
						type="email"
						placeholder="john.doe@gmail.com"
					></Field>
					<ErrorMessage
						className="text-red-400 italic text-sm"
						name="email"
						component="div"
					/>
					<br />
					<label className="block text-blue-300 py-1 font-bold">Password</label>
					<br />
					<Field
						// onChange={(e: any) => setPassword(e.target.value)}
						// id="password"
						className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
						name="password"
						type="password"
						placeholder="Create a password"
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
							Sign Up
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	);
}
export default Register;
