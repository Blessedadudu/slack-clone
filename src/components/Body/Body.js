import React from 'react'
import './Body.scss'
import { BsArrowRight } from "react-icons/bs";

function Body() {
    return (
        <div className='body'>
            <div className='body-heading'>
                <h1>Over 750,000 companies use Slack to get work done</h1>
                <div className='stories'>
                   <p>See all customer stories</p><span><BsArrowRight className='arrow'/> </span> 
                </div>
            </div>
            <div className='flex-2 customer'>
                <div>
                    <h2>“I help to bring product from the wild to the kitchen, and all across the dining room,” Koseba explains. “[With Slack] there’s no wasted time or wasted product because you’re able to communicate things right away.”</h2>
                    <h4>Katina Connaughton</h4>
                    <p>Head Farmer, SingleThread</p>
                </div>
                <img src='https://a.slack-edge.com/ce67d/marketing/img/stories/singlethread/customer-story.png' alt='customer'/>
               
            </div>
            <div className='flex flex-brands'>
                <img src='https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/fox@2x.png' alt='brands'/>
                <img src='https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/lonelyplanet@2x.png' alt='brands'/>
                <img src='https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_color/intuit@2x.png' alt='brands'/>
                <img src='https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/carvana@2x.png' alt='brands'/>
                <img src='https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/kiva@2x.png' alt='brands'/>
                <img src='https://a.slack-edge.com/80588/marketing/img/logos/company/_color/target-logo@2x.png' alt='brands'/>
                <img src='https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/devacurl@2x.png' alt='brands'/>
            </div>
        </div>
    )
}

export default Body
