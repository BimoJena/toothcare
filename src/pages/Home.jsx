import React from "react";
import { Link } from "react-router-dom";
import Counter from '../components/Counter.jsx';

import hero from '../assets/hero.jpeg';
import DenatalCalculus from '../assets/DentalCalculus.png';
import DenatalCare from '../assets/DentalCare.png';
import DentalImplants from '../assets/DentalImplants.png';
import RemovalofTartar from '../assets/RemovalofTartar.png';
import TeethWhitening from '../assets/TeethWhitening.png';
import ToothInspection from '../assets/ToothInspection.png';
import toothProtection from '../assets/toothProtection.png';
import ToothRemoval from '../assets/ToothRemoval.png';
import founder1 from '../assets/founder1.jpg';
import founder2 from '../assets/founder2.jpg';
import contact from '../assets/contact.jpg';

const services = [
	{
		title: "Tooth Protection",
		description: "Comprehensive treatments to prevent cavities and strengthen enamel.",
		icon: toothProtection,
	},
	{
		title: "Dental Implants",
		description: "Secure, long-lasting replacements for missing or damaged teeth.",
		icon: DentalImplants,
	},
	{
		title: "Dental Care",
		description: "Routine checkups and professional cleanings to maintain oral health.",
		icon: DenatalCare,
	},
	{
		title: "Teeth Whitening",
		description: "Advanced whitening solutions for a visibly brighter smile.",
		icon: TeethWhitening,
	},
	{
		title: "Dental Calculus",
		description: "Expert removal of hardened plaque to prevent gum disease.",
		icon: DenatalCalculus,
	},
	{
		title: "Tooth Removal",
		description: "Safe and comfortable extractions for decayed or impacted teeth.",
		icon: ToothRemoval,
	},
	{
		title: "Removal of Tartar",
		description: "Thorough scaling to eliminate tartar buildup below the gumline.",
		icon: RemovalofTartar,
	},
	{
		title: "Tooth Inspection",
		description: "Detailed oral exams using modern tools to detect dental issues early.",
		icon: ToothInspection,
	},
];


const Home = () => {
	return (
		<div>
			<section className="relative w-full h-[90vh] overflow-hidden">
				<img
					src={hero}
					alt="Dental Clinic"
					className="w-full h-full object-cover object-[70%] md:object-center"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
					<div className="px-6 text-white text-left max-w-4xl">
						<h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight font-['Arial']">
							<span className="text-slate-900">Dentist Services</span> That You Can Trust
						</h1>
						<p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl font-['Arial']">
							At ToothCare Dental Clinic, your comfort is our priority. We provide advanced, gentle, and affordable dental treatments — from routine checkups to smile makeovers — all under one roof.						</p>
						<Link
							to="/contact"
							className="md:inline-block bg-slate-900 text-white px-5 py-3 hover:bg-slate-700 transition"
						>
							MAKE AN APPOINTMENT
						</Link>
					</div>
				</div>
			</section>

			<section className="py-16 px-6 bg-gray-50">
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-slate-900 mb-12 font-[Arial]">Our Services</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						{services.map((service, index) => (
							<div
								key={index}
								className="group bg-white rounded-2xl shadow-lg p-6 text-left transition duration-300 hover:bg-slate-900 hover:text-white"
							>
								<div className="mb-4">
									<img
										src={service.icon}
										alt={service.title}
										className="w-16 h-16 object-contain mx-auto lg:mx-0 transition duration-300 group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
									/>
								</div>
								<h3 className="text-xl font-semibold mb-2 font-[Arial] transition duration-300">{service.title}</h3>
								<p className="text-gray-600 group-hover:text-white font-[Arial] text-sm transition duration-300">
									{service.description}
								</p>
							</div>

						))}
					</div>
				</div>
			</section>

			<section className="py-4 px-6 bg-white">
				<div className="max-w-7xl mx-auto text-center">
					<h2 className="text-4xl font-bold text-slate-900 mb-12 font-[Arial]">About Us</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
							<h3 className="text-5xl font-bold text-slate-900 mb-2 font-[Arial]">
								<Counter end={4200} />+
							</h3>
							<p className="text-slate-700 text-lg font-[Arial]">Happy Clients</p>
						</div>
						<div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
							<h3 className="text-5xl font-bold text-slate-900 mb-2 font-[Arial]">
								<Counter end={2800} />+
							</h3>
							<p className="text-slate-700 text-lg font-[Arial]">Successful Surgeries</p>
						</div>
						<div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
							<h3 className="text-5xl font-bold text-slate-900 mb-2 font-[Arial]">
								<Counter end={13} />+
							</h3>
							<p className="text-slate-700 text-lg font-[Arial]">Years of Experience</p>
						</div>
						<div className="bg-gray-100 p-8 rounded-2xl shadow hover:shadow-lg transition duration-300">
							<h3 className="text-5xl font-bold text-slate-900 mb-2 font-[Arial]">
								<Counter end={20} />+
							</h3>
							<p className="text-slate-700 text-lg font-[Arial]">Expert Dentists</p>
						</div>
					</div>

					<p className="text-lg text-slate-700 max-w-3xl mx-auto mt-10 mb-12 font-[Arial] leading-relaxed">
						ToothCare Dental Clinic has been a trusted name in dental healthcare for over a decade.
						Our dedicated team of experienced dentists and caring staff are committed to providing
						state-of-the-art treatment with a gentle touch. Whether you’re visiting for a routine
						checkup or a complete smile makeover, we prioritize your comfort, safety, and satisfaction.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 justify-center">
						<div className="group bg-gray-100 hover:bg-slate-900 rounded-2xl shadow p-3 max-w-sm mx-auto flex flex-col items-center text-center transition duration-300">
							<img
								src={founder2}
								alt="Dr. Shruti Sachadeva"
								className="object-[center_20%] w-28 h-28 rounded-full object-cover mb-2"
							/>
							<h3 className="text-lg font-semibold text-slate-900 group-hover:text-white font-[Arial]">
								Dr. Shruti Sachadeva
							</h3>
							<p className="text-blue-600 group-hover:text-blue-300 font-[Arial] mb-1 text-sm">
								Founder & Chief Dental Surgeon
							</p>
							<p className="text-slate-700 group-hover:text-slate-200 font-[Arial] text-sm leading-snug">
								With 18+ years of experience, Dr. Shruti specializes in cosmetic dentistry and surgical implants.
								Her leadership laid the foundation for ToothCare Dental Clinic’s success.
							</p>
						</div>

						<div className="group bg-gray-100 hover:bg-slate-900 rounded-2xl shadow p-3 max-w-sm mx-auto flex flex-col items-center text-center transition duration-300">
							<img
								src={founder1}
								alt="Dr. Kunal Rawat"
								className="w-28 h-28 rounded-full object-cover mb-2"
							/>
							<h3 className="text-lg font-semibold text-slate-900 group-hover:text-white font-[Arial]">
								Dr. Kunal Rawat
							</h3>
							<p className="text-blue-600 group-hover:text-blue-300 font-[Arial] mb-1 text-sm">
								Co-Founder & Orthodontic Specialist
							</p>
							<p className="text-slate-700 group-hover:text-slate-200 font-[Arial] text-sm leading-snug">
								With 15+ years of orthodontic experience, Dr. Kunal focuses on alignment and braces.
								His compassionate care has changed thousands of lives.
							</p>
						</div>
					</div>




				</div>
			</section>

			<section className="w-full bg-white py-16 px-6">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl font-bold text-slate-900 mb-12 font-[Arial] text-center">
						Contact Us
					</h2>

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




		</div>
	);
};

export default Home;
