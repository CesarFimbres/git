import React from "react";

import { AboutData } from "../../assets/data";

export const Mission = () => {
	return (
		<section id="mission" className="mission w_100">
			<h1 className="title_section">
				Nuestra <span>misión / visión</span>
			</h1>

			<div className="mission-container">
				<div className="mission-comments">
					<h3 className="mission-title">Misión</h3>
					<p className="mission-paragraph">{AboutData[0].mission}</p>
					<a href="#Leer_mas">
						Leer más <i className="fas fa-angle-double-right"></i>{" "}
					</a>
					<h3 className="mission-title">Visión</h3>
					<p className="mission-paragraph">{AboutData[0].vision}</p>
					<a href="#Leer_mas">
						Leer más <i className="fas fa-angle-double-right"></i>{" "}
					</a>
				</div>
				<div className="mission-image">
					<img src={AboutData[0].missionImage} alt={AboutData[0].title}></img>
				</div>
			</div>
		</section>
	);
};
