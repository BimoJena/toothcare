import React from 'react'

import contact from '../assets/contact.jpg';
import contactBanner from '../assets/contactBanner.jpg';

const Contact = () => {
	return (
		<>
			<div className="relative w-full h-[60vh]">
				<img
					src={contactBanner}
					alt="Service Hero"
					className="w-full h-full object-cover md:object-[center_15%]"
				/>
				<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
					<h1 className="text-5xl md:text-6xl font-bold text-white font-[Arial]">
						Contact Us
					</h1>
				</div>
			</div>

			<section className="w-full bg-white py-16 px-6">
				<div className="max-w-7xl mx-auto">

					<div className="flex flex-col-reverse md:flex-row">

						<div className="bg-slate-900 p-8 flex flex-col justify-center">
							<h3 className="text-3xl font-bold text-slate-100 mb-6 font-[Arial]">
								MAKE AN APPOINTMENT
							</h3>
							<form className="space-y-4">
								<input
									type="text"
									placeholder="Your Name"
									className="w-full p-3 rounded-md border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 font-[Arial] bg-slate-900"
								/>
								<input
									type="email"
									placeholder="Your Email"
									className="w-full p-3 rounded-md border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 font-[Arial] bg-slate-900"
								/>
								<textarea
									rows="5"
									placeholder="Your Message"
									className="w-full p-3 rounded-md border border-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500 font-[Arial] bg-slate-900"
								></textarea>
								<button
									type="submit"
									className="bg-slate-100 text-slate-900 hover:text-slate-100 px-6 py-3 rounded-md  hover:bg-slate-700 transition font-semibold font-[Arial]"
								>
									Send Message
								</button>
							</form>
						</div>

						{/* Right - Image */}
						<div className="w-full h-full">
							<img
								src={contact}
								alt="Contact Hero"
								className="w-full h-full object-cover object-center"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Contact