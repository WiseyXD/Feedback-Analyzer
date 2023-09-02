import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<div className="">
			<nav className="p-6 shadow-lg">
				<div className="max-w-full w-3/4 mx-auto my-0 flex justify-between">
					<img src={logo} alt="" className="w-36" />
					<ul className="hidden md:flex gap-6">
						<li className=" text-darkGrayishBlue">ABOUT</li>
						<li className=" text-darkGrayishBlue">CONTACT</li>
						<li className=" text-darkGrayishBlue">PRICING</li>
						<li className="bg-brightRed hover:bg-brightRedLight text-white px-6 py-1 rounded-full cursor-pointer">
							Get Started
						</li>
					</ul>
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen((prev) => !prev)}
					>
						{!isMenuOpen ? (
							<RxHamburgerMenu size={27} />
						) : (
							<RxCross1 size={27} />
						)}
					</button>
				</div>
				{isMenuOpen && (
					<div className="flex flex-col mt-7 items-center justify-center gap-y-3">
						<ul className=" bg-white w-96 h-60 flex flex-col justify-center items-center gap-y-7 shadow-md rounded-md">
							<li className=" text-darkGrayishBlue">ABOUT</li>
							<li className=" text-darkGrayishBlue">CONTACT</li>
							<li className=" text-darkGrayishBlue">PRICING</li>
							<li className="bg-brightRed hover:bg-brightRedLight text-white px-6 py-1 rounded-full cursor-pointer">
								Get Started
							</li>
						</ul>
					</div>
				)}
			</nav>
		</div>
	);
}
