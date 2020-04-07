import React from 'react'
import PropTypes from 'prop-types';
import Style from 'style-it';

import Header from '../Custom/Header';
import Reminder from '../Containers/Dashboard/Reminders';
import Subscription from '../Containers/Dashboard/Subscription';

const Dashboard = props => {
    return Style.it(`
        .container {
            display: grid;
            // grid-template-columns: repeat(2, 1fr);
            grid-template-columns: 60% 35%;
            grid-gap: 5%;
        }
    `,
        <div>
            <Header isLoggedIn='isLoggedIn' />
            <div className='container'>
                <Reminder />
                <Subscription />

            </div>
            
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard;
