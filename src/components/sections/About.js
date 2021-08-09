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

					<div className='btn-play'>
						<svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
							<path id="play" d="M20.4115 16.6269C20.4115 13.5477 23.7449 11.6232 26.4115 13.1628L62.4116 33.9474C65.0782 35.487 65.0782 39.336 62.4115 40.8756L26.4115 61.6602C23.7449 63.1998 20.4115 61.2753 20.4115 58.1961L20.4115 16.6269Z" />
						</svg>
					</div>

					<img src={AboutData[0].image} alt={AboutData[0].title}></img>
				</div>
				<div className="about-comments">
					<h3 className="about-title">{AboutData[0].title}</h3>
					<p className="about-paragraph">{AboutData[0].paragraph}</p>
					<a href={AboutData[0].pdf} target="_blank" rel="noreferrer">
						Leer más <i class="fas fa-angle-double-right"></i>{" "}
					</a>
				</div>
			</div>
		</section>
	);
};
