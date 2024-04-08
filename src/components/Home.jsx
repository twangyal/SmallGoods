import dragFruit from '../resources/dfruit.png'
import fullPlatter from '../resources/Full platter.png'
import halfPlatter from '../resources/Halfplatter.png'
import whiteCube from '../resources/whitecube.png'
import grape from '../resources/grape.png'
import downArrow from '../resources/downArrow.png'
import employeePic from '../resources/employeePic.png'
import storeFront from '../resources/storeFront.png'
import farmersMart from '../resources/farmersMarket.png'
import gallery from '../resources/gallery.png'

import Footer from './footer'

export default function Home(){
    return(
        <>
            <div className='horizontal-spacebetween'>
                <div className='vertical-start'>
                    <img alt=''src={dragFruit} className='dragfruit'/>
                    <img alt=''src={fullPlatter} className='fullplatter'/>
                </div>
                <div className='vertical-start'>
                    <TextTitle/>
                    <img alt='' src={whiteCube} className='whitecube'/>
                    <p>La Jolla-based cheese shop, cafe, and caterer of American farmstead cheese and cured meats</p>
                    <p>All fresh and locally sourced</p>
                    <div className='horizontal-spacearound'>
                        <button>Menu</button>
                        <button>UberEats</button>
                    </div>
                    <div className='horizontal-spacearound'>
                        <img alt='' src={grape} className='grape'/>
                        <img alt='' src={downArrow} className='downarrow'/>
                    </div>
                    
                </div>
                <img alt='' src={halfPlatter} className='halfplatter'/>
            </div>
            <div className='horizontal-spacearound'>
                <img alt='' src={employeePic}/>
                <div className='ourStory-text'>
                    <p>
                        Smallgoods is a husband and wife team with one employee. 
                        We specialize in American-made cheese, cured meats and local Farmer Market finds. 
                        We take great pride in sharing with you the fantastic products made right here in the US.
                    </p>
                    <button>Learn About Us</button>
                </div>
            </div>
            <h1>Where to Find Us</h1>
            <div className='horizontal-spacearound'>
                
                <div className='vertical-start'>
                    <h3>Physical Store</h3>
                    <p>7524 La Jolla Blvd, La Jolla, CA 92037 
                        We're located across from the Bishop's School - 
                        just past Pearl St. on La Jolla Blvd. with 15 min parking right out front.
                    </p>
                    <img alt='' src={storeFront}/>
                    <h3>La Jolla Open Aire Farmer's Market</h3>
                    <p>We are located at the Farmer's Market every other Sunday from 9 AM - 1 PM.</p>
                    <p>7335 Girard Ave, La Jolla, CA 92037</p>
                </div>
                <div className='vertical-start'>
                    <StoreHoursChart/>
                    <h3>Farmer's Market Pop-Ups </h3>
                    <p>Frankie & Antonio, from Heritage Farms Farmer's Market Stand 
                        join us every Thursday from 9AM to 3PM in front of our shop. 
                    </p>
                    <img alt='' src={farmersMart}/>
                </div>
            </div>
            <FollowAlong/>
            <Footer/>
        </>
    )
}
//the title
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
//store hours chart
function StoreHoursChart(){
    return(
    <>
        <h3>Store Hours</h3>
        <div className='horizontal-spacearound'>
            <div className='storeHours'>
                <p>Monday</p>
                <p>Tuesday</p>
                <p>Wednesday</p>
                <p>Thursday</p>
                <p>Friday</p>
                <p>Saturday</p>
                <p>Sunday</p>
            </div>
            <div className='storeHours'>
                <p>CLOSED</p>
                <p>9AM - 5PM</p>
                <p>9AM - 5PM</p>
                <p>9AM - 5:30PM</p>
                <p>9AM - 5:30PM</p>
                <p>9AM - 5PM</p>
                <p>CLOSED</p>
            </div>
        </div>
        <h3>(Every other Sunday, we are located at the Farmer's Market from 9 AM - 1 PM) </h3>
    </>
    )
}
//media gallery
function FollowAlong(){
    return(
        <div className='vertical-center' style={{marginBottom:"80px"}}>
            <h1>Follow along @smallgoods_</h1>
            <img alt='' src={gallery}/>
        </div>
    )
}