import React from "react";

import { HeroVideo } from "../HeroVideo";
import { EnterpriseCards } from "../EnterpriseCards";

export const Hero = () => {
	return (
		<section id="hero" className="hero w_100">
			<HeroVideo />
			<EnterpriseCards />
		</section>
	);
};
