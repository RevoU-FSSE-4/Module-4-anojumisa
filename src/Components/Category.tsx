import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Category() {
	return (
        <div>
            <h2 className="">RevoU Library</h2>

            {/* Table */}
		<div className="flex items-center ">
            
			<div className="col-span-12">
				<div className="overflow-auto lg:overflow-visible ">
					<table className="table text-gray-400 border-separate space-y-6 text-sm">
						<thead className="bg-gray-800 text-gray-500">
							<tr>
								<th className="p-3">Category Name</th>
								<th className="p-3 text-left">Category Description</th>
                                <th className="p-3 text-left">Status</th>
								<th className="p-3 text-left">Action</th>
                                
							</tr>
						</thead>
						<tbody>
							<tr className="bg-gray-800">
								<td className="p-3">JavaScript Book</td>
								<td className="p-3 font-bold">Software Engineering</td>
								<td className="p-3">
									<span className="bg-green-400 text-black rounded-md px-2">
										available
									</span>
								</td>
                                <td className="p-3">
                                    <button className="bg-yellow-400 text-black  rounded-md px-2">Update</button>
                                    <button className="bg-red-400 text-black rounded-md px-2">Delete</button>
								</td>
							</tr>
							<tr className="bg-gray-800">
								<td className="p-3">TypeScript Book</td>
								<td className="p-3 font-bold">Software Engineering</td>
								<td className="p-3">
									<span className="bg-red-400 text-black rounded-md px-2">
										unavailable
									</span>
								</td>
                                <td className="p-3">
                                    <button className="bg-yellow-400 text-black  rounded-md px-2">Update</button>
                                    <button className="bg-red-400 text-black rounded-md px-2">Delete</button>
								</td>
							</tr>
							<tr className="bg-gray-800">
								<td className="p-3">Basic API</td>
								<td className="p-3 font-bold">Backend Development</td>
                                <td className="p-3">
									<span className="bg-green-400 text-black rounded-md px-2">
										available
									</span>
								</td>
								<td className="p-3">
                                    <button className="bg-yellow-400 text-black  rounded-md px-2">Update</button>
                                    <button className="bg-red-400 text-black rounded-md px-2">Delete</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
            <br />
		</div>
        {/* End Table */}
        {/* <h3>Add new category</h3>
        <Formik
        initialValues={
            name:"",
            description:"",
            status: ""
        }>
            <Form>

<Field>

</Field>
            </Form>
        </Formik> */}
        </div>
        
	);
}
export default Category;
