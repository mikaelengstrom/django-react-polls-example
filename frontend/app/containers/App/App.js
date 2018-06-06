import React, { PureComponent } from 'react';
import convertObjectKeysToCamel from '../../utils/CaseConverters';

export default class App extends PureComponent {
    static defaultProps = {
        container: null,
        props: null,
    };

    render() {
        const Container = this.props.container;

        return (
            <div className="App">
                <Container {...convertObjectKeysToCamel(this.props.props)} />
            </div>
        );
    }
}