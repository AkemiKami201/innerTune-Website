import CarouselD from "../components/Carousel-MD";
import { Carousel } from "flowbite-react";

const slides = [
    "https://i.imgur.com/1SQUGhw.jpg",
    "https://i.imgur.com/S5yvhQW.jpg",
    "https://i.imgur.com/jcmFHvl.jpg",
    "https://i.imgur.com/Z91epex.jpg",
    "https://i.imgur.com/utHFGKL.jpg",
    "https://i.imgur.com/PC0RLIU.jpg",
    "https://i.imgur.com/dd0Pb3V.jpg",
    "https://i.imgur.com/IURqoK7.jpg",
    ]

const CarouselMD = () => {
	return (
		<main className="p-4 w-6/12 mx-auto">
			<div className="container border w-20 rounded-lg border-neutral-700 rounded-xl md:container md:mx-auto p-4 mt-6 max-w-lg">
				<CarouselD autoSlide={true} autoSlideInterval={5000}>
						{slides.map((s) => (
							<img className="rounded-lg" src={s} />
							))}
				</CarouselD>
				
				{/*<Carousel slideInterval={5000}>
			        <img src="https://i.imgur.com/1SQUGhw.jpg" alt="..." />
			        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
			        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
			        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
			        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
			     </Carousel>*/}
			</div>
		</main>
	);
};

export default CarouselMD