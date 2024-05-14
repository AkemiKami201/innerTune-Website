import Carousel1 from "../components/Carousel-MD";
import { Carousel } from "flowbite-react";

{/* Importacion de imagenes, subido por la plataforma Imgur */}
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

{/* Funcion importada de Carousel-MD.jsx */}
const CarouselMD = () => {
	return (			
		<div className="grid h-56 grid-cols-2 gap-4 w-600 sm:h-64 xl:h-80 2xl:h-96">
	      <Carousel>
	        <img src="https://i.imgur.com/1SQUGhw.jpg" alt="..." />
	        <img src="https://i.imgur.com/S5yvhQW.jpg" alt="..." />
	        <img src="https://i.imgur.com/jcmFHvl.jpg" alt="..." />
	        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
	        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
	      </Carousel>
	      <Carousel indicators={false}>
	        <img src="https://i.imgur.com/1SQUGhw.jpg" alt="..." />
	        <img src="https://i.imgur.com/S5yvhQW.jpg" alt="..." />
	        <img src="https://i.imgur.com/jcmFHvl.jpg" alt="..." />
	        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
	        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
	      </Carousel>
	    </div>
	);
};

export default CarouselMD