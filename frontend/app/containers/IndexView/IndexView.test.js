import React from 'react';
import renderer from 'react-test-renderer';
import IndexView from './';
// import data from './IndexView.json';

describe('<IndexView />', () => {
    it('Renders an empty IndexView', () => {
        const componentJson = renderer
            .create(<IndexView />)
            .toJSON();
        expect(componentJson).toBeTruthy();
    });

    /*
    it('Renders IndexView with data', () => {
        const componentJson = renderer
            .create(<IndexView {...data} />)
            .toJSON();
        expect(componentJson).toMatchSnapshot();
    });
    */
});
