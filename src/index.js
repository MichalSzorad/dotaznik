import React from 'react';

import registerServiceWorker from './registerServiceWorker';
import renderReactApp from './utils/renderReactApp';
import Root from './components/Root';
import history from './history';

import './app.scss';

renderReactApp(<div>
    <Root history={history}/>
</div>, 'app');

registerServiceWorker();
