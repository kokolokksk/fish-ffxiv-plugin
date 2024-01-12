import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

    inputRef = createRef();

    isOnComposition = false;

    componentDidMount() {
        this.setInputValue();
    }

    componentDidUpdate() {
        this.setInputValue();
    }

    setInputValue = () => {
        this.inputRef.current.value = this.props.value || ''
    };

    handleComposition = evt => {
        if (evt.type === 'compositionend') {
            this.isOnComposition = false;

            // 谷歌浏览器：compositionstart onChange compositionend
            // 火狐浏览器：compositionstart compositionend onChange
            if (navigator.userAgent.indexOf('Chrome') > -1) {
                this.onChange(evt);
            }

            return;
        }

        this.isOnComposition = true;
    };

    onChange = evt => {
        if (!this.isOnComposition) {
            this.props.onChange(evt);
        }
    };

    render() {
        const commonProps = {
            onChange: this.onChange,
            onCompositionStart: this.handleComposition,
            onCompositionUpdate: this.handleComposition,
            onCompositionEnd: this.handleComposition,
        };
        return <input
            ref={this.inputRef}
            type="text"
            placeholder="使用首字母搜索鱼名或钓场"
            style={{ width: 300, height: 30, outline: 'none',imeMode: 'inactive',background: 'rgb(99,99,99)',borderRadius: '5px',border: 'none',color: 'white',paddingLeft: '10px' }}
            {...commonProps}
        />
    }
}

Input.propTypes = {
    onChange: PropTypes.func
};

Input.defaultProps = {
    onChange: () => {}
};

export default Input;