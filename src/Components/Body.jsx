import React from "react";
import Illustration from "../assets/images/illustration-intro.svg";
export default function Body() {
	return (
		<>
			<div className="max-w-full w-3/4 mx-auto my-0 mb-10 mt-4">
				<div className="flex flex-col items-center lg:flex-row">
					<div className=" lg:basis-2/3">
						<img src={Illustration} alt="" />
					</div>
					<div className="flex flex-col items-center justify-center lg:items-start text-center lg:text-left lg:basis-2/3">
						<h1 className="text-5xl font-semibold">
							Bring everyone together to build a better products.
						</h1>
						<p className="mt-3 text-darkGrayishBlue">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Unde atque quasi corrupti recusandae. Facilis
							illum sed maiores numquam similique eum neque dolore
							vero aliquam odio?
						</p>
						<button
							className="
					bg-brightRed
					hover:bg-brightRedLight
					text-white
					px-6
					py-1
					rounded-full
					mt-5
					cursor-pointer
					"
						>
							Get Started
						</button>
					</div>
				</div>

				<div className="flex flex-col mt-[4rem] items-center ">
					<p className="text-3xl font-semibold text-center">
						What's different about Manage ?
					</p>
					<div className="mt-8">
						<div className="flex  bg-orange-100 rounded-full pr-5">
							<p
								className="bg-brightRed
					text-white
					px-6
					py-1
					rounded-full
					font-semibold
					"
							>
								01
							</p>
							<p className="m-auto font-semibold">
								Track Department-wide Progress
							</p>
						</div>
						<p className="mt-6 text-darkGrayishBlue">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Soluta molestiae consequatur, dicta, itaque ad
							optio minus voluptatem numquam reiciendis vel amet
							vitae accusamus assumenda veritatis?
						</p>
					</div>
					<div className="mt-8">
						<div className="flex  bg-orange-100 rounded-full pr-5">
							<p
								className="bg-brightRed
					text-white
					px-6
					py-1
					rounded-full
					font-semibold
					"
							>
								02
							</p>
							<p className="m-auto font-semibold">
								Advance built-in reports
							</p>
						</div>
						<p className="mt-6 text-darkGrayishBlue">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Soluta molestiae consequatur, dicta, itaque ad
							optio minus voluptatem numquam reiciendis vel amet
							vitae accusamus assumenda veritatis?
						</p>
					</div>
					<div className="mt-5">
						<div className="flex  bg-orange-100 rounded-full pr-5">
							<p
								className="bg-brightRed
					text-white
					px-6
					py-1
					rounded-full
					font-semibold
					"
							>
								03
							</p>
							<p className="m-auto font-semibold">
								Everything in one place
							</p>
						</div>
						<p className="mt-6 text-darkGrayishBlue">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Soluta molestiae consequatur, dicta, itaque ad
							optio minus voluptatem numquam reiciendis vel amet
							vitae accusamus assumenda veritatis?
						</p>
					</div>
				</div>
			</div>
			<div className="w-full bg-brightRed py-12">
				<div className="max-w-full w-3/4 mx-auto my-0 mt-6">
					<div className="flex flex-col text-center">
						<h1 className="text-5xl text-white">
							Simplify how your reports generate today.
						</h1>
						<button
							className="
					text-brightRed
					hover:bg-veryPaleRed
					bg-white
					px-6
					py-1
					rounded-full
					mt-5
					cursor-pointer"
						>
							Get Started
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
