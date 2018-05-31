import React from 'react';
import renderer from 'react-test-renderer';
import TerminalInput from './';
// import data from './TerminalInput.json';

describe('<TerminalInput />', () => {
    it('Renders an empty TerminalInput', () => {
        const componentJson = renderer
            .create(<TerminalInput />)
            .toJSON();
        expect(componentJson).toBeTruthy();
    });

    /*
    it('Renders TerminalInput with data', () => {
        const componentJson = renderer
            .create(<TerminalInput {...data} />)
            .toJSON();
        expect(componentJson).toMatchSnapshot();
    });
    */
});
