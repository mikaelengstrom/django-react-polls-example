import React, { PureComponent } from 'react';
import MessageRow from '../../components/MessageRow';
import TerminalInput from '../../components/TerminalInput';
import wrapInAppContainer from "../../utils/wrapInBaseContainer";

class IndexView extends PureComponent {
    state = {
        currentCommand: '',
        rows: [],
    }

    static defaultProps = {
        messages: [
            'Welcome to the Javascript Eval poll.',
            '',
            'Type "start" to begin...',
        ]
    }

    componentDidMount() {
        for (const i in this.props.messages) {
            const timeout = i * 250;
            setTimeout(() => this.addMessage(this.props.messages[i]), timeout)
        }

        this.refs.input.refs.input.focus();
    }

    addMessage = (msg) => {
        this.setState({rows: [...this.state.rows, msg]});
    }

    handleOnChange = (value) => {
        this.setState({currentCommand: value})
    }

    handleEnterPress = () => {
        if (this.state.currentCommand.toLowerCase() === 'start') {
            window.location = this.props.firstQuestionUrl;
        } else {
            this.addMessage(`Invalid command: ${this.state.currentCommand}`)
        }
    }

    render() {
        return (
            <div className="IndexView">
                {
                    this.state.rows.map(
                        (msg, i) => <MessageRow key={i}>{msg}</MessageRow>
                    )
                }
                <TerminalInput
                    onChange={this.handleOnChange}
                    onEnterPress={this.handleEnterPress}
                    ref={'input'}
                    value={this.state.currentCommand} />
            </div>
        );
    }
}

export default wrapInAppContainer(IndexView)
