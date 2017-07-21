import {Router, Route, Switch, Redirect} from 'react-router-dom';
import React, {Component, createElement} from 'react';

import DotaznikPage from '../Pages/DotaznikPage';
import ThankYouPage from '../Pages/ThankYouPage';
import IntroPage from '../Pages/IntroPage';

/**
 * Application root
 * @param {Object} history window history
 */
const Root = ({history}) => {

    return <div>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={IntroPage}/>
                <Route exact path="/thank-you" component={ThankYouPage}/>
                <Route exact path="/dotaznik" component={DotaznikPage}/>
                { /* Instead of Not Found Page we use IntroPage */ }
                <Route component={IntroPage}/>
            </Switch>
        </Router>
    </div>


};

export default Root;