import App from '../containers/App';

export const wrapInAppContainer = (Container) => (props) => {
    return (
        <App props={props} container={Container}></App>
    );
};

export default wrapInAppContainer;
