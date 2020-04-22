import React from 'react'
import PropTypes from 'prop-types'
import Style from 'style-it';

const SideNav = (props) => {
    return Style.it(`
        .sidebar__container {
            background-color: #fff;
            height: 100vh;
            border-right: 0.1px solid rgba(8, 8, 8, 0.575);
        }
    `,
        <div className='sidebar__container'>
            hshhsh
        </div>
    )
}

SideNav.propTypes = {

}

export default SideNav

