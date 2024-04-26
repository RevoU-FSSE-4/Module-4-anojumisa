import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { Category } from "../Type/category";

export default function CategoryComponent() {
	const [showAddComponent, setShowAddComponent] = useState<boolean>(false);
	const [catResponse, setCatResponse] = useState<Category[]>([]);

	const navigate = useNavigate();

	async function getCategory() {
		const token = localStorage.getItem("token");
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer" + token,
			},
		};

		try {
			const response = await fetch(
				"https://library-crud-sample.vercel.app/api/category",
				options
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const jsonData = await response.json();
			const data = jsonData as Category[] || [];
			setCatResponse(data);
		} catch (error) {
			console.error("Error", error);
		}
	}

	async function deleteCategory(id: string) {
		const token = localStorage.getItem("token");
		const url = 'https://library-crud-sample.vercel.app/api/category/' + id;
		const options = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer' + token
			}
		};
		try {
			const response = await fetch('url', options);
			if (!response.ok){
				throw new Error('Network response was not ok');
			}
			setTimeout(() => {
				alert("Delete Success");
			}, 1000);
		} catch (error) {
			console.error('Error', error);
		}
	}

	async function createCategory(data: Category){
		
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer" + localStorage.getItem("token")
			},
			body: JSON.stringify({
				"category_name": data.category_name,
				"category_description": data.category_description,
				"is_active": true
			})
		};

		try {
			const response = await fetch(
				"https://library-crud-sample.vercel.app/api/category/create",
				options
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			setTimeout(() => {
				setShowAddComponent(false);
				alert("Create Process Success");
				getCategory();
			}, 1000);
		} catch (error) {
			console.error("Error", error);
		}

	}
	
	return (
		<div>
			<Link
				to="/login"
				className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-1 duration-300 ease-in-out fixed top-0 left-0 w-full z-50 shadow-md px-4 py-2 flex items-center justify-end"
			>
				Logout
			</Link>
			{/* <Routes>
				<Route path="/" element={< />}></Route>
                </Routes> */}
			<h2 className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
				RevoU Library
			</h2>

			{/* Table */}
			<div className="flex items-center ">
				<div className="col-span-12">
					<div className="overflow-auto lg:overflow-visible ">
						<table className="table text-gray-400 border-separate space-y-6 text-sm ">
							<thead className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
								<tr>
									<th className=" text-blue-300 py-2 font-bold">ID</th>
									<th className=" text-blue-300 py-2 font-bold">Category Name</th>
									<th className=" text-blue-300 py-2 font-bold">Category Description</th>
									<th className=" text-blue-300 py-2 font-bold">Status</th>
									<th className=" text-blue-300 py-2 font-bold">Action</th>
								</tr>
							</thead>
							<tbody>
								{catResponse.length === 0 && (
									<tr>
										<td colSpan={5}>No Data</td>
									</tr>
								)}
								{catResponse.map(item => (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>{item.category_name}</td>
										<td>{item.category_description}</td>
										<td>{String(item.is_active)}</td>
										<td className="p-3">
											<button className=" bg-yellow-400 text-black  rounded-md px-2 hover:text-red-800">
												Update
											</button>
											<button 
												className=" bg-red-400 text-black rounded-md px-2 hover:text-white"
												onClick={() => deleteCategory(item.id)}
												>
												Delete
											</button>
										</td>
									</tr>
								))}
								{/* <tr className="bg-gray-900">
									<td className="p-3">JavaScript Book</td>
									<td className="p-3 font-bold">Software Engineering</td>
									<td className="p-3">
										<span className="bg-green-400 text-black rounded-md px-2">
											available
										</span>
									</td>
									<td className="p-3">
										<button className=" bg-yellow-400 text-black  rounded-md px-2 hover:text-red-800">
											Update
										</button>
										<button className=" bg-red-400 text-black rounded-md px-2 hover:text-white">
											Delete
										</button>
									</td>
								</tr> */}
							</tbody>
						</table>
					</div>
				</div>
				<br />
			</div>
			{/* End Table */}

			<button className=" text-sm mx-auto mt-5 mb-5 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out">
				Add new category
			</button>

			<form className=" bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 text-sm">
				<label className="block text-blue-300 py-2 font-bold">
					Category name
				</label>
				<br />
				<input type="text" />
				<label className="block text-blue-300 py-2 font-bold">
					Category description
				</label>
				<br />
				<input type="text" />
				<label className="block text-blue-300 py-2 font-bold">Status</label>
				<input type="text" />
				<br />
				<>
				<button
					className="mx-auto mt-5 bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
					type="submit"
					onClick={() => setShowAddComponent(!showAddComponent)}
				>
					Add Category
				</button></>
				{showAddComponent && (
					<>
					{/* <AddCategoryComponent onSubmit={createCategory}/> */}
					</>
				)}
			</form>
		</div>
	);
}
