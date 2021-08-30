// ! Reference page https://www.protolabs.es

import React from "react";

import { About } from "../sections/About";
import { Banner } from "../sections/Banner";
// import { LandingBlog } from "../sections/LandingBlog";
import { Footer } from "../sections/Footer";
import { Hero } from "../sections/Hero";
import { Mission } from "../sections/Mission";
import { Navbar } from "../sections/Navbar";
import { Projects } from "../sections/Projects";
// import { Services } from "../sections/Services";

export const HomeScreen = () => {

	return (
		<main
			className='animate__animated animate__fadeIn'

		>
			<Navbar />

			<Hero />

			<About />

			<Mission />

			{/* <Services /> */}

			<Banner />

			<Projects />

			{/* <LandingBlog /> */}

			<Footer />


		</main>
	);
};
