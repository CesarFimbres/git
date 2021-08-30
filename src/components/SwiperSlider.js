// Import data & images to load in swiperSlider
import { ProjectsData } from '../assets/data';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Mousewheel, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Autoplay, Mousewheel, Navigation, Pagination, Scrollbar, A11y]);

export default function SwiperSlider() {

	return (
		<Swiper
			direction={'horizontal'}
			spaceBetween={20}
			slidesPerView={2}
			navigation
			loop={true}
			mousewheel={false}
			autoplay={
				{
					"delay": 2500,
					"disableOnInteraction": false
				}
			}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
		// onSwiper={(swiper) => console.log(swiper)}
		// onSlideChange={() => console.log('slide change')}
		>

			{ProjectsData.map((slideContent, index) => (
				<SwiperSlide key={slideContent.index} virtualIndex={index}>
					<div className='projects-swiperslider'>
						<img src={slideContent.image} alt={slideContent.title} loading="lazy" />
					</div>
				</SwiperSlide>
			))}

		</Swiper>
	);
};