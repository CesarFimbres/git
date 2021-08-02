import React from "react";

import { AboutData } from "../../assets/data";

export const About = () => {
	return (
		<section id="About" className="about align w_100">
			<div className="about-container">
				<h1 className="title_section">
					Acerca de <span>nosotros</span>
				</h1>
				<div className="about-frame"></div>
				<div className="about-image align-center">
					<img src={AboutData[0].image} alt={AboutData[0].title}></img>
				</div>
				<div className="about-comments">
					<h3 className="about-title">{AboutData[0].title}</h3>
					<p className="about-paragraph">{AboutData[0].paragraph}</p>
					<a href={AboutData[0].pdf} target="_blank">
						Leer más <i class="fas fa-angle-double-right"></i>{" "}
					</a>
				</div>
			</div>
		</section>
	);
};
