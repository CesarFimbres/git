import React from "react";

import { NavHashLink } from 'react-router-hash-link'

import { Enterprises } from "../assets/data";

export const EnterpriseCards = () => {
	return (
		<div id="enterprises" className="CardWrapper">
			{Enterprises.map((Enterprise) => (
				<div className="EnterpriseCard" key={Enterprise.index}>
					<div className="EnterpriseCard-header">
						<img src={Enterprise.image} alt={Enterprise.title} />
						<span className="EnterpriseCard-number">{Enterprise.index}</span>
					</div>
					<h3 className="EnterpriseCard-title">{Enterprise.title}</h3>
					<p className="EnterpriseCard-paragraph">{Enterprise.paragraph}</p>

					<NavHashLink
						activeClassName="link_active"
						className="nav-item right"
						to="/git/underConstruction/#navbar"
					// scroll={(el) => scrollWithOffset(el, 0)}
					>
						Leer más<i className="fas fa-angle-double-right"></i>
					</NavHashLink>
				</div>
			))}
		</div>
	);
};
