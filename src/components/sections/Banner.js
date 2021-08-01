import React from "react";

import { BannerData } from '../../assets/data'

export const Banner = () => {
	return (
		<section id="Banner" className="banner align w_100">
			<img src={BannerData[0].image} alt={BannerData[0].title} />
			<div className='banner-overlay'>
				<h3>{BannerData[0].title}</h3>
				<h2>{BannerData[0].phone}</h2>
				<h4>{BannerData[0].address}</h4>
			</div>
		</section >
	);
};
