import dragfruit from '../resources/dfruit.png'
import fullplatter from '../resources/Full platter.png'
import title from '../resources/title2.png'
import halfplatter from '../resources/Halfplatter.png'
import whitecube from '../resources/whitecube.png'

export default function Home(){
    return(
        <div className='masthead'>
            <div className='masthead-section1'>
                <img alt=''src={dragfruit}width='336px' height='417px' flex-shrink='0'/>
                <img alt=''src={fullplatter} className='fullplatter'/>
            </div>
            <div className='masthead-section2'>
                <img alt='title' src={title} width='451px' height='147px' flex-shrink='0'/>
                <text className='description'>La Jolla-based cheese shop, cafe, and caterer of American farmstead cheese and cured meats</text>
            </div>
            <img alt='' src={whitecube} className='whitecube'/>
            <img alt='' src={halfplatter} className='halfplatter'/>
        </div>
    )
}