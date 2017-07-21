import {autobind} from 'core-decorators';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TextBox from './TextBox';
import './SmartTextBox.scss';

const HINT_KEY_CODES = [9]; // hint will be applied when keyCode is any of those

/**
 * Displays TextBox with hints
 * Hints can be applied by any key code from `HINT_KEY_CODES`
 */
@autobind
export default class SmartTextBox extends Component {

    static propTypes = {
        // list of the hints
        hints: PropTypes.arrayOf(PropTypes.string),

        // value of the TextBox
        value: PropTypes.string,
        // on Text change
        // arguments: {String} text
        onChange: PropTypes.func
    };

    // hint to be displayed
    state = {hint: ''};

    handleTextChange(e) {
        const value = e.target.value;
        const {hints, onChange} = this.props;


        // if text is empty, do not show hints
        const hint = value.trim().length === 0 ? '' : hints.find(o => o.startsWith(value)) || '';


        // display hint
        this.setState({hint});

        // trigger onChange if value has changed
        if (this.props.value !== value && typeof onChange === 'function') {
            onChange(value);
        }
    }

    handleKeyDown(e) {
        const {onChange} = this.props;
        // check if pressed key is one of HINT_KEY_CODES
        if (HINT_KEY_CODES.includes(e.keyCode)) {
            // stop event, just to make sure focus will stay on the TextBox
            e.preventDefault();

            const {hint} = this.state;

            if (hint.length === 0) {
                return;
            }

            // apply hint by simulating text change
            onChange(hint);
        }
    }

    render() {
        const {hint} = this.state;
        const {value} = this.props;
        return <div className="component-smart-textbox--wrapper">
            <div className="component-smart-textbox--main-textbox">
                {/* main TextBox */}
                <TextBox onChange={this.handleTextChange} value={value}
                         onKeyDown={this.handleKeyDown} spellCheck/>
            </div>
            <div>
                {/* hint TextBox */}
                <TextBox readOnly placeholder={hint}/>
            </div>
        </div>
    }
}