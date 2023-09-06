import React from "react";
import Illustration from "../assets/images/illustration-intro.svg";
import Avatar from "../assets/images/avatar-anisha.png";
import Avatar2 from "../assets/images/avatar-richard.png";
import Avatar3 from "../assets/images/avatar-shanai.png";
import { Link } from "react-router-dom";
export default function Body() {
	return (
		<>
			<div className="max-w-full w-3/4 mx-auto my-0 mb-10 mt-4">
				<div className="flex flex-col items-center lg:flex-row-reverse">
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
						<Link to="/signupForm">
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
						</Link>
					</div>
				</div>

				<div className="flex flex-col mt-[4rem] lg:grid lg:grid-flow-col">
					<div className="basis-1/3">
						<p className="text-3xl font-semibold text-center lg:text-left">
							What's different about Manage ?
						</p>
						<p className="w-3/4 text-center hidden lg:block mt-3 lg:text-left ">
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Molestiae repellendus nemo error perferendis
							doloribus sed temporibus illum suscipit, voluptas
							modi eius aliquid, eligendi dolore assumenda in
							consequatur quam ut distinctio, rerum nisi
							provident? Velit numquam ut vitae officiis,
							explicabo harum vero ea officia doloribus, alias
							ipsa voluptatibus recusandae rem, laudantium dolore
							porro! Optio nemo exercitationem vitae ab, debitis
							sapiente culpa excepturi recusandae aspernatur vero
							similique labore sit dolorum rem error, aliquam
							architecto dolore sint omnis? Unde facere explicabo
							sint dicta!
						</p>
					</div>
					<div className="lg:basis-[35%]">
						<div className="mt-8 lg:mt-0">
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Soluta molestiae consequatur,
								dicta, itaque ad optio minus voluptatem numquam
								reiciendis vel amet vitae accusamus assumenda
								veritatis?
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Soluta molestiae consequatur,
								dicta, itaque ad optio minus voluptatem numquam
								reiciendis vel amet vitae accusamus assumenda
								veritatis?
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
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Soluta molestiae consequatur,
								dicta, itaque ad optio minus voluptatem numquam
								reiciendis vel amet vitae accusamus assumenda
								veritatis?
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-full w-3/4 mx-auto my-0 mt-6 flex flex-col items-center mb-7">
				<h2 className="my-5 text-2xl font-semibold">
					What they have said..
				</h2>
				<div className="flex flex-col xl:flex-row items-center xl:gap-7">
					<div className="flex flex-col items-center py-8 my-2 bg-gray-100">
						<img src={Avatar} alt="" className="my-6" />
						<h3 className="text-lg font-semibold">Nikita Ghare</h3>
						<p className="text-center w-2/3">
							" Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aliquam neque sit quasi reprehenderit quod
							recusandae vel, nobis autem veritatis molestiae qui,
							sunt doloremque eligendi facilis? "
						</p>
					</div>
					<div className="flex flex-col items-center py-8 my-2 bg-gray-100">
						<img src={Avatar2} alt="" className="my-6" />
						<h3 className="text-lg font-semibold">Nikita Ghare</h3>
						<p className="text-center w-2/3">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aliquam neque sit quasi reprehenderit quod
							recusandae vel, nobis autem veritatis molestiae qui,
							sunt doloremque eligendi facilis?
						</p>
					</div>
					<div className="flex flex-col items-center py-8 my-2 bg-gray-100 ">
						<img src={Avatar3} alt="" className="my-6" />
						<h3 className="text-lg font-semibold">Nikita Ghare</h3>
						<p className="text-center w-2/3">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Aliquam neque sit quasi reprehenderit quod
							recusandae vel, nobis autem veritatis molestiae qui,
							sunt doloremque eligendi facilis?
						</p>
					</div>
				</div>
				<Link to="/signupForm">
					<button
						className="
					bg-brightRed
					hover:bg-brightRedLight
					text-white
					px-8
					py-2
					rounded-full
					my-14
					cursor-pointer
					"
					>
						Get Started
					</button>
				</Link>
			</div>
			<div className="w-full bg-brightRed py-12 finalSection">
				<div className="max-w-full w-3/4 mx-auto my-0 mt-6">
					<div className="flex flex-col text-center">
						<h1 className="text-5xl text-white">
							Simplify how your reports generate today.
						</h1>
						<div>
							<Link to="/signupForm">
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
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
