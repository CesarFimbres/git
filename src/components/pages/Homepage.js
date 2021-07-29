import React from "react";

import { About } from "../sections/About";
import { Banner } from "../sections/Banner";
import { Blog } from "../sections/Blog";
import { Footer } from "../sections/Footer";
import { Hero } from "../sections/Hero";
import { Mission } from "../sections/Mission";
import { Navbar } from "../sections/Navbar";
import { Proyects } from "../sections/Proyects";
import { Services } from "../sections/Services";

export const Homepage = () => {
	return (
		<main>
			<Navbar />
			<Hero />
			<About />
			<Mission />
			<Services />
			<Banner />
			<Proyects />
			<Blog />
			<Footer />
		</main>
	);
};
