import React from "react";

import { Enterprises } from "../assets/data";


export const EnterpriseCards = () => {

	return (
		<div id='Enterprises' className='CardWrapper'>

			{
				Enterprises.map(Enterprise => (

					<div className="EnterpriceCard" key={Enterprise.index}>
						<div className="EnterpriceCard-header">
							<img src={Enterprise.image} alt={Enterprise.title} />
							<span className="EnterpriceCard-number">{Enterprise.index}</span>
						</div>
						<h3 className="EnterpriceCard-title">{Enterprise.title}</h3>
						<p className="EnterpriceCard-paragraph">{Enterprise.paragraph}</p>
						<a href="#Leer_mas">
							Leer más<i className="fas fa-angle-double-right"></i>
						</a>
					</div>

				))
			}
		</div>
	);
};
