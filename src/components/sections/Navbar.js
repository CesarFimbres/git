import React from "react";
import { Link } from "react-router-dom";

import { NavHashLink } from 'react-router-hash-link'

import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";


// * When use Link this help to go to top element with an offSet param if you like 
const scrollWithOffset = (el, offSet = 0) => {
	const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
	const yOffset = offSet;
	window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

export const Navbar = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<header className="w_100">
			<nav id='navbar' className="nav align">
				<div className="nav-container">
					<Link className="nav-logo" to="/git/">
						<svg
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 850.4 850.4"
							enable-background="new 0 0 850.4 850.4"
						>
							<path
								fill="#FFFFFF"
								d="M440.1,434.2h-14.6c-1.1,3.5-2.4,7-3.9,10.5c-5.4,11.7-12.6,20.9-21.6,27.7c-8.8,7.3-20.2,12.4-33.8,15.6
								c-13.5,2.8-28.6,4.5-45.5,4.6v0c-0.3,0-0.5,0-0.8,0c-0.2,0-0.4,0-0.6,0h-0.7v0c-39-0.2-65.7-6.3-80.6-18.2
								c-12.9-10.4-20.3-23.8-22.1-40.1h-94.1V514h318.4V434.2L440.1,434.2z M429.4,408.7c0,5.8-0.6,11.5-1.7,17h119.2v-66.6h-28.2v-13.4
								h-89.3V408.7L429.4,408.7z M440.1,350.5H517v52.3h-76.9V350.5L440.1,350.5z M299.4,438.4c5.1,3.7,11.9,5.7,20.1,5.8
								c10.7-0.2,18.5-3,23.7-8.7c0.4-0.4,0.7-0.8,1-1.2H295C296.3,435.9,297.7,437.3,299.4,438.4L299.4,438.4z M518.7,302.9h28.2v-37
								l17.1-8.8H429.4v80h89.3V302.9L518.7,302.9z M440.1,561.7H121.7v22.6h318.4V561.7L440.1,561.7z M121.7,741.7h651.2v-18H121.7V741.7
								L121.7,741.7z M440.1,524.9H121.7v22.6h318.4V524.9L440.1,524.9z M207.9,301.3c0-16.9,2.3-31.6,6.7-44.2h-92.9v80h90.4
								C209.3,326.5,207.9,314.6,207.9,301.3L207.9,301.3z M230.7,229.6c2.8-3.1,5.9-5.9,9-8.4H121.7v22.4h99
								C223.6,238.4,226.9,233.7,230.7,229.6L230.7,229.6z M318.6,350.2c0,0,3.7-0.1,5.4-0.4c3.9-0.7,7.4-2.1,10.7-4.1h-33.3
								c2.9,1.8,6.2,3.1,9.7,3.8C313.5,350,315.9,350.2,318.6,350.2L318.6,350.2z M215.8,415.5l74.9,8.5c0.1,0.6,0.3,1.1,0.5,1.7h57.7
								c1.9-5.6,2.9-12.8,2.9-21.7v-30.4c-7.8,9-15.3,15.8-22.9,19.7c-3.3,1.6-6.6,3.3-10.1,4.5v0.1c-8.8,3.2-18.2,4.6-28.2,4.6
								c-26.8,0-48.4-11.7-64.9-35.3c-4.5-6.4-8.2-13.6-11-21.6h-93v80h93.6C215.3,423,215.3,419.9,215.8,415.5L215.8,415.5z M357.1,239.4
								v-18.2h-16.4C346.5,226,351.9,232,357.1,239.4L357.1,239.4z M317.1,261c-9.5,0-17.5,3.6-23.3,10.7c-5.8,7.1-8.8,19-8.8,35.5
								c0,13.1,2.4,23,7.4,30h51.7c5.5-7.2,8.2-17.3,8.2-30.9c0-14.8-3.4-26-10.2-33.3c-6.6-7.5-14.4-11.4-23.6-11.9V261H317.1L317.1,261z
								M121.7,210.7h136.4c9.6-3.8,20.3-5.7,32-5.7c10.9,0,20.4,1.2,28.7,3.9v0.2c1.6,0.5,3.2,1,4.8,1.6h33.6v-1h72.2v1h343.5v-22.4H121.7
								V210.7L121.7,210.7z M693.6,494.8c9.1,0,16.6-7.1,16.6-16.1c0-9-7.5-16.3-16.6-16.3c-9,0-16.3,7.3-16.3,16.3
								C677.2,487.8,684.5,494.8,693.6,494.8L693.6,494.8z M695.9,472.6h5.2c1.3,0,2.2,0.1,2.8,0.3c0.6,0.2,1.1,0.6,1.4,1.2
								c0.4,0.6,0.5,1.2,0.5,1.9c0,0.9-0.3,1.7-0.8,2.3c-0.5,0.6-1.3,1-2.4,1.1c0.5,0.3,1,0.6,1.3,1c0.3,0.4,0.8,1,1.4,2l1.5,2.4h-2.9
								l-1.8-2.6c-0.6-0.9-1.1-1.5-1.3-1.8c-0.2-0.2-0.5-0.4-0.7-0.5c-0.3-0.1-0.7-0.1-1.2-0.1h-0.5v5.1h-2.4V472.6L695.9,472.6z
								M681.7,472.6h3.7l2.2,8.3l2.2-8.3h3.7v12.1h-2.3v-9.6l-2.4,9.6h-2.4l-2.4-9.6v9.6h-2.3V472.6L681.7,472.6z M121.7,714.9h651.2
								v-18.5H121.7V714.9L121.7,714.9z M626.9,447.6c2.2,4.1,6.8,6.6,13.1,6.6c5.8,0,13.6-1.9,23.8-5.1l5.6,53c-19,4.1-36.7,6.3-53.3,6.3
								c-19.2,0-33.3-2.4-42.3-7.5c-9.2-4.9-16.1-12.2-20.2-22.1c-4.3-9.1-6.5-24.4-6.8-44.5H517V514h255.9v-79.8H624.5
								C624.7,440.7,625.5,445.1,626.9,447.6L626.9,447.6z M693.6,459.1c10.9,0,19.9,8.7,19.9,19.7c0,10.9-9.1,19.4-19.9,19.4
								c-10.9,0-19.6-8.5-19.7-19.4C673.9,467.8,682.7,459.1,693.6,459.1L693.6,459.1z M121.7,125.5v51.3h651.2v-51.3H121.7L121.7,125.5z
								M666.8,359.1h-42.3v66.6h148.4v-80H666.8V359.1L666.8,359.1z M624.5,302.9h42.3v34.3h106.1v-80H624.5V302.9L624.5,302.9z
								M429.4,243.5h161.3l33.8-17.3v17.3h148.4v-22.4H429.4V243.5L429.4,243.5z M517,627.8h-76.9v-31.6H121.7v44.3h651.2v-44.3H517V627.8
								L517,627.8z M121.7,686h651.2v-29.9H121.7V686L121.7,686z M517,584.3h255.9v-22.6H517V584.3L517,584.3z M702.3,477.6
								c0.3-0.1,0.5-0.3,0.7-0.5c0.2-0.2,0.3-0.5,0.3-0.9c0-0.4-0.1-0.7-0.3-1c-0.2-0.3-0.5-0.4-0.9-0.5c-0.2,0-0.8,0-1.8,0h-1.9v3.1h1.8
								C701.3,477.8,702.1,477.7,702.3,477.6L702.3,477.6z M517,547.6h255.9v-22.6H517V547.6L517,547.6z"
							/>
						</svg>
					</Link>

					<label className="nav-label" htmlFor="menu">
						<i className="nav-image fas fa-bars"></i>
					</label>
					<input className="nav-input" type="checkbox" name="menu" id="menu" />

					<div className="nav-menu">

						<NavHashLink
							activeClassName="link_active"
							className="nav-item"
							to="/git/blog/#blog"
							scroll={(el) => scrollWithOffset(el, -78)}
						>
							Blog
						</NavHashLink>

						<NavHashLink
							activeClassName="link_active"
							className="nav-item"
							to="/git/#enterprises"
							scroll={(el) => scrollWithOffset(el, -45)}
						>
							Empresas
						</NavHashLink>

						<NavHashLink
							activeClassName="link_active"
							className="nav-item"
							to="/git/#mission"
							scroll={(el) => scrollWithOffset(el, 45)}
						>
							Misión
						</NavHashLink>

						<NavHashLink
							activeClassName="link_active"
							className="nav-item"
							to="/git/#about"
							scroll={(el) => scrollWithOffset(el, 45)}
						>
							Nosotros
						</NavHashLink>

						<a className="nav-item" href="https://itamx.com/dashboard">
							Catálogo virtual
						</a>

						<NavHashLink
							activeClassName="link_active"
							className="nav-item"
							onClick={handleLogout}
							title="Logout"
							to="/git/home/#home"
							scroll={(el) => scrollWithOffset(el, -45)}
						>
							<i className="fas fa-sign-out-alt"></i>
						</NavHashLink>

						{/*

						<a className="nav-item" href="#Services">
							Servicios
						</a>
						<a className="nav-item" href="#Enterprises">
							Empresas
						</a>
						<a className="nav-item" href="#About">
							Nosotros
						</a>

						<a
							className="nav-item"
							href="/git/home/#home"
							onClick={handleLogout}
							title="Logout"
						>
							<i className="fas fa-sign-out-alt"></i>
						</a>

						<NavHashLink
							activeClassName="link_active"
							className="nav-item"
							to="/git/#Services"
							scroll={(el) => scrollWithOffset(el, -45)}
						>
							Servicios
						</NavHashLink>
						
						 */}

					</div>
				</div>
			</nav>
		</header>
	);
};
