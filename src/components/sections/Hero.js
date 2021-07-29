import React from "react";

import { HeroVideo } from "../HeroVideo";
import { CardWrapper } from "./CardWrapper";

export const Hero = () => {
	return (
		<section id="hero" className="hero w_100">
			<HeroVideo />
			<CardWrapper />
		</section>
	);
};
