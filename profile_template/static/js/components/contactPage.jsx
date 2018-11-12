import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import ScrollToTopOnMount from "./scrollToTop";

class Contact extends Component {
	render(){
		return(
			<div className="defaultWrapper contactWrapper">
				<ScrollToTopOnMount />
				<div className="contactHeader">
					<h2>Let's stay in touch</h2>
					<p>I hope you learned a bit about me.  Need a developer for your projects?  Feel free to say hi!</p>
				</div>

				<div className="contactBody">
					<div className="formSection">
						<form action="https://formspree.io/benmarteen07@gmail.com" method="POST">
							<div className="nameRow">
								<div className="nameColumn formColumn">
									<input className="inputName" type="text" id="fname" name="name" placeholder="Name" required/>
								</div>
								<div className="emailColumn formColumn">
									<input className="inputEmail" type="email" id="useremail" name="_replyto" placeholder="Email" required/>
								</div>
							</div>
							<div className="textRow">
								<textarea name="message" id="usermessage" cols="10" rows="4" placeholder="Message" required></textarea>
							</div>
							<div className="btnRow">
								<button type="submit" value="Send">Send</button>
							</div>
						</form>
					</div>

					<div className="socialMedia">
						<ul>
							<li><a href="mailto:benmarteen07@gmail.com?subject=Comments" title="Email me!"><FontAwesome name='envelope' size="2x"/></a></li>
							<li><a href="https://www.linkedin.com/in/medev21/" target="_blank"><FontAwesome name='linkedin' size="2x"/></a></li>
							<li><a href="https://github.com/medev21" target="_blank"><FontAwesome name='github' size="2x"/></a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;