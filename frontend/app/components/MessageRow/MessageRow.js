import React, { PureComponent } from 'react';

export default class MessageRow extends PureComponent {
    static defaultProps = {
        color: 'black'
    };

    render() {
        const {children, color} = this.props;

        return (
            <div className={`MessageRow MessageRow--${color}`}>
                {children}
            </div>
        );
    }
}

/**
 * <MessageRow color="black">test</MessageRow> renders:
 *
 * <div class="MessageRow MessageRow--black">test</div>
 */
