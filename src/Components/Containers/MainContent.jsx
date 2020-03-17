import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it';

const MainContent = props => {
    return Style.it(`
        .main__content--container {
            margin-right: 60px;
            margin-left: 60px;
            padding-top: 70px;
            display: flex;
            
        }
        .main__content--left {
            width: 100%;
        }
        .main__content--right {
            width: 100%;
            background-image: url('https://res.cloudinary.com/dg7n6i9e1/image/upload/v1584478426/undraw_season_change_f99v_jpme6e.svg');
            background-repeat: no-repeat;
            background-size: contain;
            height: 90vh;
        }
        .main__content--large-text {
            font-size: 33px;
            color: #31DE28;
            margin-top: 40px;
        }
        .main__content--small-text {
            color: gray;
        }
    `,
    <div className="main__content--container">
        <div className="main__content--left">
            <h1 className='main__content--large-text'>And remind, for indeed, the reminder benefits the believers.</h1>
            <h5 className='main__content--small-text'>Quran 51:55</h5>
        </div>  
        <div className="main__content--right">
        </div>     
    </div>
)
       
    
}

MainContent.propTypes = {

}

export default MainContent
