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

export default function Home() {
    return (
      <>
        <div className='horizontal-spacebetween'>
          <div className='vertical-start'>
            <img alt='' src={dragFruit} className='dragfruit' />
            <img alt='' src={fullPlatter} className='fullplatter' />
          </div>
            <div className='vertical-start menu-container'>
            <div className='title'>
                <h1 className='title-heading'>small<span className='title-bold'>goods</span></h1>
                <h2 className='title-subheading'>AMERICAN CHEESES & PROVISIONS</h2>
            </div>
            <img alt='' src={whiteCube} className='whitecube' />
            <p className='menu-description'>La Jolla-based cheese shop, cafe,</p>
            <p className='menu-description'>and caterer of American farmstead cheese and cured meats</p>
            <p className='menu-description-green'>All fresh and locally sourced</p>
            <div className='horizontal-spacearound'>
                <div className='button-container'>
                <button className='green-button'>Menu</button>
                <button className='black-button'>UberEats</button>
                </div>
            </div>
            <div className='horizontal-spacearound'>
              <img alt='' src={grape} className='grape' />
              <img alt='' src={downArrow} className='downarrow' />
            </div>
  
          </div>
          <img alt='' src={halfPlatter} className='halfplatter' />
        </div>
        <div className='horizontal-spacearound'>
          <img alt='' src={employeePic} className='employeePic' />
          <div className='ourStory-text'>
            <p>
              Smallgoods is a husband and wife team with one employee.
              We specialize in American-made cheese, cured meats and local Farmer Market finds.
              We take great pride in sharing with you the fantastic products made right here in the US.
            </p>
            <button className='green-button'>Learn About Us</button>
          </div>
        </div>
        <div className='horizontal-spacearound'>
          <div className='vertical-start'>
          <h1 className='where-to-find'>Where to Find Us</h1>
            <h3 className='physical-store'>Physical Store</h3>
            <p className='store-location'>
            <span>7524 La Jolla Blvd, La Jolla, CA 92037</span><br/>
            <span style={{ fontWeight: 'bold' }}>We're located across from the Bishop's School - just past Pearl St. on La Jolla Blvd. with 15 min parking right out front.</span>
            </p>
            <img alt='' src={storeFront} />
            <h3 className='.physical-store'>La Jolla Open Aire Farmer's Market</h3>
            <p style={{ fontWeight: 'bold' }} className='.store-location'>We are located at the Farmer's Market every other Sunday from 9 AM - 1 PM.</p>
            <p className='.store-location'>7335 Girard Ave, La Jolla, CA 92037</p>
          </div>
          <div className='vertical-start'>
            <StoreHoursChart />
            <h3>Farmer's Market Pop-Ups </h3>
            <p className='farmermarket'>Frankie & Antonio, from Heritage Farms Farmer's Market Stand
              join us every Thursday from 9AM to 3PM in front of our shop.
            </p>
            <img alt='' src={farmersMart} />
          </div>
        </div>
        <FollowAlong />
        <Footer />
      </>
    );
  }

//store hours chart
function StoreHoursChart(){
  return(
      <table style={{ marginTop: '200px', marginLeft: '0px' }}>
          <tr>
              <th colSpan={"2"} style={{paddingTop:"40px", fontWeight: "bold"}}>Store Hours</th>
          </tr>
          <tr>
              <td style={{ fontWeight: "bold" }}>Monday</td>
              <td>CLOSED</td>
          </tr>
          <tr>
              <td style={{ fontWeight: "bold" }}>Tuesday</td>
              <td>9am - 5pm</td>
          </tr>
          <tr>
              <td style={{ fontWeight: "bold" }}>Wednesday</td>
              <td>9am - 5pm</td>
          </tr>
          <tr>
              <td style={{ fontWeight: "bold" }}>Thursday</td>
              <td>9am - 5:30pm</td>
          </tr>
          <tr>
              <td style={{ fontWeight: "bold" }}>Friday</td>
              <td>9am - 5:30pm</td>
          </tr>
          <tr>
              <td style={{ fontWeight: "bold" }}>Saturday</td>
              <td>9am - 5pm</td>
          </tr>
          <tr>
              <td style={{ fontWeight: "bold" }}>Sunday</td>
              <td>CLOSED</td>
          </tr>
          <tr>
              <td colSpan="2" style={{paddingTop:"20px",paddingBottom:"40px"}}>(Every other Sunday, we are located at the Farmer's Market from 9 AM - 1 PM) </td>
          </tr>
      </table>        
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