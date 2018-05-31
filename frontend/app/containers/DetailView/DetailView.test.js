import React from 'react';
import renderer from 'react-test-renderer';
import DetailView from './';
// import data from './DetailView.json';

describe('<DetailView />', () => {
    it('Renders an empty DetailView', () => {
        const componentJson = renderer
            .create(<DetailView />)
            .toJSON();
        expect(componentJson).toBeTruthy();
    });

    /*
    it('Renders DetailView with data', () => {
        const componentJson = renderer
            .create(<DetailView {...data} />)
            .toJSON();
        expect(componentJson).toMatchSnapshot();
    });
    */
});
