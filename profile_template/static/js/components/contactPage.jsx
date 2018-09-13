import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class Contact extends Component {
	render(){
		return(
			<div className="defaultWrapper contactWrapper">
				<div className="contactHeader">
					<h2>Let's stay in touch</h2>
					<p>I hope you learned a bit about me.  Need a developer for your projects?  Feel free to say Hi!</p>
				</div>

				<div className="socialMedia">
					<ul>
						<li><a href="mailto:martindevelops21@gmail.com?subject=Comments" title="Email me!"><FontAwesome name='envelope' size="4x"/></a></li>
						<li><a href="https://www.linkedin.com/in/medev21/" target="_blank"><FontAwesome name='linkedin' size="4x"/></a></li>
						<li><a href="https://github.com/medev21" target="_blank"><FontAwesome name='github' size="4x"/></a></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Contact;