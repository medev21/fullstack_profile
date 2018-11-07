import React, { Component} from "react";
import kanban1 from '../../images/kanban1.png';
import kanban2 from '../../images/kanban2.png';
import kanban3 from '../../images/kanban3.png';
import kanban4 from '../../images/kanban4.png';
import Images from './imagesComponent';

class Kanban extends Component {
	render(){
		let images = [kanban1, kanban2, kanban3, kanban4]
		
		return(
			<div className="projectSection">
				<div className="projectDesc">
					<h2>KanbanCard</h2>
					<p>
						An app where you can organize your projects into boards just like Trello!
					</p>
					<p>Tools: Ruby on Rails, Bootstrap, and JQuery</p>
					<ul>
						<li><a href="https://kanbancard.herokuapp.com/" target="_blank">Link</a></li>
					</ul>
				</div>
				<Images images={images} />

			</div>
		);
	}
}

export default Kanban;