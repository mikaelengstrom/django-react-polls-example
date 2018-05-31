import React from 'react';
import renderer from 'react-test-renderer';
import App from './';
// import data from './App.json';

describe('<App />', () => {
    it('Renders an empty App', () => {
        const componentJson = renderer
            .create(<App />)
            .toJSON();
        expect(componentJson).toBeTruthy();
    });

    /*
    it('Renders App with data', () => {
        const componentJson = renderer
            .create(<App {...data} />)
            .toJSON();
        expect(componentJson).toMatchSnapshot();
    });
    */
});
