import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function PersonalInfo() {
    const signUpSchema = Yup.object().shape({
        fullname: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        dateOfBirth: Yup.date().required('Date of birth is required')
    });
	return (
		<div>
			<h1 className="block text-green-300 py-2 font-bold mb-1 ">
				Personal Information
			</h1>
			<Formik
				initialValues={{
					fullname: "",
					email: "",
					dateOfBirth: "",
				}}
                validationSchema={signUpSchema}
				onSubmit={(values, actions) => {
    
					// alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
					<label className="block text-blue-300 py-2 font-bold">
						Full Name
					</label>
					<br />
					<Field
						id="fullname"
                        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
						name="fullname"
						placeholder="John Doe"
                        
					></Field>
                    <ErrorMessage className="text-red-400 italic text-sm" name="fullname" component="div"/>
					<br />
					<label className="block text-blue-300 py-2 font-bold">
						Email Address
					</label>
					<br />
					<Field
						id="email"
                        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
						name="email"
						type="email"
						placeholder="john.doe@gmail.com"
					></Field>
                    <ErrorMessage className="text-red-400 italic text-sm"name="email" component="div"/>
					<br />
					<label className="block text-blue-300 py-1 font-bold">
						Date of Birth
					</label>
					<br />
					<Field
						id="dateOfBirth"
                        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
						name="dateOfBirth"
						type="date"
					></Field>
                    <ErrorMessage className="text-red-400 italic text-sm" name="dateOfBirth" component="div"/>
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

export default PersonalInfo;