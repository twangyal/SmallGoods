import dragfruit from '../resources/dfruit.png'
import fullplatter from '../resources/Full platter.png'
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
                <Text_title/>
            </div>
            <img alt='' src={whitecube} className='whitecube'/>
            <img alt='' src={halfplatter} className='halfplatter'/>
        </div>
    )
}
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