import React from "react";
import ReactPlayer from "react-player";

import heroVideo from "../assets/video/heroVideo.mp4";

// const urlVideo = 'https://www.youtube.com/watch?v=t9YmurEuC5A';

export const HeroVideo = () => {
	return (
		<div className="videoHero">
			<ReactPlayer url={heroVideo} playing loop muted width="100%" height="100%" />

			<div className="videoHero-overlay">
				<div className="videoHero-frame"> </div>
				<h1 className="videoHero-title">ES MOMENTO DE MEJORAR</h1>
				{/* <p className="videoHero-paragraph">
					La vida no es esperar a que pase la tormenta, ni abrir el paraguas para no
					mojarte, es aprender a bailar bajo la lluvia.
				</p> */}
				<div className="videoHero-logo">
					<img src="logo.svg" alt="Logotipo Grupo Intecsa S. A. de C. V." />
				</div>
			</div>
		</div>
	);
};
