import React from "react";
import { Link } from "react-router-dom";

import { Enterprises } from "../assets/data";

export const EnterpriseCards = () => {
	return (
		<div id="Enterprises" className="CardWrapper">
			{Enterprises.map((Enterprise) => (
				<div className="EnterpriseCard" key={Enterprise.index}>
					<div className="EnterpriseCard-header">
						<img src={Enterprise.image} alt={Enterprise.title} />
						<span className="EnterpriseCard-number">{Enterprise.index}</span>
					</div>
					<h3 className="EnterpriseCard-title">{Enterprise.title}</h3>
					<p className="EnterpriseCard-paragraph">{Enterprise.paragraph}</p>

					<Link to="/git/underConstruction">
						Leer más<i className="fas fa-angle-double-right"></i>
					</Link>
				</div>
			))}
		</div>
	);
};
