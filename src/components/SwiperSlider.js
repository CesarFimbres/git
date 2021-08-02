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
			slidesPerView={3}
			navigation
			loop={true}
			mousewheel={true}
			autoplay={
				{
					"delay": 2500,
					"disableOnInteraction": false
				}
			}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
		>
			<SwiperSlide>

				<div className='projects-swiperslider'>
					<img src={ProjectsData[0].image} alt={ProjectsData[0].title} />
				</div>

			</SwiperSlide>

			<SwiperSlide>
				<div className='projects-swiperslider'>
					<img src={ProjectsData[1].image} alt={ProjectsData[1].title} />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='projects-swiperslider'>
					<img src={ProjectsData[2].image} alt={ProjectsData[2].title} />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='projects-swiperslider'>
					<img src={ProjectsData[3].image} alt={ProjectsData[3].title} />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='projects-swiperslider'>
					<img src={ProjectsData[4].image} alt={ProjectsData[4].title} />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='projects-swiperslider'>
					<img src={ProjectsData[5].image} alt={ProjectsData[5].title} />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='projects-swiperslider'>
					<img src={ProjectsData[6].image} alt={ProjectsData[6].title} />
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='projects-swiperslider'>
					<img src={ProjectsData[7].image} alt={ProjectsData[7].title} />
				</div>
			</SwiperSlide>


		</Swiper>
	);
};