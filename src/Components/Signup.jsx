import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
	const [isSignup, setIsSignup] = useState(true);
	return (
		<div className="max-w-full w-3/4 mx-auto my-4 flex flex-col items-center justify-center">
			{isSignup ? (
				<>
					<form
						onSubmit={(e) => e.preventDefault}
						className="w-full max-w-lg bg-white py-4 px-6 mb-4 shadow-lg"
					>
						<div className="flex justify-center my-6">
							<h1 className="text-3xl font-semibold">Signup</h1>
						</div>
						<div className="flex flex-wrap -mx-3 mb-1">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									htmlFor="grid-first-name"
								>
									First Name
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
									id="grid-first-name"
									type="text"
									placeholder="Jane"
								/>
								<p className="text-red-500 text-xs italic">
									Please fill out this field.
								</p>
							</div>
							<div className="w-full md:w-1/2 px-3">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									htmlFor="grid-last-name"
								>
									Last Name
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-last-name"
									type="text"
									placeholder="Doe"
								/>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full px-3">
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-3 pt-3"
									htmlFor="email"
								>
									Email
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="email"
									type="email"
									placeholder="johndoe22@it.sce.edu.in"
								/>
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
									htmlFor="grid-password"
								>
									Password
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-password"
									type="password"
									placeholder="******************"
								/>
								<p className="text-gray-600 text-xs italic">
									Make it as long and as crazy as you'd like
								</p>
								<label
									className="block uppercase tracking-wide text-gray-700 text-xs font-bold my-3 pt-3"
									htmlFor="grid-password2"
								>
									Confirm Password
								</label>
								<input
									className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									id="grid-password2"
									type="password"
									placeholder="******************"
								/>
							</div>
						</div>
						<div className="flex flex-wrap -mx-3 mb-5 -mt-3 justify-center items-center gap-5">
							<div className="w-1/3">
								<Link to="/form" className="w-full text-center">
									<button
										type="submit"
										className="
                            w-full
					bg-brightRed
					hover:bg-brightRedLight
					text-white
					px-6
					py-1
					rounded-md
					mt-5
					cursor-pointer
					"
									>
										Register
									</button>
								</Link>
							</div>
							<div className="w-1/3 text-center">
								<button
									onClick={() => setIsSignup((prev) => !prev)}
									className="
                            w-full
					hover:bg-brightRed
					ring-2 ring-brightRed
					hover:text-white
                    text-brightRed
					px-6
					py-1
					rounded-md
					mt-5
					cursor-pointer
                    duration-200
                    ease-in-out
					"
								>
									Login
								</button>
							</div>
						</div>
					</form>
					<p className="text-center text-gray-500 text-xs">
						&copy;2023 Team ALTF4. All rights reserved.
					</p>
				</>
			) : (
				<div className="w-full max-w-xs">
					<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
						<div className="flex justify-center my-6">
							<h1 className="text-3xl font-semibold">Login</h1>
						</div>
						<div className="mb-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="email"
							>
								Email
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								id="email"
								type="email"
								placeholder="Email"
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="password"
							>
								Password
							</label>
							<input
								className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
								id="password"
								type="password"
								placeholder="******************"
							/>
							<p className="text-red-500 text-xs italic">
								Please choose a password.
							</p>
						</div>
						<div className="flex items-center justify-between gap-3">
							<Link to="/form" className="w-1/2 text-center">
								<button
									type="submit"
									className="
                            w-full
					bg-brightRed
					hover:bg-brightRedLight
					text-white
					px-6
					py-1
					rounded-md
					mt-5
					cursor-pointer
					"
								>
									Login
								</button>
							</Link>
							<div className="w-1/2">
								<button
									onClick={() => setIsSignup((prev) => !prev)}
									className="
                            w-full
					hover:bg-brightRed
					ring-2 ring-brightRed
					hover:text-white
                    text-brightRed
					px-6
					py-1
					rounded-md
					mt-5
					cursor-pointer
                    duration-200
                    ease-in-out
					"
								>
									Signup
								</button>
							</div>
						</div>
					</form>
					<p className="text-center text-gray-500 text-xs">
						&copy;2023 Team ALTF4. All rights reserved.
					</p>
				</div>
			)}
		</div>
	);
}
