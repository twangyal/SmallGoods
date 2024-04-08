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

import facebook from '../resources/icons/facebook.svg'
import instagram from '../resources/icons/instagram.svg'
import tripadvisor from '../resources/icons/tripadvisor.svg'
import twitter from '../resources/icons/twitter.svg'
import yelp from '../resources/icons/yelp.svg'

import uberBackground from '../resources/icons/Uber/background.svg'

export default function Home(){
    return(
        <>
            <div className='masthead'>
                <div className='masthead-section1'>
                    <img alt=''src={dragFruit} className='dragfruit'/>
                    <img alt=''src={fullPlatter} className='fullplatter'/>
                </div>
                <div className='masthead-section2'>
                    <Text_title/>
                    <img alt='' src={whiteCube} className='whitecube'/>
                    <p>La Jolla-based cheese shop, cafe, and caterer of American farmstead cheese and cured meats</p>
                    <p>All fresh and locally sourced</p>
                    <button>Menu</button>
                    <button>UberEats</button>
                    <img alt='' src={grape} className='grape'/>
                    <img alt='' src={downArrow} className='downarrow'/>
                </div>
                <img alt='' src={halfPlatter} className='halfplatter'/>
            </div>
            <div className='ourStory'>
                <img alt='' src={employeePic} className='employeePic'/>
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
            <div className='whereToFindUs'>
                
                <div className='whereSection'>
                    <h3>Physical Store</h3>
                    <p>7524 La Jolla Blvd, La Jolla, CA 92037 
                        We're located across from the Bishop's School - 
                        just past Pearl St. on La Jolla Blvd. with 15 min parking right out front.
                    </p>
                    <img alt='' src={storeFront} className='storeFront'/>
                    <h3>La Jolla Open Aire Farmer's Market</h3>
                    <p>We are located at the Farmer's Market every other Sunday from 9 AM - 1 PM.</p>
                    <p>7335 Girard Ave, La Jolla, CA 92037</p>
                </div>
                <div className='whereSection'>
                    <StoreHoursChart/>
                    <h3>Farmer's Market Pop-Ups </h3>
                    <p>Frankie & Antonio, from Heritage Farms Farmer's Market Stand 
                        join us every Thursday from 9AM to 3PM in front of our shop. 
                    </p>
                    <img alt='' src={farmersMart} className='farmersMart'/>
                </div>
            </div>
            <FollowAlong/>
            <div className='footer'>
                <Text_title/>
                <div>
                    <p>Hour</p>
                    <p>Location</p>
                </div>
                <div>
                    <p>Connect With Us</p>
                    <p>(858) 886-7217</p>
                    <p>info@smallgoodsusa.com</p>
                    <p>Newsletter</p>
                </div>
                <div>
                    <div>
                        <img alt='' src={facebook} className='facebook'/>
                        <img alt='' src={instagram} className='instagram'/>
                        <img alt='' src={tripadvisor} className='tripadvisor'/>
                        <img alt='' src={twitter} className='twitter'/>
                        <img alt='' src={yelp} className='yelp'/>
                    </div>
                    <img alt='' src={uberBackground} className='uberBackground'/>
                </div>
            </div>
        </>
    )
}
//the title
function Text_title(){
    return(
        <div className='title'>
            <>
            <h1>small<span className='bold'>goods</span></h1>
            </>
            <h2>American Cheeses & Provisions</h2>
        </div>
    );
}
//store hours chart
function StoreHoursChart(){
    return(
    <>
        <h3>Store Hours</h3>
        <div className='storeHoursCol'>
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
        <div className='followAlong'>
            <h1>Follow along @smallgoods_</h1>
            <img alt='' src={gallery} className='gallery'/>
        </div>
    )
}