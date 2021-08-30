import React from "react";
import { Link } from 'react-router-dom'

import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";


export const Navbar = () => {

	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(startLogout());
	}


	return (
		<header className="w_100">
			<nav className="nav align">
				<div className="nav-container">
					<Link className="nav-logo" to='/'>
						<img src="logo.svg" alt="Logotipo Grupo Intecsa S. A. de C. V." />
					</Link>

					<label className="nav-label" htmlFor="menu">
						<i className="nav-image fas fa-bars"></i>
					</label>
					<input className="nav-input" type="checkbox" name="menu" id="menu" />

					<div className="nav-menu">

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
						 */}
						<Link className="nav-item" to='/blog'>
							Blog
						</Link>
						<a className="nav-item" href="https://itamx.com/dashboard">
							Catálogo virtual
						</a>
						<a
							className="nav-item"
							href='#Logout'
							onClick={handleLogout}
							title='Logout'>
							<i className="fas fa-sign-out-alt"></i>
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};
