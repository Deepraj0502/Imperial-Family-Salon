import React from "react";
import Logo from "../MyResources/logo.png";
import '../MyResources/Footer.css';
import MediaQuery from "react-responsive";
import {
	faInstagram,
	faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {FaPhoneAlt} from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<>
			<footer>
				<MediaQuery minDeviceWidth={800}>
				<div class="content">
					<div class="top" style={{marginTop:"-50px"}}>
						<div class="logo-details" style={{display:"flex"}}>
							<img style={{ position:"relative",top:"50px",width: "50px",marginBottom:"100px" }} src={Logo} alt="logo"></img>
							<p style={{ position:"relative",top:"55px",paddingLeft:"20px",fontFamily:"Times New Roman",fontSize:"25px"}}>Imperial Family Salon & Makeover Studio</p>
						</div>
						<div class="media-icons">
							<a
								class="facebook social"
								target="_blank"
								href="tel:+918369650620"
								rel="noreferrer"
							>
								<i>
									{" "}
									<FaPhoneAlt size="28px" style={{position:"relative",bottom:"5px"}}/>
								</i>
							</a>
							<a
								class="instagram social"
								target="_blank"
								href="https://www.instagram.com/imperial_family_salon/"
								rel="noreferrer"
							>
								<i class="">
									{" "}
									<FontAwesomeIcon icon={faInstagram} size="2x" />
								</i>
							</a>
							<a
								class="Linkedin social"
								href="https://wa.me/919920422894"
								rel="noreferrer"
							>
								<i class="">
									{" "}
									<FontAwesomeIcon icon={faWhatsapp} size="2x" />
								</i>
							</a>
						</div>
					</div>
					<div class="link-boxes">
						<ul class="box">
							<li class="link_name">Owner</li>
							<li>
								<p className="own-name">Mangal Anil Pagare</p>
							</li>
						</ul>
						<ul class="box">
							<li class="link_name">Address</li>
							<li>
							<p style={{color:"white",width:"300px"}}>Shop no -7, Krushna Kunj Building, Plot No.20, Sector-15, Kamothe, Navi Mumbai, Maharashtra 410209</p>
							</li>
						</ul>
						<ul class="box">
						<li class="link_name">Contact</li>
							<li>
								<a href="tel:+919920422894" style={{textDecoration:"none"}}>
								<p className="footer-ele">
									9920422894</p>
								</a>
							</li>
							<li>
								<a href="tel:+918369650620" style={{textDecoration:"none"}}>
								<p className="footer-ele">8369650620</p>
								</a>
							</li>
							<li>
								<a href="mailto:imperialfamilysalon@gmail.com" style={{textDecoration:"none"}}>
								<p className="footer-ele">imperialfamilysalon@gmail.com</p>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<iframe
								title={Map}
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15088.575871873943!2d73.0940921!3d19.0133767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3fa1d15fea7%3A0xeaf7e831944bcf2d!2sImperial%20Family%20Salon!5e0!3m2!1sen!2sin!4v1696949987737!5m2!1sen!2sin"
								width="600"
								height="400"
								frameborder="0"
								style={{marginLeft:"31vw",marginBottom:"50px",marginTop:"-50px"}}
								className="footer-map"
							></iframe>
			</MediaQuery>

			<MediaQuery maxDeviceWidth={600}>
				<div class="content">
					<div class="top" style={{marginTop:"-50px"}}>
						<div class="logo-details" style={{display:"flex"}}>
							<img style={{ position:"relative",top:"50px",width: "45px",marginBottom:"100px"}} src={Logo} alt="logo"></img>
							<p style={{ position:"relative",top:"57px",paddingLeft:"10px",fontSize:"20px",fontFamily:"Times New Roman"}}>Imperial Family Salon</p>
						</div>
						<div class="media-icons">
						<a
								class="facebook social"
								target="_blank"
								href="tel:+918369650620"
								rel="noreferrer"
							>
								<i>
									{" "}
									<FaPhoneAlt size="28px" style={{position:"relative",bottom:"5px"}}/>
								</i>
							</a>
							<a
								class="instagram social"
								target="_blank"
								href="https://www.instagram.com/imperial_family_salon/"
								rel="noreferrer"
							>
								<i class="">
									{" "}
									<FontAwesomeIcon icon={faInstagram} size="2x" />
								</i>
							</a>
							<a
								class="Linkedin social"
								target="_blank"
								href="https://wa.me/919920422894"
								rel="noreferrer"
							>
								<i class="">
									{" "}
									<FontAwesomeIcon icon={faWhatsapp} size="2x" />
								</i>
							</a>
						</div>
					</div>
					<div class="link-boxes">
						<ul class="box">
							<li class="link_name">Contact</li>
							<li>
								<a href="tel:+919920422894">
								<p className="footer-ele">
									9920422894</p>
								</a>
							</li>
							<li>
								<a href="tel:+918369650620">
								<p className="footer-ele">8369650620</p>
								</a>
							</li>
							<li>
								<a href="mailto:imperialfamilysalon@gmail.com">
								<p className="footer-ele">imperialfamilysalon@gmail.com</p>
								</a>
							</li>
						</ul>
						<ul class="box">
							<li class="link_name">Owner</li>
							<li>
								<p style={{fontSize:"12px"}} className="own-name">Mangal Anil Pagare</p>
							</li>
						</ul>
						<ul class="box">
							<li class="link_name">Address</li>
							<li>
							<p style={{color:"white",width:"300px",fontSize:"12px"}}>Shop no -7, Krushna Kunj Building, Plot No.20, Sector-15, Kamothe, Navi Mumbai, Maharashtra 410209</p>
							</li>
						</ul>
					</div>
				</div>
				<iframe
								title={Map}
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15088.575871873943!2d73.0940921!3d19.0133767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3fa1d15fea7%3A0xeaf7e831944bcf2d!2sImperial%20Family%20Salon!5e0!3m2!1sen!2sin!4v1696949987737!5m2!1sen!2sin"
								width="300"
								height="200"
								frameborder="0"
								style={{marginLeft:"13vw",marginBottom:"50px",marginTop:"-50px"}}
							></iframe>
			</MediaQuery>
			</footer>
		</>
	);
};

export default Footer;
