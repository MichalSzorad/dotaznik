import {autobind} from 'core-decorators';
import React, {Component} from 'react';


import Questionnaire from '../components/Questionnaire';

import './DotaznikPage.scss';

import {changeLocation, sendQuestionnaireData} from '../actions';

@autobind
export default class QuestionsPage extends Component {
    render() {
        return <div>
            <div className="page-questions-page--wrapper">
                <Questionnaire onCloseClick={e => changeLocation('/')} sendData={sendQuestionnaireData}/>
            </div>
        </div>
    }
}