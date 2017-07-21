import React from 'react';
import Button from '../components/Button';
import {changeLocation} from '../actions';

import './IntroPage.scss';

const IntroPage = () => <div>
    <div className="page-intro-page--wrapper">
        <div className="page-intro-page--button-wrapper">
            <Button onClick={e => changeLocation('/dotaznik')}>
                Spustit dotazník
            </Button>
        </div>
    </div>
</div>;

export default IntroPage;