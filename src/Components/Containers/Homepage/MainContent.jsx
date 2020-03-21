import React from 'react'
import PropTypes from 'prop-types'



import DownloadFromStore from '../../Custom/DownloadFromStore'
import GetStartedButton from '../../Custom/GetStartedButton';
import Circle from '../../Custom/Particles/Circle';
import Triangle from '../../Custom/Particles/Triangle';
import Hexagon from '../../Custom/Particles/Hexagon';


const MainContent = props => {
    return (
        <div className="main__content--container">
        <div className="main__content--left">
            <h1 className='main__content--large-text'>And remind, for indeed,  the reminder benefits the believers.</h1>
            <h5 className='main__content--small-text'>Quran 51:55</h5>
            <GetStartedButton className='button__green'>Get Started Now</GetStartedButton>
            <div className='download__container'>
                <DownloadFromStore 
                    imageUrl='https://res.cloudinary.com/dg7n6i9e1/image/upload/v1584607070/iTazkir/get_google_play_lmo8uc.png'
                    className='download-from-store'
                    alt='Download from android store'
                />

                <DownloadFromStore 
                    imageUrl='https://res.cloudinary.com/dg7n6i9e1/image/upload/v1584607077/iTazkir/download_app_store_kyq4uh.png'
                    className='download-from-store'
                    alt='Download from apple store'
                />

                <Triangle color='#31DE28' width='15' height='15' top='390' left='400'/>
                <Circle color='#31DE28' width='20' height='20' top='170' left='305'/>
                <Triangle color='pink' width='5' height='5' top='195' left='300'/>
                <Hexagon color='orange' width='5' height='5' top='150' left='252'/>
                <img style={{'top':'100',}} src="https://res.cloudinary.com/dg7n6i9e1/image/upload/v1584830336/iTazkir/Path_172_qh8n8o.png" alt=""/>
                
            </div>
        </div>  
        <div className="main__content--right">
        </div>     
        
    </div>

    )  
    
}

MainContent.propTypes = {

}

export default MainContent
