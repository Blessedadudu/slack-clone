import React from 'react'
import './Navbar.scss'

function Nabar() {
    return (
        <div className='Navbar flex-2'>
            <div className='flex-2 flex--2'>
                <img src='https://a.slack-edge.com/4a5c4/marketing/img/icons/icon_slack.svg' alt='slack icon'/>
                <ul className='flex-2'>
                    <li>Why Slack?</li>
                    <li>Solutions</li>
                    <li>Resources</li>
                    <li>enterprises</li>
                    <li>Pricing</li>
                    <li></li>
                </ul>
            </div>
            <div className='flex-2 contact'>
                <ul className='flex-2'>
                    <li>Contact sales</li>
                    <li>Signin</li>
                </ul>
                <button>Try for free</button>
            </div>
        </div>
    )
}

export default Nabar
