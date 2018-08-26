import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import ProjectNavbar from "./projectsNavbar";
import Kanban from "./kanbanPage";
import Worldcups from "./worldcupsPage"
import Commcx from "./commcxPage"

class Projects extends Component {

	constructor (props) {
		super(props);
		this.state = {
		  hideNavbar: false
		};

		this.handleChange = this.handleChange.bind(this);

	}

	handleChange(event){
		const { updateNavBarState } = this.props;
		// this.setState({ hideNavbar: true });	
		updateNavBarState(true);
	} 


	render(){
		const url = this.props.match.url;
		const style = this.state.hideNavbar ? {display: 'none'} : {};

		return(
			<div>
				<div className="introWrapper projectsNavbar" style={style}>
					<h3>Projects</h3>
					<div>
						<Link to={`${url}/kanban_board`} onClick={this.handleChange}>
							<div><h4>kanban board</h4></div>
							<div><p>a trello clone app</p></div>
						</Link>
					</div>

					<div>
						<Link to={`${url}/worldcups`} onClick={this.handleChange}>
							<div><h4>worlcups</h4></div>
							<div><p>a list of all the worlcups</p></div>
						</Link>
					</div>

					<div>
						<Link to={`${url}/commcx`} onClick={this.handleChange}>
							<div><h4>commcx</h4></div>
							<div><p>online learning platform</p></div>
						</Link>
					</div>

				</div>

				<Route path={`${url}/kanban_board`} component={Kanban}/>
				<Route path={`${url}/worldcups`} component={Worldcups}/>
				<Route path={`${url}/commcx`} component={Commcx}/>
				<Route exact path={url}/>
			</div>
		)
	}
}

export default Projects;


