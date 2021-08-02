import React from "react";

import { Enterprises } from "../assets/data";

export const EnterpriceCard = () => {
	return (
		<>
			<div id='Enterprices' className="EnterpriceCard">
				<div className="EnterpriceCard-header">
					<img src={Enterprises[1].image} alt={Enterprises[1].title} />
					<span className="EnterpriceCard-number">{Enterprises[1].index}</span>
				</div>
				<h3 className="EnterpriceCard-title">{Enterprises[1].title}</h3>
				<p className="EnterpriceCard-paragraph">{Enterprises[1].paragraph}</p>
				<button className="btn_frame">Leer más</button>
			</div>

			<div className="EnterpriceCard">
				<div className="EnterpriceCard-header">
					<img src={Enterprises[2].image} alt={Enterprises[2].title} />
					<span className="EnterpriceCard-number">{Enterprises[2].index}</span>
				</div>
				<h3 className="EnterpriceCard-title">{Enterprises[2].title}</h3>
				<p className="EnterpriceCard-paragraph">{Enterprises[2].paragraph}</p>
				<button className="btn_frame">Leer más</button>
			</div>

			<div className="EnterpriceCard">
				<div className="EnterpriceCard-header">
					<img src={Enterprises[3].image} alt={Enterprises[1].title} />
					<span className="EnterpriceCard-number">{Enterprises[3].index}</span>
				</div>
				<h3 className="EnterpriceCard-title">{Enterprises[3].title}</h3>
				<p className="EnterpriceCard-paragraph">{Enterprises[3].paragraph}</p>
				<button className="btn_frame">Leer más</button>
			</div>

			<div className="EnterpriceCard">
				<div className="EnterpriceCard-header">
					<img src={Enterprises[4].image} alt={Enterprises[4].title} />
					<span className="EnterpriceCard-number">{Enterprises[4].index}</span>
				</div>
				<h3 className="EnterpriceCard-title">{Enterprises[4].title}</h3>
				<p className="EnterpriceCard-paragraph">{Enterprises[4].paragraph}</p>
				<button className="btn_frame">Leer más</button>
			</div>
		</>
	);
};
