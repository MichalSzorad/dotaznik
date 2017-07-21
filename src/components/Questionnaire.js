import {autobind} from 'core-decorators';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import RadioButton from './RadioButton';
import SmartTextBox from './SmartTextBox';
import DropDown from './DropDown';
import TextBox from './TextBox';
import Button from './Button';
import Card from './Card';
import Icon from './Icon';

import {hints, ageOptions, genders} from '../constants';
import './Questionnaire.scss';


@autobind
export default class Questionnaire extends Component {

    static propTypes = {
        // when on send data button click
        // arguments: {Object} data Data to be send
        sendData: PropTypes.func.isRequired,
        onCloseClick: PropTypes.func.isRequired
    };

    // list of required params
    static requiredParams = ['firstName', 'lastName', 'genderId', 'ageCategory'];

    state = {
        // to display warning message
        _missingParameters: false,
        // to have live preview of chosen age when mouse hovers above the DropDown item
        _ageCategory: null,
        firstName: '',
        lastName: '',
        genderId: 0,
        ageCategory: 0,
        favoriteActivity: ''
    };

    handleSendClick(e) {
        const {sendData} = this.props;

        const {firstName, lastName, genderId, ageCategory, favoriteActivity} = this.state;

        // data to be sent
        const result = {firstName, lastName, genderId, ageCategory, favoriteActivity};


        // check for required params and generate message
        const valid = !Object.keys(result)
            .filter(key => Questionnaire.requiredParams.includes(key))
            .find(key => {
                if (typeof result[key] === 'string' && result[key].trim().length === 0) {
                    return true;
                }
            });

        if (!valid) {
            this.setState({_missingParameters: true});
            return;
        }

        this.setState({_missingParameters: false});

        // call onSendClick
        sendData({firstName, lastName, genderId, ageCategory, favoriteActivity})
    }


    render() {
        const {onCloseClick} = this.props;
        const {firstName, lastName, genderId, ageCategory, favoriteActivity, _missingParameters} = this.state;

        return <div className="component-questionnaire--wrapper">
            <Card>
                <div className="component-questionnaire--close-wrapper">
                    <Button plain onClick={onCloseClick}>
                        <Icon name="close"/>
                    </Button>
                </div>
                <h1 className="component-questionnaire--title">Dotazník</h1>
                {_missingParameters && <div className="component-questionnaire--warning">
                    Vyplňte prosím všechny plíčka označené červenou hvězdičkou
                </div>}
                <div className="component-questionnaire--block">
                    <div className="component-questionnaire--block-half">
                        <div className="component-questionnaire--spaced">
                            <b>Jméno</b>
                            <span className="component-questionnaire--warning">*</span>
                        </div>
                        <TextBox value={firstName} onChange={e => this.setState({firstName: e.target.value})}/>
                    </div>
                    <div className="component-questionnaire--block-half">
                        <div className="component-questionnaire--spaced">
                            <b>Příjmení</b>
                            <span className="component-questionnaire--warning">*</span>
                        </div>
                        <TextBox value={lastName} onChange={e => this.setState({lastName: e.target.value})}/>
                    </div>
                </div>
                <div className="component-questionnaire--block">
                    <div className="component-questionnaire--block-half">
                        <div className="component-questionnaire--spaced">
                            <b>Věková kategorie</b>
                            <span className="component-questionnaire--warning">*</span>
                        </div>
                        <div>
                            <div>
                                {/* we will have a nice preview*/}
                                <DropDown values={ageOptions}
                                          onMouseEnter={val => this.setState({
                                              _ageCategory: this.state.ageCategory,
                                              ageCategory: val
                                          })}
                                          onMouseLeave={val => this.setState({ageCategory: this.state._ageCategory})}
                                          onChoose={val => this.setState({ageCategory: val})}>
                                    <TextBox readOnly value={ageOptions[ageCategory]}/>
                                </DropDown>
                            </div>
                        </div>
                    </div>
                    <div className="component-questionnaire--block-half">
                        <div className="component-questionnaire--spaced">
                            <b>Pohlaví</b>
                            <span className="component-questionnaire--warning">*</span>
                        </div>
                        <div onChange={e => this.setState({genderId: parseInt(e.target.id)})}>
                            <RadioButton defaultChecked={genderId === 0} name="gender" label="Muž" id="0"/>
                            <RadioButton defaultChecked={genderId === 1} name="gender" label="Žena" id="1"/>
                        </div>
                    </div>
                </div>
                <div className="component-questionnaire--block">
                    <div className="component-questionnaire--block-full">
                        <div className="component-questionnaire--spaced">
                            <b>Oblíbená činnost</b>
                        </div>
                        <DropDown values={hints[ageCategory]}
                                  onChoose={val => this.setState({favoriteActivity: hints[ageCategory][val]})}>
                            <SmartTextBox hints={hints[ageCategory]}
                                          onChange={value => this.setState({favoriteActivity: value})}
                                          value={favoriteActivity}/>
                        </DropDown>
                    </div>
                </div>
                <div className="component-questionnaire--block">
                    <div className="component-questionnaire--button">
                        <Button
                            onClick={this.handleSendClick}>ODESLAT</Button>
                    </div>
                </div>
            </Card>
        </div>
    }
}