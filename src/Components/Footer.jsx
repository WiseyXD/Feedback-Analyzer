import React from "react";
import Facebook from "../assets/images/icon-facebook.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Logo from "../assets/images/logo.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Youtube from "../assets/images/icon-youtube.svg";
export default function Footer() {
	return (
		<div className="w-full bg-veryDarkBlue pb-4">
			<div className="max-w-full w-3/4 mx-auto my-0 py-6">
				<form
					action="#"
					className="flex justify-center items-center gap-3"
				>
					<input
						type="email"
						placeholder="Updates in your inbox..."
						className="px-4 py-1 rounded-full"
					/>
					<button
						className="bg-brightRed
					hover:bg-brightRedLight
					text-white
					px-4
					py-1
					rounded-full	
					cursor-pointer"
					>
						Go
					</button>
				</form>
				<div className="flex justify-center gap-x-6 mt-10">
					<img src={Facebook} alt="" className="w-8" />
					<img src={Instagram} alt="" className="w-8" />
					<img src={Youtube} alt="" className="w-8" />
					<img src={Twitter} alt="" className="w-8" />
				</div>
				<div className="flex justify-center mt-6">
					<img src={Logo} alt="" />
				</div>
			</div>
		</div>
	);
}
