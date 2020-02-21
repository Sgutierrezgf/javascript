import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';
import '../assets/styles/components/Search.scss';
import '../assets/styles/components/Categories.scss';
import '../assets/styles/components/Carousel.scss';
import '../assets/styles/components/CarouselItem.scss';
import '../assets/styles/components/Footer.scss';

const App = () => (
	<div className="App">
		<Header />
		<Search />

		<Categories title="Mi lista">
			<Carousel>
				<CarouselItem />
				<CarouselItem />
				<CarouselItem />
				<CarouselItem />
				<CarouselItem />
			</Carousel>
		</Categories>

		<Categories title="Tendencias">
			<Carousel>
				<CarouselItem />
				<CarouselItem />
			</Carousel>
		</Categories>

		<Categories title="Originales de platzi video">
			<Carousel>
				<CarouselItem />
			</Carousel>
		</Categories>

		<Footer />
	</div>
);

export default App;
