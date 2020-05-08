import React from 'react';

//components
import Header from '../Custom/Header';
import SubscriptionFlow from '../Containers/Subscription/SubscriptionFlow';

const Subscription = () => {
    return (
        <>
          <Header isLoggedIn/>
          <SubscriptionFlow />       {/* //get started section */}
        </>
    )
}

export default Subscription;
