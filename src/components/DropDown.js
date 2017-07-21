import {autobind} from 'core-decorators';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon/index';
import './DropDown.scss';


/**
 * DropDown displays a small button hovering above `children`.
 * When clicked on the button a list of `values` is displayed
 */
@autobind
export default class DropDown extends Component {

    static propTypes = {

        // values to be displayed in a list
        values: PropTypes.arrayOf(PropTypes.string).isRequired,

        // close DropDown when item selected
        autoClose: PropTypes.bool,

        // called when clicked on item
        // arguments: {Number} index Index of the item
        onChoose: PropTypes.func.isRequired,

        // on mouse enter item
        // arguments: {Number} index Index of the item
        onMouseEnter: PropTypes.func,

        // on mouse leave item
        // arguments: {Number} index Index of the item
        onMouseLeave: PropTypes.func,
    };

    state = {visible: false};


    handleClick(e) {
        // handle dropdown button click
        const {visible} = this.state;
        this.setState({visible: !visible})
    }


    createChooseHandler(index) {
        const {onChoose, autoClose = true} = this.props;
        if (typeof onChoose === 'function') {
            return (e) => {
                e.preventDefault();
                if (autoClose) {
                    this.setState({visible: !this.state.visible});
                }
                return onChoose(index);
            }
        }
    }

    createMouseEnterHandler(index) {
        const {onMouseEnter} = this.props;
        if (typeof onMouseEnter === 'function') {
            return e => onMouseEnter(index);
        }
    }

    createOnMouseLeaveHandler(index) {
        const {onMouseLeave} = this.props;
        if (typeof onMouseLeave === 'function') {
            return e => onMouseLeave(index);
        }
    }

    render() {
        let {children, values} = this.props;
        const {visible} = this.state;

        return <div>
            <div className="component-dropdown--wrapper">
                <div className="component-dropdown--content-wrapper">
                    {children}
                </div>
                <div className="component-dropdown--button-wrapper">
                    <div type="button"
                         className={visible ? "component-dropdown--button component-dropdown--button-opened" : "component-dropdown--button"}
                         onClick={this.handleClick}>
                        <div className="component-dropdown--icon-wrapper">
                            <Icon name={visible ? "chevron-up" : "chevron-down"}/>
                        </div>
                    </div>
                </div>
            </div>
            {visible && <div className="component-dropdown--item-wrapper">{values.map((v, index) =>
                <div className="component-dropdown--item" onMouseLeave={this.createOnMouseLeaveHandler(index)}
                     onMouseEnter={this.createMouseEnterHandler(index)} onClick={this.createChooseHandler(index)}
                     key={v}>{v}</div>
            )}</div>}
        </div>
    }
}