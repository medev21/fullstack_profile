import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class Contact extends Component {
	render(){
		return(
			<div className="introWrapper">
				<div className="contactHeader">
					<h2>Let's stay in touch</h2>
					<p>I hope you learned a bit about me.  Need a developer for you projects?  Feel free to say Hi!</p>
					<a href="mailto:martindevelops21@gmail.com?subject=Comments" title="Email me!">Email</a>
				</div>

				<div className="socialMedia">
					<ul>
						<li><FontAwesome name='linkedin' size="2x"/></li>
						<li><FontAwesome name='github' size="2x"/></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Contact;