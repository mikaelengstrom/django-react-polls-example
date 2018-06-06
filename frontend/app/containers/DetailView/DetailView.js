import React, {PureComponent} from 'react';
import MessageRow from '../../components/MessageRow';
import TerminalInput from '../../components/TerminalInput';
import convertObjectKeysToCamel from '../../utils/CaseConverters';
import Http from '../../utils/Http';
import wrapInAppContainer from "../../utils/wrapInBaseContainer";

class DetailView extends PureComponent {
    state = {
        currentCommand: '',
        rows: [],
    }

    static defaultProps = {
        question: null,
        voteUrl: null,
    }

    componentDidMount() {
        const { question } = this.props;

        const messages = [question.questionText, ''];

        if (question) {
            for (const i in question.choices) {
                const choiceKey = Number(i) + 1;
                messages.push(`${choiceKey}. - ${question.choices[i].text}`);
            }
        }

        messages.push('');
        messages.push('Type the number of your choice:');


        this.addMessages(messages);

        this.refs.input.refs.input.focus();
    }

    addMessages = (messages) => {
        for (const i in messages) {
            const timeout = i * 500;
            setTimeout(() => this.addMessage(messages[i]), timeout)
        }
    }

    addMessage = (msg) => {
        this.setState({rows: [...this.state.rows, msg]});
    }

    handleOnChange = (value) => {
        this.setState({currentCommand: value})
    }

    handleEnterPress = () => {
        const {currentCommand} = this.state;
        const {voteUrl, question: {choices}} = this.props;

        const selectedChoice = Number(currentCommand);

        const isValidChoice = selectedChoice > 0
            && selectedChoice <= this.props.question.choices.length;

        if (isValidChoice) {
            const choice = choices[selectedChoice - 1];
            Http.post(voteUrl, {
                'choice': choice.id
            }).then((response) => {
                if (response.status === 201) {
                    return response.json()
                } else {
                    throw 'Create failed: Server responded with:' + response.status;
                }

            }).then((json) => {
                const {
                    votes,
                    nextQuestionUrl
                } = convertObjectKeysToCamel(json);

                this.addMessage(`Epic choice! It how has ${votes} votes`);
                if (nextQuestionUrl) {
                    setTimeout(() => {
                        window.location = nextQuestionUrl;
                    }, 1500)
                } else {
                    this.addMessage('This was the last question');
                }
            }).catch(e => {
                this.addMessage('Crappy code does not work, ' +
                    'or your connection is down')
            });
        } else {
            this.addMessage(`Invalid command: ${currentCommand}`);
            this.setState({currentCommand: ''});
        }

        this.setState({currentCommand: ''});
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
                    value={this.state.currentCommand}/>
            </div>
        );
    }
}

export default wrapInAppContainer(DetailView)
