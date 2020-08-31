import React from 'react'
import './Navbar.scss'

function Nabar() {
    return (
        <div className='Navbar flex-2'>
            <div className='toggle-nav'>
                <div className='flex-2'>
                    <img src='https://a.slack-edge.com/4a5c4/marketing/img/icons/icon_slack.svg' alt='slack icon'/>
                    <h2>X</h2>
                </div>
                <div className='flex flex-column'>
                    <ul>
                        <li>Why Slack?</li>
                        <li>Solution</li>
                        <li>Resources</li>
                        <li>Enterprise</li>
                        <li>Pricing</li> 
                    </ul> 
                    <div className='button-grid'>
                        <button>Signin</button>
                        <button>Download slack</button>
                    </div>
                </div>
                
            </div>
            <div className='flex-2 flex--2'>
                <img src='https://a.slack-edge.com/4a5c4/marketing/img/icons/icon_slack.svg' alt='slack icon'/>
                <ul className='flex-2 desktop-nav'>
                    <li className='li--1'>Why Slack?</li>
                    <div className='why-hover'>
                        <ul>
                            <li>Features</li>
                            <li>How it replaces email</li>
                            <li>Security</li>
                            <li>Customers</li>
                        </ul>
                    </div>
                    <li className='li--2'>Solutions</li>
                    <ul className='solutions'>
                        <li>Remote Work</li>
                        <li>Distance Learning</li>
                        <li>Engineering</li>
                        <li>Sales</li>
                        <li>IT</li>
                        <li>Marketing</li>
                        <li>Customer Support</li>
                        <li>Human Resources</li>
                        <li>Project Management</li>
                        <li>Media</li>
                    </ul>
                    <li>Resources</li>
                    <li>enterprises</li>
                    <li>Pricing</li>
                    <li></li>
                </ul>
            </div>
            <div className='flex-2 contact desktop-nav'>
                <ul className='flex-2'>
                    <li>Contact sales</li>
                    <li>Signin</li>
                </ul>
                <button>Try for free</button>
            </div>
            <div className='nav-burger'>
                <span className="iconz">&nbsp;</span>
            </div>
           
        </div>
    )
}

export default Nabar
