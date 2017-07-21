import {autobind} from 'core-decorators';
import React, {Component} from 'react';
import PropTypes from 'prop-types';


/**
 * Simple hover state provider
 * Example: <Hoverable content={({hovered}) => {
 *  return <div>{hovered ? 'mouse over': 'mouse not over'}</div>
 * }} />
 */
@autobind
export default class Hoverable extends Component {
    static propTypes = {
        // content will be re-rendered when mouse enters/leaves the element
        // arguments: {Boolean} hovered True when mouse is above the element
        content: PropTypes.func.isRequired
    };

    state = {hovered: false};

    onMouseEnter() {
        this.setState({hovered: true});
    }

    onMouseLeave() {
        this.setState({hovered: false});
    }

    render() {
        const {content, ...rest} = this.props;
        const {hovered} = this.state;
        return <div style={{display: 'contents'}} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
            {React.createElement(content, {...rest, hovered})}
        </div>
    }
}