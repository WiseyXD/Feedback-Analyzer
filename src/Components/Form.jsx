import React from "react";
import Meeting from "../assets/images/meeting.png";
import Orator from "../assets/images/orator.jpg";
import Deep from "../assets/images/deeplearning.jpg";

import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Form() {
	return (
		<div className="max-w-full w-3/4 mx-auto my-0">
			<div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-3">
				<div className="flex flex-col border my-6 px-6 py-4 border-slate-900 shadow-lg shadow-slate-400">
					<img
						src={Meeting}
						alt=""
						className="lg:h-60 lg:overflow-hidden"
					/>
					<div className="flex flex-col gap-5">
						<div className="flex justify-start items-center gap-3 text-slate-500">
							<AiOutlineLock />
							<p>Student-only</p>
						</div>
						<div className="flex flex-col">
							<h1 className="text-3xl font-semibold">
								Teachers Evaluation Form
							</h1>
							<p className="text-md text-veryDarkBlue my-2">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Expedita quam sint dignissimos
								neque unde eveniet, ut minima exercitationem
								consectetur earum.
							</p>
						</div>
					</div>
					<div className="flex justify-center">
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
								Give Feedback
							</button>
						</Link>
					</div>
				</div>
				<div className="flex flex-col border my-6 px-6 py-4 border-slate-900 shadow-lg shadow-slate-400">
					<img
						src={Deep}
						alt=""
						className="lg:h-60 lg:overflow-hidden"
					/>
					<div className="flex flex-col gap-5">
						<div className="flex justify-start items-center gap-3 text-slate-500">
							<AiOutlineLock />
							<p>Student-only</p>
						</div>
						<div className="flex flex-col">
							<h1 className="text-3xl font-semibold">
								Deeplearning Workshop Evaluation Form
							</h1>
							<p className="text-md text-veryDarkBlue my-2">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Expedita quam sint dignissimos
								neque unde eveniet, ut minima exercitationem
								consectetur earum.
							</p>
						</div>
					</div>
					<div className="flex justify-center">
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
								Give Feedback
							</button>
						</Link>
					</div>
				</div>
				<div className="flex flex-col border my-6 px-6 py-4 border-slate-900 shadow-lg shadow-slate-400">
					<img
						src={Orator}
						alt=""
						className="lg:h-60 lg:overflow-hidden"
					/>
					<div className="flex flex-col gap-5">
						<div className="flex justify-start items-center gap-3 text-slate-500">
							<AiOutlineLock />
							<p>Student-only</p>
						</div>
						<div className="flex flex-col">
							<h1 className="text-3xl font-semibold">
								Orator Club Mentorship Form
							</h1>
							<p className="text-md text-veryDarkBlue my-2">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Expedita quam sint dignissimos
								neque unde eveniet, ut minima exercitationem
								consectetur earum.
							</p>
						</div>
					</div>
					<div className="flex justify-center">
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
								Give Feedback
							</button>
						</Link>
					</div>
				</div>
				<div className="flex flex-col border my-6 px-6 py-4 border-slate-900 shadow-lg shadow-slate-400">
					<img
						src={Meeting}
						alt=""
						className="lg:h-60 lg:overflow-hidden"
					/>
					<div className="flex flex-col gap-5">
						<div className="flex justify-start items-center gap-3 text-slate-500">
							<AiOutlineLock />
							<p>Student-only</p>
						</div>
						<div className="flex flex-col">
							<h1 className="text-3xl font-semibold">
								Teachers Evaluation Form
							</h1>
							<p className="text-md text-veryDarkBlue my-2">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Expedita quam sint dignissimos
								neque unde eveniet, ut minima exercitationem
								consectetur earum.
							</p>
						</div>
					</div>
					<div className="flex justify-center">
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
								Give Feedback
							</button>
						</Link>
					</div>
				</div>
				<div className="flex flex-col border my-6 px-6 py-4 border-slate-900 shadow-lg shadow-slate-400">
					<img
						src={Deep}
						alt=""
						className="lg:h-60 lg:overflow-hidden"
					/>
					<div className="flex flex-col gap-5">
						<div className="flex justify-start items-center gap-3 text-slate-500">
							<AiOutlineLock />
							<p>Student-only</p>
						</div>
						<div className="flex flex-col">
							<h1 className="text-3xl font-semibold">
								Deeplearning Workshop Evaluation Form
							</h1>
							<p className="text-md text-veryDarkBlue my-2">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Expedita quam sint dignissimos
								neque unde eveniet, ut minima exercitationem
								consectetur earum.
							</p>
						</div>
					</div>
					<div className="flex justify-center">
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
								Give Feedback
							</button>
						</Link>
					</div>
				</div>
				<div className="flex flex-col border my-6 px-6 py-4 border-slate-900 shadow-lg shadow-slate-400">
					<img
						src={Orator}
						alt=""
						className="lg:h-60 lg:overflow-hidden"
					/>
					<div className="flex flex-col gap-5">
						<div className="flex justify-start items-center gap-3 text-slate-500">
							<AiOutlineLock />
							<p>Student-only</p>
						</div>
						<div className="flex flex-col">
							<h1 className="text-3xl font-semibold">
								Orator Club Mentorship Form
							</h1>
							<p className="text-md text-veryDarkBlue my-2">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Expedita quam sint dignissimos
								neque unde eveniet, ut minima exercitationem
								consectetur earum.
							</p>
						</div>
					</div>
					<div className="flex justify-center">
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
								Give Feedback
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
