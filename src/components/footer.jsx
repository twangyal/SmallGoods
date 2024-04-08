import facebook from '../resources/icons/facebook.svg'
import instagram from '../resources/icons/instagram.svg'
import tripadvisor from '../resources/icons/tripadvisor.svg'
import twitter from '../resources/icons/twitter.svg'
import yelp from '../resources/icons/yelp.svg'

import uberBackground from '../resources/icons/Uber/background.svg'

import React from "react";

export default function Footer(){
    return(
        <div className='footer'>
                <TextTitle/>
                <div>
                    <p style={{fontWeight:"bold"}}>Hours</p>
                    <p style={{fontWeight:"bold"}}>Locations</p>
                </div>
                <div className='vertical-center'>
                    <h3>Connect With Us</h3>
                    <p>(858) 886-7217</p>
                    <p>info@smallgoodsusa.com</p>
                    <p>Newsletter</p>
                </div>
                <div>
                    <div className='horizontal-spacearound'>
                        <img alt='' src={facebook}/>
                        <img alt='' src={instagram}/>
                        <img alt='' src={tripadvisor}/>
                        <img alt='' src={twitter}/>
                        <img alt='' src={yelp}/>
                    </div>
                <img alt='' src={uberBackground}/>
            </div>
        </div>
    )
}

function TextTitle(){
    return(
        <div className='title'>
            <>
            <h1 style={{fontWeight:"normal"}}>small<span style={{fontWeight:'bold'}}>goods</span></h1>
            </>
            <h2 style={{fontSize:'8px',fontWeight:'200',marginTop:'-20px'}}>American Cheeses & Provisions</h2>
        </div>
    );
}