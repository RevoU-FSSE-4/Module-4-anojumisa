import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddressInfo() {
	const signUpSchema = Yup.object().shape({
		streetAddress: Yup.string().required("Street address is required"),
		city: Yup.string().required("City is required"),
		state: Yup.string().required("State is required"),
		zipCode: Yup.string()
			.required("ZIP code is required")
			.trim("Please remove leading/trailing spaces")
			.matches(/^\d{5}$/, "ZIP code must be 5 digits"),
	});
	return (
		<div>
			<h1 className="block text-green-300 py-2 font-bold mb-1 ">
				Address Information
			</h1>
			<Formik
				initialValues={{
					streetAddress: "",
					city: "",
					state: "",
					zipCode: "",
				}}
				validationSchema={signUpSchema}
				onSubmit={(values, actions) => {
					// alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
					<label className="block text-blue-300 py-2 font-bold">
						Street Address
					</label>
					<br />
					<Field
						id="streetAddress"
						className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
						name="streetAddress"
						placeholder="Enter your street address"
					></Field>
					<ErrorMessage
						className="text-red-400 italic text-sm"
						name="streetAddress"
						component="div"
					/>
					<br />
					<label className="block text-blue-300 py-2 font-bold">City</label>
					<br />
					<Field
						id="city"
						className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
						name="city"
						type="text"
						placeholder="Enter your city"
					></Field>
					<ErrorMessage
						className="text-red-400 italic text-sm"
						name="city"
						component="div"
					/>
					<br />
					<label className="block text-blue-300 py-2 font-bold">State</label>
					<br />
					<Field
						id="state"
						className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
						name="state"
						type="text"
						placeholder="Enter your state"
					></Field>
					<ErrorMessage
						className="text-red-400 italic text-sm"
						name="state"
						component="div"
					/>
					<br />
					<label className="block text-blue-300 py-2 font-bold">ZIP Code</label>
					<br />
					<Field
						id="zipCode"
						className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
						name="zipCode"
						type="number"
						placeholder="Enter your ZIP Code"
					></Field>
					<ErrorMessage
						className="text-red-400 italic text-sm"
						name="zipCode"
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

export default AddressInfo;
