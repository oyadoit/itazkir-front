import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const DownloadFromStore = props => {
    return(

        <Link to='/'>
            <img width='140px' className={props.className} src={props.imageUrl} alt={props.alt}/>
        </Link>
    )
}

DownloadFromStore.propTypes = {

}

export default DownloadFromStore;