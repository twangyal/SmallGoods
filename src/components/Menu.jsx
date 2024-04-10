import React from 'react';
import Footer from './footer';

import backArrow from '../resources/backArrow.svg'
import forwardArrow from '../resources/forwardArrow.svg'
import platter1 from '../resources/platter1.png'

import neighborhood from '../resources/neighborhoodFav.png'
import orderNow from '../resources/orderNow.svg'
import award1 from '../resources/award1.png'
import award2 from '../resources/award2.png'
import award3 from '../resources/award3.png'

import samplerSando from '../resources/foodItem/samplerSando.png'
import calTurkeyCheese from '../resources/foodItem/calTurkeyCheese.png'
import goldenGate from '../resources/foodItem/goldenGate.png'
import oregonCheeseHam from '../resources/foodItem/oregonCheeseHam.png'
import waHolyMoly from '../resources/foodItem/waHolyMoly.png'
import caWagyu from '../resources/foodItem/caWagyu.png'
import norcalVeg from '../resources/foodItem/norcalVeg.png'
import socalVeg from '../resources/foodItem/socalVeg.png'

import beachBox from '../resources/foodItem/beachBox.png'
import  charcuterie from '../resources/foodItem/charcuterie.png'


export default function Menu(){
    return(
        <>
            <div style={{display:"flex", flexFlow:"row nowrap"}}>
                <div className='vertical-center'>
                    <h1>Our Menu</h1>
                    <p>Shop Hours: 9am - 5~5:30pm</p>
                    <p>Kitchen Hours: 10am - 4pm</p>
                </div>
                <img alt='' src={neighborhood}/>
            </div>
            <h2 style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Personalized Cheese Platter</h2>
            <div className='horizontal-spacearound'>
                <ImageCarousel/>
                <div className='vertical-center'>
                    <h3>Cheese only | $12 per person 
                        Add meat | +$4 per person</h3>
                    <p>Custom made-to-order. 
                        As unique as your needs, style & tastes.</p>
                    <p>Call us at (858) 886 7217 for a quick and easy order process. 
                        Never be afraid to call us if it's last-minute!</p>
                    <img alt='' src={orderNow}/>
                </div>
            </div>
            <div className='vertical-center'>
                <div style={{display:"flex"}}>
                    <img alt='' src={award1}/>
                    <h2>Sandwiches</h2>
                    <img alt='' src={award2}/>
                </div>
                <p>Served on Bread Bar Pullman Loaf or Hommage Bakehouse Baguette (+$1) when available</p>
                <h2>Platter It | +$5</h2>
                <p>Add unique cheeses & cured meats as a side to your sandwich. </p>

            
                <div className='horizontal-spacearound'>
                    {FoodItem(
                        samplerSando, 
                        'Smallgoods Sampler Sando | $12', 
                        "Assortment of American Meats (3) + Alpine Cheese + Arugula + Olive Oil + Big Bill's Mustard + Mayo + Seasonings.")},
                    {FoodItem(calTurkeyCheese, 
                        'California Turkey & Cheese | $12', 
                        'California Swiss + Roasted Turkey + Green Apple + Cucumber + Micro Greens + Smoked Jam + Big Bill’s Mustard + Mayo.')}
                </div>
                <div className='horizontal-spacearound'>
                    {FoodItem(goldenGate,
                        'Golden Gate Phoney Baloney | $12', 
                        'San Francisco Mortadella + Aged Cheddar + Micro Greens + Red Onion + Apple Butter Jam + Dijon Mustard + Mayo.')},
                    {FoodItem(oregonCheeseHam, 
                        'Oregon Cheese & Ham | $12', 
                        "Oregon Aged Cheddar + Golden Nugget Ham + Red Apple + Micro Greens + Smoked Jam + Big Bill's Mustard + Mayo.")}
                </div>
                <div  className='horizontal-spacearound'>
                    {FoodItem(waHolyMoly,
                        'Washington Holy Molé | $12', 
                        "Assortment of American Meats (3) + Alpine Cheese + Arugula + Olive Oil + Big Bill's Mustard + Mayo + Seasonings.")}
                    {FoodItem(caWagyu,
                        'California Wagyu Bresaola | $14',
                        "California Swiss + Roasted Turkey + Green Apple + Cucumber + Micro Greens + Smoked Jam + Big Bill's Mustard + Mayo.")}
                </div>
                <div className='horizontal-spacearound'>
                    {FoodItem(norcalVeg,
                        'Northern California Veg | $12',
                        "San Francisco Mortadella + Aged Cheddar + Micro Greens + Red Onion + Apple Butter Jam + Dijon Mustard + Mayo.")}
                    {FoodItem(socalVeg,
                        'Southern California Veg | $12',
                        "Oregon Aged Cheddar + Golden Nugget Ham + Red Apple + Micro Greens + Smoked Jam + Big Bill's Mustard + Mayo.")}
                </div>
                <div>
                    <h2>Salad</h2>
                        <p>Local Micro Green Salad | $12</p>
                        <p>Local Market Micro Greens served with light lemon vinaigrette dressing.</p>
                        <p>add Farmstead cheeses | +$3 </p>
                        <p>add American charcuterie | +$3</p>
                </div>
                <h2>Cheese Tray</h2>
                <div className='horizontal-spacebetween'>
                    <div>
                        <img alt='' src={beachBox}/>
                        <p>Beach Box | $24</p>
                        <p>A solid, snack-size offering of farmstead cheeses & meats plus accompaniments for 1-2.</p>
                        <p>add Paté (when available) | +$4</p>
                    </div>
                    <div>
                        <img alt='' src={charcuterie}/>
                        <p>Charcuterie | $24</p>
                        <p>A fantastic selection of cheeses, fresh fruits, dried fruits, crackers and more.</p>
                        <p>add cured meats | +&4</p>
                        <p>add Paté (when available) | +$4</p>
                    </div>
                </div>
                <h2>Daily</h2>
                <div className='horizontal-spacearound'>
                    <img alt='' src={award3}/>
                    <p>Fresh Soups | Empanadas | Fresh Pasta | Pastries & Baguettes</p>
                </div>
                <h2>Drinks</h2>
                <div style={{marginBottom:"40px"}}>
                    <p>Hot/Iced Teas: Mango Ceylon | Lemon Ginger Mint | Hibiscus | Turmeric | Earl Grey</p>
                    <p>Hot/Iced Coffee: Espresso | Cappuccino | Latte</p>
                    <p>Kombucha | Lemonade | Fresh Juices | Bottled & Sparkling Water</p>
                </div>
            </div>
            <Footer/>
        </>
    )
}
function ImageCarousel(){
    return(
        <div className='horizontal-spacearound'>
            <img alt='' src={backArrow}/>
            <img alt='' src={platter1}/>
            <img alt='' src={forwardArrow}/>
        </div>
    )
}
function FoodItem(image, title, description){
    return(
        <div>
            <img alt='' src={image}/>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}
