import React, { Component} from "react";
import weather1 from '../../images/weather1.png';
import weather2 from '../../images/weather2.png';
import weather3 from '../../images/weather3.png';
import Images from './imagesComponent';
import ScrollToTopOnMount from "./scrollToTop";

class WeatherScan extends Component {
	render(){
		let images = [weather1, weather2, weather3]
		
		return(
			<div className="projectSection">
				<ScrollToTopOnMount />
				<div className="projectDesc">
					<h2>Weather Scan</h2>
					<p>
						A weather site where you can lookup a location's current weather.
					</p>
					<p>Tools:  React, React-Places-Autocomplete, Webpack, Google Maps Javascript API, OpenWeather API, and Unsplash API.</p>
					<ul>
						<li><a href="https://marteenreactweatherapp.herokuapp.com/" target="_blank">Link</a></li>
					</ul>
				</div>
				<Images images={images} />

			</div>
		);
	}
}

export default WeatherScan;