import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

	// ToggleClass(e){
	// 	// this.setState({ isActive: !this.state.isActive});
	// 	this.props.onMobile
	// }

	handleToggleClick(){
		// console.log("hello")
		// this.onClick();
		this.props.onClick();
	}


	render(){
		return (
			<div className="navbarContainer">
				<div className="navFrame">
					<Link to="/">
						<div className="topNav"><div className="navBar"><h3>Martin Benavides</h3></div></div>
					</Link>

					<Link to="/projects" >
						<div className="rightNav"><div className="navBar"><h3>Projects</h3></div></div>
					</Link>

					<Link to="/contact">
						<div className="bottomNav"><div className="navBar"><h3>Contact</h3></div></div>
					</Link>

					<Link to={{pathname: '/profile'}}>
						<div className="leftNav"><div className="navBar"><h3>Profile</h3></div></div>
					</Link>
		      	</div>

		      	<div className="mobileNavFrame">
		      		<Link to="/">
						<div className="topNav"><div className="navBar"><h3>Martin Benavides</h3></div></div>
					</Link>

					<div className="bottomNav">
						<div className="navBar">
							<div className="hamburgerIcon" onClick={this.props.onClick.bind(this)}>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
					</div>
					

					{/*<Link to="/contact">
						<div className="bottomNav"><div className="navBar"><h3>Contact</h3></div></div>
					</Link>*/}

					{/*<Link to="/projects" >
						<div className="rightNav"><div className="navBar"><h3>Projects</h3></div></div>
					</Link>*/}

					{/*<Link to={{pathname: '/profile'}}>
						<div className="leftNav"><div className="navBar"><h3>Profile</h3></div></div>
					</Link>*/}
		      	</div>
	      	</div>

		);
	}
}

export default Navbar;


// var ExampleComponent = React.createClass({
//   getInitialState : function(){
//     return ({isClicked : false})    
//   },
//   handleClick : function(){
//     this.setState({isClicked : !this.state.isClicked});
//   },
//   render: function() {
//     var someElementClass = this.state.isClicked ? 'clicked' : '';
//     return(<div className="container">
//                <div id="someElement" className={someElementClass}>
//                   I'm an element
//                </div>
//                <button id="someButton" onClick={this.handleClick}>
//                   Click me!
//                </button>  
//              </div> );
//   } 
// });
// ReactDOM.render(<ExampleComponent />,document.getElementById('content'));