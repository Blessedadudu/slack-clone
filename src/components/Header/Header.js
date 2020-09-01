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
                <div className='video'>
                    <video autoplay='true' loop='true' muted='true' playsinline poster="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/hero/hero-image@2x.png">
                        <source src="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/desktop/mp4/hero-image.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>

            <div className='header--flex header--flex-2'>
                <div className='video-2'>
                    <video autoplay='true' loop='true' muted='true' playsinline>
                        <source src="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/channels/bring-your-team-together-in-channels.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className='welcome'>
                    <h1>A better way to communicate</h1>
                    <p>Unlike email, conversations in Slack are easy to follow. And they’re more than conversations — you can make calls, share files, and even connect with other apps</p>
                    <button>SEE ALL FEATURES</button>
                </div>
                
            </div>
        </div>
    )
}

export default Header
