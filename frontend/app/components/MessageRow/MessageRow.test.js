import React from 'react';
import renderer from 'react-test-renderer';
import MessageRow from './';
// import data from './MessageRow.json';

describe('<MessageRow />', () => {
    it('Renders an empty MessageRow', () => {
        const componentJson = renderer
            .create(<MessageRow />)
            .toJSON();
        expect(componentJson).toBeTruthy();
    });

    /*
    it('Renders MessageRow with data', () => {
        const componentJson = renderer
            .create(<MessageRow {...data} />)
            .toJSON();
        expect(componentJson).toMatchSnapshot();
    });
    */
});
