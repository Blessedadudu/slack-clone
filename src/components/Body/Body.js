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
        </div>
    )
}

export default Body
