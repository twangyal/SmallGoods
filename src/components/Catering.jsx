import catering from '../resources/catering_board.png'
import restaurant from '../resources/restaurant.png'
import speaker from '../resources/speaker.jpg'
import storeFront from '../resources/storeFront.png'
import yourplace from '../resources/yourplace.png'
import award4 from '../resources/award4.png'
import Footer from './footer'

export default function Catering(){
    return(
        <>
        <div className='catering-spacing'>
            <div className='cateringcarousel'>
                <h1 className='catering-h1'>Catering</h1>

                {/*carousel*/}
                <ImageCarousel/>
            </div>
            

            {/*What We Do & Who is Catering for*/}
            <div className='catering-spacearound'>
                <div className='catering-pair'>
                    <h3 className='catering-h3'>What We Do</h3>
                    <p className='body-1'>
                    We are here to step your event to the next level with our fresh, American-farmstead cheese and cured meats anytime, anywhere. Each catering order are ALL custom made-to-order and are as unique as your needs, style and tastes.
                    </p>
                </div>
                <div className='catering-pair'>
                    <h3 className='catering-h3'>Who/What is Catering for?</h3>
                    <p className='body-1'>
                    Our services are available for any special occasion you may have. Birthday parties, business events, family/friend reunions, etc. We can cater to your needs to make any special event delicious and memorable! Don’t be afraid to contact us even if it’s last minute!
                    </p>
                </div>
            </div>

            {/*Types of Services Section*/}
            <h2 className='catering-h2'>Types of Services</h2>
            <div className='TOS-spacearound'>
                <div className='TOS-text'>
                    <h3 className='catering-h3'>Your Place</h3>
                    <p className='body-1'>
                    Have a place in mind? We can transport and serve our goods to any business functions or recreational event. Most importantly, we keep it fun, informative, educational and very very tasty. We can also bring our venue to any location you choose.
                    </p>
                    <p>
                    If you would like this option, call us at (858) 886 7217, or fill out the form below.   
                    </p>
                    <button>TODO</button>
                </div>
                <img className='TOS-1' alt='' src={yourplace}/>
            </div>
            <div className='TOS-spacearound'>
                <div className='TOS-text'>
                    <h3 className='catering-h3'>Our Place</h3>
                    <p className='body-1'>
                    Want to have an exclusive and intimate environment? Our cafe is the perfect venue to impress your clients, treat your staff, or create memories with family and friends! Sit back, relax, and enjoy our goods without any worry or hassle!
                    </p>
                    <p>7524 La Jolla Blvd, La Jolla, CA 92037</p>
                    <p>
                    If you would like this option, call us at (858) 886 7217, or fill out the form below.
                    </p>
                    <button>TODO</button>
                </div>
                <img className='TOS-2' alt='' src={storeFront}/>
            </div>

            {/*Our Catering Process section*/}
            <h2 className='catering-h2'>Our Catering Process</h2>
            <div className='horizontal-spacearound'>
                <img alt='' src={award4}/>
                <div>
                    <p className='body-1'>
                    Our catering process is simple and stress-free! Just give us a call or fill out our contact form at your own convenience. You tell us your needs and we will follow up with you as soon as possible. We take special care and preparation for every unique catering order request. Our specialty is bring a customized, memorable experience for every customer no matter the time or place! 
                    </p>
                    <p>
                    Catering prices are negotiated by customer needs and head count. Please contact us and we’ll make sure your order is quick and easy.
                    </p>
                    <p>We were voted Best Catering in Reader’s Choice Awards!</p>
                </div>
            </div>

            {/*FAQ section*/}
            <h2 className='catering-h2'>FAQ</h2>
            <div className='vertical-start'>
                {FAQ("What are the prices for catering?", 
                    "The price of catering depends on a variety of factors, such as the types of cheese, where it is hosted, how many people we’re serving, etc. We will walk you through all the costs depending on your situation and have the best price for you.")}
                {FAQ("When do I have to call to place my catering order?", 
                    "We are able to work with your busy schedule and be able to make your order on-the-spot. 24 hour notice is preferred, but don’t be afraid to call last minute!")}
                {FAQ("Is there a menu specfically for catering that I can choose from?", 
                    "We’ll introduce you to all of our amazing options once you contact us!")}
                {FAQ("Is there a minimum to party size?", 
                    "There is no minimum to party size. We can work with as little or as many people in your party/event.")}
            </div>
        </div>
        <Footer/>
        </>
    )
}

function FAQ(question, answer){
    return(
        <div>
            <p className='body-1 primary-green'>
                {question}
            </p>
            <p className='body-1'>
                {answer}
            </p>
        </div>
    )
}

function ImageCarousel(){
    return(
        <div className='horizontal-spacearound'>
            <img alt='' src={catering}/>
            <img alt='' src={restaurant}/>
            <img alt='' src={speaker}/>
        </div>
    )
}