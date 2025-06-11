import React from 'react'
import Counter from '../components/Counter.jsx';

import founder1 from '../assets/founder1.jpg';
import founder2 from '../assets/founder2.jpg';
import about from '../assets/about.jpg';

const About = () => {
	return (
		<>
			<div className="relative w-full h-[60vh]">
				<img
					src={about}
					alt="Service Hero"
					className="w-full h-full object-cover md:object-[center_15%]"
				/>
				<div className="absolute inset-0 bg-black/50 flex items-center justify-center">
					<h1 className="text-5xl md:text-6xl font-bold text-white font-[Arial]">
						About Us
					</h1>
				</div>
			</div>

			<section className="py-4 px-6 bg-white">
				<div className="max-w-7xl mx-auto text-center">

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
		</>
	);
}

export default About