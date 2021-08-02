import React from "react";

import { About } from "../sections/About";
import { Banner } from "../sections/Banner";
import { Blog } from "../sections/Blog";
import { Footer } from "../sections/Footer";
import { Hero } from "../sections/Hero";
import { Mission } from "../sections/Mission";
import { Modal } from "../Modal";
import { Navbar } from "../sections/Navbar";
import { Projects } from "../sections/Projects";
// import { Services } from "../sections/Services";

export const Homepage = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<About />
			<Mission />
			{/* <Services /> */}
			<Banner />
			<Projects />
			<Blog />
			<Footer />
			<Modal />
		</main>
	);
};
