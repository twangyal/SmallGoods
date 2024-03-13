import dragfruit from '../resources/dfruit.png'
import fullplatter from '../resources/Full platter.png'
import title from '../resources/title2.png'
import halfplatter from '../resources/Halfplatter.png'
import whitecube from '../resources/whitecube.png'

export default function Home(){
    return(
        <div className='masthead'>
            <div className='masthead-section1'>
                <img alt=''src={dragfruit} className='dragfruit'/>
                <img alt=''src={fullplatter} className='fullplatter'/>
            </div>
            <div className='masthead-section2'>
                <img alt='title' src={title} className='title2' />
            </div>
            <img alt='' src={whitecube} className='whitecube'/>
            <img alt='' src={halfplatter} className='halfplatter'/>
        </div>
    )
}