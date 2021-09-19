import React from 'react';

// import { useSelector } from 'react-redux';
// import { BlogCard } from './BlogCard'

import { BlogData } from '../../../assets/data'
import { HeroData } from '../../../assets/data';
import { Footer } from '../../sections/Footer';
import { Navbar } from "../../sections/Navbar";

export const BlogScreen = () => {

	// const { notes } = useSelector(state => state.blogs)

	return (

		<div className='blog_screen'>
			<Navbar />

			<div id='blog' className='blog_screen-hero animate__animated animate__fadeIn'>
				<img src={HeroData[0].image} alt={HeroData[0].title} loading="lazy" />
				<div className='blog_screen-overlay'>
					<div className='blog_screen-hero_wrapper'>
						<h3>Bienvenido a nuestro BLOG</h3>
					</div>
				</div>
			</div>

			<div className='blog_screen-categories'>
				<ul>
					<li>construcción</li>
					<li>energía</li>
					<li>iluminación</li>
					<li>instalaciones</li>
					<li>equipo eléctrico</li>
				</ul>
			</div>





			<div className='blog_screen-container'>

				<main className='blog_screen-content'>

					<div className='blog_card-container' >

						<div className='blog_card-category' >
							<i className="fas fa-angle-double-right"> </i>
							{BlogData[0].category}
						</div>

						<img src={BlogData[0].imageUrl} alt={BlogData[0].title} />

						<div className='blog_card-wrapper' >
							<div className='blog_card-header' >

								<div className='blog_card-date' >
									<h4>05</h4>
									<h5>Ago.</h5>
									<h6>2021</h6>
								</div>

								<div className='blog_card-title_wrapper' >
									<h3> <span>autor: </span> {BlogData[0].author}</h3>
									<h2> {BlogData[0].title} </h2>
								</div>

							</div>

							<div className='blog_card-body' >
								<p>
									Hablar de <span className='underline'>Código de Red</span>, hoy en día es muy recurrente en el entorno eléctrico y otros ámbitos; sin embargo, aún no queda totalmente claro. Nos han dicho que debemos cumplirlo para no ser sancionados por la <span className='underline'>Comisión Reguladora de Energía (CRE)</span> y pagar multas por miles de pesos, pero te has preguntado: ¿Qué es el Código de Red? y ¿Por qué debo cumplirlo?
								</p>

								<p>
									El Código de Red es el principal <span className='underline'>instrumento en materia de confiabilidad</span> emitido por la Comisión Reguladora de Energía (CRE); corresponde a las disposiciones administrativas de carácter general que establecen los criterios de eficiencia, calidad, confiabilidad, continuidad, seguridad y sustentabilidad del <span className='underline'>Sistema Eléctrico Nacional</span> (SEN).
								</p>

								<p>
									Es aplicable y obligatorio para centros de carga en media y alta tensión, ademá de toda industria o comercio bajo las condiciones mencionadas y que esté conectado al SEN.
								</p>

								<p>
									Se trata de los estudios y análisis de parámetros que se aplican a un sistema eléctrico para verificar que los resultados se encuentran dentro de los estándares de operación y, de este modo, tener la certeza de que nuestro SEN puede operar en condiciones estables para suministrar energía eléctrica a los usuarios y abastecer sus necesidades de consumo eléctrico.
								</p>

								<p className='bold'
								>
									Requerimientos técnicos
								</p>

								<ul>
									<li>Tensión </li>
									<li>Frecuencia </li>
									<li>Corto circuito </li>
									<li>factor de potencia </li>
									<li>coordinación de protecciones </li>
									<li>control </li>
									<li>intercambio de información </li>
									<li>calidad de la energía (flicker, distorsión armónica de corriente y desbalance de corriente) </li>
								</ul>

								<p>
									A través de estos requerimientos técnicos el SEN se regulará en diversas actividades como interconexión de centrales eléctricas, conexión de centros de carga, planeación y operación de la <span className='underline'>Red Nacional de Distribución y las Redes Generales de Distribución.</span>
								</p>

								<p>
									Cabe mencionar que la vigilancia del cumplimiento del Código de Red es obligación de la Comisión Reguladora de Energía, para lo cual podrá llevar a cabo los actos de verificación e inspección que determine necesarios por conducto de los servidores públicos que tenga adscritos o mediante las unidades de inspección.
								</p>

								<p>
									En conclusión, tras la Reforma Energética lo que se quiere lograr es que todos los usuarios y suministradores que estén conectados al SEN tengan energía eléctrica de buena calidad. En muchas ocasiones no vemos más allá de nuestra propia instalación eléctrica, es decir no nos percatamos que detrás de todo esto tenemos una gran infraestructura que es la encargada de suministrar energía eléctrica a cada usuario del país y que necesita que se le corresponda de la misma manera para tener una generación, distribución y comercialización de la energía eléctrica eficiente.
								</p>

								<p>
									Definitivamente, el objetivo del Código de Red es salvaguardar la <span className='underline'>operación correcta del SEN</span>o en términos de la calidad de energía. Con el fin de darle continuidad, seguridad y sustentabilidad a la <span className='underline'>Red Nacional de Distribución</span> y a las Redes Generales de Distribución.
								</p>

								<a href='https://www.gob.mx/cre/documentos/guia-sobre-los-requerimientos-tecnicos-del-codigo-de-red-aplicables-a-centros-de-carga' target="_blank" rel="noreferrer">
									Leer más <i className="fas fa-angle-double-right"></i>{" "}
								</a>
							</div>
						</div>

					</div>

					<div className='blog_card-container' >

						<div className='blog_card-category' >
							<i className="fas fa-angle-double-right"> </i>
							{BlogData[1].category}
						</div>

						<img src={BlogData[1].imageUrl} alt={BlogData[1].title} />

						<div className='blog_card-wrapper' >
							<div className='blog_card-header' >

								<div className='blog_card-date' >
									<h4>12</h4>
									<h5>Ago.</h5>
									<h6>2021</h6>
								</div>

								<div className='blog_card-title_wrapper' >
									<h3> <span>autor: </span> {BlogData[1].author}</h3>
									<h2> {BlogData[1].title} </h2>
								</div>

							</div>

							<div className='blog_card-body' >
								<p className='bold'>
									Mediante mejoras en la eficiencia energética, el consumo mundial de combustibles fósiles para la generación de energía podría reducirse hasta en un 30 por ciento.
								</p>

								<p>
									El calentamiento global es el desafío más importante al que nos enfrentamos, por lo que debemos actuar con rapidez. Para inhibir la creciente demanda de energía, la <span className='underline'>Agencia Internacional de Energía (AIE) </span> ha enfatizado durante mucho tiempo dos factores: la relación entre el crecimiento económico y el crecimiento del consumo de energía y el vínculo entre el <span className='underline'>crecimiento del consumo de energía</span> y las emisiones de dióxido de carbono.
								</p>

								<p>
									La solución está “lista para usarse” para romper estos vínculos ya están disponibles. La energía, ya sea electricidad o combustible, debe utilizarse de forma inteligente. Esto significa <span className='underline'>eficiencia energética </span>. Al mismo tiempo, las tecnologías existentes permiten la utilización de fuentes de energía renovables que no emiten gases de efecto invernadero. Suena simple, ¿verdad?
								</p>

								<p>
									Aquí es donde entran en escena los ingenieros, cuyas innovaciones hacen posible un mundo sostenible. Como parte de una competencia de mercado saludable, los ingenieros continuarán desarrollando <span className='underline'>motores</span> de mayor eficiencia y variadores de velocidad más inteligentes. El arduo trabajo de ingeniería permite a nuestros clientes ahorrar 490 TWh de energía al año con los <span className='underline'>variadores</span> de velocidad de ABB, ahorros equivalentes a más de seis veces el consumo anual de energía eléctrica en México. Este es en sí mismo un gran número, y las buenas noticias no se detienen ahí: casi el 70 por ciento de los motores del mundo todavía están esperando una solución de eficiencia energética. Hay suficiente trabajo para los ingenieros, seguro.
								</p>

								<p>
									El aspecto más importante de mi propio trabajo es el aspecto ético. <span className='underline'>World Energy Outlook</span> de la IEA adopta una posición firme sobre el vínculo entre la eficiencia energética y los niveles de vida. Hasta 1.300 millones de personas en el mundo viven sin electricidad y 2.600 millones sin la posibilidad de una preparación higiénica de los alimentos. Las medidas de eficiencia energética permiten un acceso asequible a la electricidad, lo que aumenta el nivel de vida. Ciertamente hay bastante trabajo por hacer, incluso después de mi jubilación.
								</p>
							</div>
						</div>

					</div>

				</main>

				<aside className='blog_aside'>

					<form className='blog_aside-form_group'>
						<input type="text" name="search_blog" placeholder='Buscar blog' />
						<i className="fas fa-search"></i>
					</form>

					<div
						className='blog_entry animate__animated animate__fadeInLeft animate__faster'
					>
						<img
							className='blog_entry-picture'
							src={BlogData[0].imageUrl}
							alt={BlogData[0].title} loading='lazy'
						/>
						<div className='blog_entry-body' >
							<h1 className='blog_entry-title'>
								{BlogData[0].title}
							</h1>
							<div className='blog_entry-content'>
								{BlogData[0].intro}
							</div>
						</div>
						<div className='blog_entry-date' >
							<h4>05</h4>
							<h5>Ago</h5>
							<h5>2021</h5>
						</div>
					</div>

					<div
						className='blog_entry animate__animated animate__fadeInLeft animate__faster'
					>
						<img
							className='blog_entry-picture'
							src={BlogData[1].imageUrl}
							alt={BlogData[1].title} loading='lazy'
						/>
						<div className='blog_entry-body' >
							<h1 className='blog_entry-title'>
								{BlogData[1].title}
							</h1>
							<div className='blog_entry-content'>
								{BlogData[1].intro}
							</div>
						</div>
						<div className='blog_entry-date' >
							<h4>12</h4>
							<h5>Ago</h5>
							<h5>2021</h5>
						</div>
					</div>
				</aside>

			</div>

			<Footer />

		</div>
	)
}
