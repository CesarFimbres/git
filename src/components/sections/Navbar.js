import React from "react";

export const Navbar = () => {
	return (
		<header className="w_100">
			<nav className="nav align">
				<div className="nav-container">
					<div className="nav-logo">
						<img src="logo.svg" alt="Logotipo Grupo Intecsa S. A. de C. V." />
					</div>

					<label className="nav-label" htmlFor="menu">
						<i className="nav-image fas fa-bars"></i>
					</label>
					<input className="nav-input" type="checkbox" name="menu" id="menu" />

					<div className="nav-menu">
						{/* <a className="nav-item" href="#Services">
							Servicios
						</a> */}
						<a className="nav-item" href="#Enterprises">
							Empresas
						</a>
						<a className="nav-item" href="#About">
							Nosotros
						</a>
						<a className="nav-item" href="#Blog">
							Blog
						</a>
						<a className="nav-item" href="https://itamx.com/dashboard">
							Catálogo virtual
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};
