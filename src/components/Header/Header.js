import React from 'react'
import './Header.scss'

function Header() {
    return (
        <div className='header'>
            <div className='header--flex'>
                <div className='welcome'>
                    <h1>Welcome to your new HQ</h1>
                    <p>Teamwork can be hard, messy, complicated… and still the best way to work. That’s why we made Slack — a place where people get work done, together.</p>
                    <button>Try for free</button>
                </div>
                <div className='image'>
                    <video controls autoplay='true' loop='true' muted='true' playsinline poster="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/hero/hero-image@2x.png">
                        <source src="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/desktop/mp4/hero-image.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Header
