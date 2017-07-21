import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TextBox.scss';

export default class TextBox extends Component {

    static propTypes = {
        // value to be displayed
        value: PropTypes.string,

        // text from textbox will not be able to change
        readOnly: PropTypes.bool,

        // placeholder will be displayed when value is empty
        placeholder: PropTypes.string,

        // spell check will be enabled
        spellCheck: PropTypes.bool,

        onChange: PropTypes.func,
        onKeyDown: PropTypes.func

    };

    // will trigger event when value changed programmatically
    componentWillReceiveProps(nextProps) {
        if (nextProps.value && nextProps.value !== this.props.value && typeof this.props.onChange === 'function') {
            this.props.onChange({target: {value: nextProps.value}});
        }
    }

    render() {
        const {onChange, onKeyDown, readOnly = false, placeholder = '', value = '', spellCheck = false} = this.props;

        return <input type="text" className="component-textbox--input" value={value} readOnly={readOnly}
                      placeholder={placeholder} onChange={onChange}
                      onKeyDown={onKeyDown} spellCheck={spellCheck}/>
    }
}
