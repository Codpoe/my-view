import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Input from '../input/';
import Pop from '../pop/';
import Tag from '../tag/';
import Loader from '../loader/';
import SelectOption from './SelectOption.jsx';
import SelectContext from './select-context';
import './select.css';

const findLabelByValue = (options, value) => {
    for (const option of options) {
        if (option.props.value === value) {
            return option.props.label || option.props.children;
        }
        if (option.type.name === 'SelectGroup') {
            let label = findLabelByValue(option.children, value);
            if (label) {
                return label;
            }
        }
    }
    return '';
}

export default class Select extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            showClearIcon: false,
            rerenderOptions: true
        };
    }

    static getDerivedStateFromProps({ children, value }) {
        let selection;

        if (Array.isArray(value)) {
            selection = value.map(item => findLabelByValue(children, item));
        } else {
            selection = findLabelByValue(children, value);
        }

        return {
            selection
        };
    }

    handleSelect = (optionValue, optionLabel) => {
        const { value, multiple, onSelect } = this.props;
        const { selection } = this.state;
        let resValue;
        let resLabel;
        
        if (multiple) {
            const index = value.indexOf(optionValue);
            resValue = value.slice();
            resLabel = selection.slice();
            if (index === -1) {
                resValue.push(optionValue);
                resLabel.push(optionLabel);
            } else {
                resValue.splice(index, 1);
                resLabel.splice(index, 1);
            }
        } else {
            resValue = optionValue;
            resLabel = optionLabel;
            this.setState({
                active: false
            });
        }

        onSelect && onSelect(resValue, resLabel);
    }

    handlePopChange = (active) => {
        const { selection } = this.state;

        this.setState({
            active
        });

        if (!active) {
            this.setState({
                selection
            });
        }
    }

    handleInputChange = (value) => {
        this.setState({
            selection: value
        });
    }

    handleInputMouseEnter = () => {
        const { value, clearable, multiple } = this.props;

        clearable && (multiple ? value.length > 0 : value) && this.setState({
            showClearIcon: true
        });
    }

    handleInputMouseLeave = () => {
        const { clearable } = this.props;

        clearable && this.setState({
            showClearIcon: false
        });
    }

    handleClear = (ev) => {
        const { multiple, onSelect } = this.props;
        let res;
        
        ev.stopPropagation();
        if (multiple) {
            res = [];
        } else {
            res = '';
        }
        onSelect && onSelect(res, res);
    }

    handleClearItem(index, ev) {
        const { value, onSelect } = this.props;
        const { selection } = this.state;
        const resValue = value.slice();
        const resLabel = selection.slice();

        ev.stopPropagation();
        ev.nativeEvent.stopImmediatePropagation();

        resValue.splice(index, 1);
        resLabel.splice(index, 1);
        onSelect && onSelect(resValue, resLabel);
    }

    defaultFilter = (option, index) => {
        const { inputValue } = this.state;
        const label = option.props.label || option.props.children;

        return label.indexOf(inputValue) !== -1;
    }

    renderSelection() {
        const {
            value,
            placeholder,
            size,
            round,
            disabled,
            filterable,
            multiple
        } = this.props;
        const {
            active,
            selection
        } = this.state;

        if (multiple) {
            return selection.map((item, index) => (
                <Tag
                    key={item}
                    className="x-select__tag"
                    color="#ECECEC"
                    round
                    closable
                    onClose={this.handleClearItem.bind(this, index)}
                >
                    {item}
                </Tag>
            ));
        }
        return (
            <input
                className="x-select__input"
                type="text"
                value={selection}
                readOnly={!filterable}
                disabled={disabled}
                onChange={this.handleInputChange}
            />
        )
    }

    renderOptions() {
        const { value, multiple, filterable, children } = this.props;
        const { rerenderOptions } = this.state;
        let options;   

        return (
            <SelectContext.Provider
                value={{
                    value,
                    multiple,
                    onSelect: this.handleSelect
                }}
            >
                <ul className="x-select__list">
                    {children}
                </ul>
            </SelectContext.Provider>
        );
    }

    renderLoading() {
        return (
            <div className="x-select__loader-wrapper">
                <Loader />
            </div>
        )
    }

    renderIcon() {
        const { showClearIcon } = this.state;
        return (
            <div
                className="x-select__icon-wrapper"
                onClick={showClearIcon ? this.handleClear : null}
            >
                {showClearIcon
                    ? (<i className="icon icon-x"></i>)
                    : (<i className="icon icon-chevron-down"></i>)}
            </div>
        )
    }

    render() {
        const {
            name,
            value,
            label,
            placeholder,
            size,
            multiple,
            round,
            filterable,
            loading,
            disabled,
            onSelect,
            children,
            className,
            style
        } = this.props;

        const {
            active,
            inputValue,
            showClearIcon
        } = this.state;

        let popContent;

        if (loading) {
            popContent = this.renderLoading();
        } else {
            popContent = this.renderOptions();
        }

        const classes = classnames(className, 'x-select', {
            'x-select--active': active
        });

        return (
            <div
                className={classes}
                style={style}
            >
                <Pop
                    content={popContent}
                    trigger="click"
                    active={active}
                    className="x-select__pop"
                    onChange={this.handlePopChange}
                >
                    <div
                        className="x-select__trigger"
                        onMouseEnter={this.handleInputMouseEnter}
                        onMouseLeave={this.handleInputMouseLeave}
                    >
                        <div className="x-select__selection">
                            {this.renderSelection()}
                        </div>
                        {this.renderIcon()}
                    </div>

                    {/* <Input
                        className="x-select__input"
                        value={inputValue}
                        placeholder={placeholder}
                        size={size}
                        round={round}
                        disabled={disabled}
                        keepFocused={active}
                        readOnly={!filterable}
                        onMouseEnter={this.handleInputMouseEnter}
                        onMouseLeave={this.handleInputMouseLeave}
                        onChange={this.handleInputChange}
                        suffix={this.renderIcon()}
                    /> */}
                </Pop>    
            </div>
        )
    }
}

Select.propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    label: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    round: PropTypes.bool,
    filterable: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
    loading: PropTypes.bool,
    clearable: PropTypes.bool,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    onSelect: PropTypes.func
}

Select.defaultProps = {
    label: '',
    size: 'normal',
    round: false,
    filterable: false,
    loading: false,
    clearable: false,
    disabled: false,
    multiple: false
}
