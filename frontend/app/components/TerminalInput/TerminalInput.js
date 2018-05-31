import React, {PureComponent} from 'react';

export default class TerminalInput extends PureComponent {
    static defaultProps = {
        value: '',
        onChange: () => null,
        onEnterPress: () => null,
    }

    onChange = (e) => {
        return this.props.onChange(e.target.value);
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.props.onEnterPress();
        }
    }

    render() {
        return (
            <div className="TerminalInput">
                <span className="TerminalInput__Arrow">&gt;</span>
                <input type="text"
                       ref="input"
                       onKeyPress={this.onKeyPress}
                       onChange={this.onChange}
                       value={this.props.value}/>
            </div>
        );
    }
}
