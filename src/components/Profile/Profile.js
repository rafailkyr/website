import React, { useState } from 'react'
import './Profile.css'
import '../../App.css'
import '../../index.css'

import icon from '../../assets/profile_image.svg'


function Profile() {

	const [isActive, setActive] = useState(false);
	const elementToggleFunc = () => { setActive(!isActive) };

	return (
		
	    <aside className={isActive ? "sidebar active" : "sidebar"}>

			<div className="sidebar-info">
	
				<figure className="avatar-box">
					<img src={icon} alt="Rafail Kyritsis" width="80"/>
				</figure>
		
				<div className="info-content">
					<h1 className="name" title="Rafail Kyritsis">Rafail Kyritsis</h1>
		
					<p className="title">Maritime Student</p>
				</div>
	
			</div>

			<button className="info_more-btn" onClick={elementToggleFunc}>
          		<span>Show Contacts</span>

          		<ion-icon name="chevron-down"></ion-icon>
        	</button>

	
			<div className="sidebar-info_more">
	
			<div className="separator"></div>
	
			<ul className="contacts-list">
	
				<li className="contact-item">
	
					<div className="icon-box">
						<ion-icon name="mail-outline"></ion-icon>
					</div>
		
					<div className="contact-info">
						<p className="contact-title">Email</p>
		
						<a href="mailto:kyritsisrafail@gmail.com" className="contact-link">kyritsisrafail@gmail.com</a>
					</div>
	
				</li>
	
				<li className="contact-item">
	
					<div className="icon-box">
						<ion-icon name="phone-portrait-outline"></ion-icon>
					</div>
		
					<div className="contact-info">
						<p className="contact-title">Phone</p>
		
						<a href="tel:+306987039403" className="contact-link">6987039403</a>
					</div>
	
				</li>
	
				<li className="contact-item">
	
				<div className="icon-box">
					<ion-icon name="location-outline"></ion-icon>
				</div>
	
				<div className="contact-info">
					<p className="contact-title">Location</p>
	
					<address>Piraeus, Attiki, GR</address>
				</div>
	
				</li>
	
			</ul>
	
			<div className="separator"></div>
	
			<ul className="social-list">
	
				<li className="social-item">
					<a href="https://www.linkedin.com/in/rafail-kyritsis-a657b1215" className="social-link">
						<ion-icon name="logo-linkedin"></ion-icon>
					</a>
				</li>
	
			</ul>
	
			</div>
  
	  	</aside>
  
	)
}

export default Profile
