import React from "react";

import { HeroVideo } from "../HeroVideo";
import { EnterpriseCards } from "../EnterpriseCards";

export const Hero = () => {
	return (
		<section id="hero" className="hero w_100 animate__animated animate__fadeIn animate__slow">
			<HeroVideo />
			<EnterpriseCards />
		</section>
	);
};
