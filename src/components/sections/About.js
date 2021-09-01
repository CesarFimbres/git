import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player/lazy';

import { AboutData } from "../../assets/data";
import { Modal } from "../Modal";

export const About = () => {

	const [modalState, setModalState] = useState(false);

	return (
		<section id="About" className="about align w_100">
			<div className="about-container">
				<h1 className="title_section">
					Acerca de <span>nosotros</span>
				</h1>
				<div className="about-frame"></div>
				<div className="about-image align-center">

					<button className='btn-play' onClick={() => setModalState(!modalState)} >
						<svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
							<path id="play" d="M20.4115 16.6269C20.4115 13.5477 23.7449 11.6232 26.4115 13.1628L62.4116 33.9474C65.0782 35.487 65.0782 39.336 62.4115 40.8756L26.4115 61.6602C23.7449 63.1998 20.4115 61.2753 20.4115 58.1961L20.4115 16.6269Z" />
						</svg>
					</button>

					<img src={AboutData[0].image} alt={AboutData[0].title}></img>
				</div>
				<div className="about-comments">
					<h3 className="about-title">{AboutData[0].title}</h3>
					<p className="about-paragraph">{AboutData[0].paragraph}</p>
					<a href={AboutData[0].pdf} target="_blank" rel="noreferrer">
						Leer más <i className="fas fa-angle-double-right"></i>{" "}
					</a>
				</div>
			</div>

			<Modal
				active={modalState}
				changeModalState={setModalState}
				showHeader={true}
				showOverlay={true}
				title='Más acerca de nosotros'
			>

				<Content>
					<div className='player-wrapper' >
						< ReactPlayer
							className='video-player'
							controls={true}
							height='100%'
							max-width='1024px'
							playing={true}
							// url='https://fb.watch/7oVHaxv5c_/'
							// url='https://youtu.be/w1xEYteayxM'
							url='https://youtu.be/Pm8VymWBRXw'
							width='100%'
						/>

					</div>
				</Content>

			</Modal>

		</section>
	);
};


// *Style component section
const Content = styled.div`
	align-items: center;
	display: flex;
	flex-flow: column nowrap;
	iframe{
		height: 40vw;
		max-width: 1004px;
		width: 80vw;
	}
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	img {
		border-radius: 3px;
		vertical-align: top;
		width: 100%;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	@media only screen and (max-width: 768px){
		iframe{
			height: 85vh;
			width: 85vw;
		}
	}
`;