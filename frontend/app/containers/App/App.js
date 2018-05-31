import React, { PureComponent } from 'react';
import convertObjectKeysToCamel from '../../utils/CaseConverters';

export default class App extends PureComponent {
    state = {
    }

    static defaultProps = {
    }

    render() {
        const Container = require('../' + this.props.container).default;

        return (
            <div className="App">
                <Container {...convertObjectKeysToCamel(this.props.props)} />
            </div>
        );
    }
}
