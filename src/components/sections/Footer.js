import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<section id="Footer" className="footer">
			<div className='footer-enterprise'>

				<div className='footer-logo_intecsa'>
					<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
						<g id="logo_git">
							<g id="dark">
								<g id="bars">
									<path id="bar 1" d="M123.207 0H0V10.57H123.207V0Z" />
									<path id="bar 2" d="M123.207 12.8059H0V17.278H123.207V12.8059Z" />
									<path id="bar 3" d="M123.207 19.5139H0V23.9859H123.207V19.5139Z" />
									<path id="bar 4" d="M123.207 26.5984H0V43.0633H123.207V26.5984Z" />
									<path id="bar 5" d="M123.207 44.6693H0V60.9311H123.207V44.6693Z" />
									<path id="bar 6" d="M123.207 62.74H0V79.0018H123.207V62.74Z" />
									<path id="bar 7" d="M123.207 81.0226H0V85.6978H123.207V81.0226Z" />
									<path id="bar 8" d="M123.207 88.5359H0V93.2111H123.207V88.5359Z" />
									<path id="bar 9" d="M123.207 95.6398H0V104.584H123.207V95.6398Z" />
									<path id="bar 10" d="M123.207 107.814H0V113.912H123.207V107.814Z" />
									<path id="bar 11" d="M123.207 115.945H0V119.604H123.207V115.945Z" />
									<path id="bar 12" d="M123.207 121.433H0V125.092H123.207V121.433Z" />
								</g>
							</g>
							<g id="white">
								<path id="g" d="M62.5467 17.1134L62.5307 54.8091C62.8354 59.9598 62.0913 63.2776 59.8738 66.9898C55.251 73.5675 48.2484 74.6618 38.6928 74.6026C32.3172 74.6618 27.9388 73.3483 24.9412 71.8999C17.5313 67.2183 19.1293 58.9456 19.1293 58.9456L34.3583 60.667C34.7679 63.1468 36.5404 64.5534 40.1699 64.7971C43.2864 64.6288 44.0175 63.8387 44.843 63.2257C46.1521 62.0701 46.7628 59.7215 46.7628 56.2706V50.4461C43.3453 54.7233 39.1291 56.1202 35.7625 56.2709C30.3181 56.5146 26.128 55.1373 22.3243 50.6784C19.2296 47.0732 17.8192 42.7436 17.5509 37.2804C17.2826 31.8171 18.3097 25.1356 22.3189 20.9791C25.6592 17.5054 29.5952 16.1211 34.9892 16.1211C40.4315 16.4747 43.9007 17.6895 47.8507 23.1558V17.1048L62.5467 17.1134ZM40.0443 27.5624C33.0833 27.4818 33.3617 34.8793 33.2061 36.3409C33.0993 39.5183 33.6054 45.4096 39.9109 45.721C44.7024 45.5065 46.6359 41.6392 46.8218 38.1811C47.1503 33.3162 45.8451 28.2244 40.0443 27.5624Z" />
								<path id="i" d="M64.7231 56.4702V45.7319H80.3529V56.4702H64.7231ZM64.7231 102.108V60.8629H80.3529V102.107L64.7231 102.108Z" />
								<path id="t" d="M99.1525 77.8268C96.8458 77.8268 94.032 77.3875 92.2176 76.488C90.1996 75.4379 88.7814 74.0601 87.9102 72.1036C87.2855 70.6426 86.6016 69.1448 86.4129 63.0951L86.4254 47.4844L80.6988 47.5015L80.7246 36.1054H86.4204V28.5784L102.204 20.4666L102.207 36.0581H110.805V47.4819L102.207 47.485L102.204 52.2015C102.204 54.4759 102.211 59.2747 102.211 60.2529C102.314 62.8289 101.47 66.8474 105.482 66.8148C107.234 66.6486 107.513 66.5649 110.195 65.7764L111.337 76.5573C109.326 77.0032 107.293 77.3387 105.245 77.5622C103.222 77.782 101.187 77.8704 99.1525 77.8268Z" />
								<g id="trademark">
									<g id="Ellipse 1">
										<path id="Vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M116.235 68.6192C114.489 68.6192 113.074 70.0345 113.074 71.7803C113.074 73.5262 114.489 74.9414 116.235 74.9414C117.981 74.9414 119.396 73.5262 119.396 71.7803C119.396 70.0345 117.981 68.6192 116.235 68.6192ZM112.17 71.7803C112.17 69.5351 113.99 67.715 116.235 67.715C118.48 67.715 120.3 69.5351 120.3 71.7803C120.3 74.0255 118.48 75.8456 116.235 75.8456C113.99 75.8456 112.17 74.0255 112.17 71.7803Z" />
									</g>
									<g id="MR">
										<path d="M114.816 70.6042L115.476 72.2525L116.137 70.6042H116.482V72.6244H116.216V71.8377L116.241 70.9885L115.578 72.6244H115.374L114.712 70.9927L114.738 71.8377V72.6244H114.472V70.6042H114.816Z" />
										<path d="M117.693 71.8072H117.219V72.6244H116.951V70.6042H117.62C117.847 70.6042 118.022 70.656 118.144 70.7596C118.267 70.8632 118.329 71.014 118.329 71.2119C118.329 71.3377 118.295 71.4473 118.226 71.5408C118.159 71.6342 118.064 71.704 117.943 71.7503L118.418 72.6077V72.6244H118.132L117.693 71.8072ZM117.219 71.5893H117.628C117.761 71.5893 117.866 71.5551 117.943 71.4866C118.022 71.4182 118.061 71.3266 118.061 71.2119C118.061 71.087 118.024 70.9913 117.949 70.9247C117.875 70.8581 117.767 70.8244 117.627 70.8234H117.219V71.5893Z" />
									</g>
								</g>
							</g>
						</g>
					</svg>
					<div className='content'>
						<p className='grupo'>grupo</p>
						<p className='intecsa'>intecsa</p>
					</div>
				</div>
				<p className='footer-message'>A nuestros socios comerciales, clientes y amigos les agradecemos por permanecer juntos en épocas difíciles, esto nos hace más fuertes, nos consolida como un grupo de cara al futuro, tomando conciencia de los tiempos.</p>

				<div className='footer-social_networks'>

					<a href="https://api.whatsapp.com/send/?phone=5215546371510&amp;text=Hola, he visto tu página!, me gustaría recibir más información"
						target="_blank"
						rel="noopener follow noreferrer"
						aria-label="Whatsapp">
						<i className="fab fa-whatsapp"></i>
					</a>
					<a href="https://www.facebook.com/Grupo-Intecsa-Mx-Oficial-213945636173987/"
						target="_blank"
						rel="noopener follow noreferrer"
						aria-label="Facebook">
						<i className="fab fa-facebook"></i>
					</a>
					<a href="https://www.linkedin.com/company/grupo-intecsa/about/"
						target="_blank"
						rel="noopener follow noreferrer"
						aria-label="Linkedin">
						<i className="fab fa-linkedin-in"></i>
					</a>

					<a href="https://www.youtube.com/channel/UCLglnunszAKCtMYLaNDBpUw/featured"
						target="_blank"
						rel="noopener follow noreferrer"
						aria-label="youtube">
						<i className="fab fa-youtube"></i>
					</a>

					<a href="https://www.instagram.com/grupointecsamx/?hl=es-la"
						target="_blank"
						rel="noopener follow noreferrer"
						aria-label="Síguenos en instagram">
						<i className="fab fa-instagram"></i>
					</a>

					<a href="https://goo.gl/maps/HEtXjtPLE2dBZ3C68"
						target="_blank"
						rel="noopener follow noreferrer"
						aria-label="Cómo llegar">
						<i className="fas fa-map-marked-alt"></i>
					</a>
				</div>
			</div>

			<div className='footer-contact'>
				<h3>Contacto</h3>

				<div className='footer-list'>
					<i className="fas fa-map-marker-alt"></i>
					<p >
						Calle Raúl Zárate Machuca No.11, <br />
						Colonia Cuevitas, C. P.01220, <br />
						Ciudad de México, CDMX.
					</p>
				</div>

				<div className='footer-list'>
					<i className="fas fa-paper-plane"></i>
					<p>contacto@grupointecsa.com</p>
				</div>

				<div className='footer-list'>
					<i className="fas fa-phone-alt"></i>
					<p>(+52) 55 5770-1197</p>
				</div>

			</div>

			<div className='footer-links'>
				<h3>Enlaces útiles</h3>
				<div className='footer-list'>
					<i className="fas fa-link"></i>
					<a href="#about">Nosotros</a>

				</div>
				<div className='footer-list'>
					<i className="fas fa-link"></i>
					<a href="#projects">Proyectos</a>

				</div>

				<div className='footer-list'>
					<i className="fas fa-link"></i>
					<Link to='blog'>Blog</Link>
				</div>

			</div>

			<div className='footer-post'>
				<h3>Post recientes</h3>

				<div className='footer-list'>
					<div className='footer-post_date'>
						<p className='footer-post_day'>11</p>
						<p className='footer-post_month'>AGO</p>
						<p className='footer-post_year'>2021</p>
					</div>
					<div className='footer-post_data'>
						<h4>¿ Qué es código red ?</h4>
						<p>
							<i className="fas fa-user-tie"> </i> Admin -
							<i className="fas fa-comments"> 24</i>
						</p>
					</div>
				</div>

				<div className='footer-list'>
					<div className='footer-post_date'>
						<p className='footer-post_day'>30</p>
						<p className='footer-post_month'>JUL</p>
						<p className='footer-post_year'>2021</p>
					</div>
					<div className='footer-post_data'>
						<h4>5 Ventajas de usar Electroducto</h4>
						<p>
							<i className="fas fa-user-tie"> </i> Admin -
							<i className="fas fa-comments"> 13</i>
						</p>
					</div>
				</div>

			</div>

		</section>
	);
};
