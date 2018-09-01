import React, {Component} from "react";

class Images extends Component {

	render(){

		let images = this.props.images;
		let imageList = images.map((image) => {
			return <li key={image}><img src={image}/></li>;
		});

		return(
			<div className="imageList">
				<ul>{imageList}</ul>
			</div>
		)

	}

}

export default Images;