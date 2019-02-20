import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import ProjectNavbar from "./projectsNavbar";
import Kanban from "./kanbanPage";
import Worldcups from "./worldcupsPage";
import Commcx from "./commcxPage";
import WeatherScan from "./weatherScanPage";
import Embrella from "./embrellaPage";
import NotaSimple from './notasimplePage';
import ScrollToTopOnMount from "./scrollToTop";

class Projects extends Component {

	render(){
		const url = this.props.match.url;

		return(
			<div className="projectWrapper">
				<ScrollToTopOnMount />
				<div className="projectsNavbar" >
					{this.props.location.pathname === url ? <ProjectNavbar url={url}/> : null}

				</div>

				<Route path={`${url}/kanban_board`} component={Kanban}/>
				<Route path={`${url}/worldcups`} component={Worldcups}/>
				<Route path={`${url}/commcx`} component={Commcx}/>
				<Route path={`${url}/weatherscan`} component={WeatherScan}/>
				<Route path={`${url}/embrella`} component={Embrella}/>
				<Route path={`${url}/notasimple`} component={NotaSimple}/>
				<Route exact path={url}/>
			</div>
		)
	}
}

export default Projects;