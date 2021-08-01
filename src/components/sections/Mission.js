import React from "react";

import { MissionData } from "../../assets/data";


export const Mission = () => {
	return (
		<section id="Mission" className="mission w_100">
			<h1 className="title_section">
				Nuestra <span>misión</span>
			</h1>

			<div className='mission-container'>
				<div className="mission-comments">
					<h3 className="mission-title">Ser el referente</h3>
					<p className="mission-paragraph">
						{MissionData[0].paragraph}
					</p>
					<a href="#Leer_mas">Leer más   <i class="fas fa-angle-double-right"></i> </a>
				</div>
				<div className='mission-image'>
					<img src={MissionData[0].image} alt={MissionData[0].title}></img>
				</div>
				<div className='mission-contacto'>
					<h1>Contacto</h1>
				</div>
			</div>


		</section>
	);
};
