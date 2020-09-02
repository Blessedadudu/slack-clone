import React from 'react'
import './Footer.scss'
import { FiGlobe } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";  
import { FaTwitter } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
import { ImYoutube } from "react-icons/im";
import { ImLinkedin} from "react-icons/im";

function Footer() {
    return (
        <div className='footer'>
            <div  className='flex'>
                <div className='svg'>
                    <svg width="54" height="54" class="c-nav--footer__svgicon c-slackhash" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#36C5F0"></path><path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#2EB67D"></path><path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ECB22E"></path><path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#E01E5A"></path></g></svg> 
                </div>
                <div className='links'>
                    <div>
                        <h6>PRODUCT</h6>
                        <ul>
                            <li>Features</li>
                            <li>Enterprise</li>
                            <li>Security</li>
                            <li>Trust</li>
                            <li>Customer</li>
                            <li>Stories</li>
                            <li>Pricing</li>
                            <li>Slack Demo</li>
                        </ul>
                    </div>
                    <div>
                        <h6>SLACK FOR TEAMS</h6>
                        <ul>
                            <li>Engineering</li>
                            <li>Financial Services</li>
                            <li>Sales</li>
                            <li>IT</li>
                            <li>Marketing</li>
                            <li>Customer Support</li>
                            <li>Human Resources</li>
                            <li>Project Management</li>
                            <li>Media</li> 
                        </ul>
                    </div>
                    <div>
                        <h6>RESOURCES</h6>
                        <ul>
                            <li>Engineering</li>
                            <li>Financial Services</li>
                            <li>Sales</li>
                            <li>IT</li>
                            <li>Marketing</li>
                            <li>Customer Support</li>
                            <li>Human Resources</li>
                            <li>Project Management</li>
                            <li>Media</li> 
                            <li>Financial Services</li>
                            <li>Sales</li>
                            <li>IT</li>
                        </ul>
                    </div>
                    <div>
                        <h6>COMPANY</h6>
                        <ul>
                            <li>Engineering</li>
                            <li>Financial Services</li>
                            <li>Sales</li>
                            <li>IT</li>
                            <li>Marketing</li>
                            <li>Customer Support</li>
                            <li>Human Resources</li>
                            <li>Project Management</li>
                            <li>Media</li> 
                        </ul>
                    </div>
                </div>
            </div>
           
            <div>
                <div>
                   <p>Status</p>
                    <p>Privacy & TermsContact</p>
                    <p>Conatct US</p>
                    <div>
                        <FiGlobe/>
                        <p>Change Region</p>
                        <BsChevronDown/>
                    </div> 
                </div>
                <div>
                    <FaTwitter/>
                    <GrFacebook/>
                    <ImYoutube/>
                    <ImLinkedin/>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
