import React from "react";

export const Navbar = () => {
	return (
		<header className="w_100">
			<nav className="nav align">
				<div className="nav-container">
					<div className="nav-logo">
						<img src="logo.svg" alt="Logotipo Grupo Intecsa S. A. de C. V." />
					</div>

					<label class="nav-label" for="menu">
						<i class="nav-image fas fa-bars"></i>
					</label>
					<input className="nav-input" type="checkbox" name="menu" id="menu" />

					<div class="nav-menu">
						<a className="nav-item" href="#Services">
							Servicios
						</a>
						<a className="nav-item" href="#Enterprices">
							Empresas
						</a>
						<a className="nav-item" href="#About">
							Nosotros
						</a>
						<a className="nav-item" href="#Blog">
							Blog
						</a>
					</div>
				</div>
			</nav>
		</header>
	);
};
