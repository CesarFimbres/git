import React from "react";

import { Enterprises } from "../../assets/data";

export const About = () => {
	return (
		<section className="about align w_100">
			<h1 className="title_section">
				Acerca de <span>nosotros</span>
			</h1>
			<div className="about-frame"></div>
			<div className="about-image">
				<img src="" alt="Image description"></img>
			</div>
			<div className="about-comments">
				<h3 className="about-title">
					Acerca de <span>{Enterprises[0].title}</span>
				</h3>
				<p className="about-paragraph">{Enterprises[0].paragraph}</p>
			</div>
		</section>
	);
};
