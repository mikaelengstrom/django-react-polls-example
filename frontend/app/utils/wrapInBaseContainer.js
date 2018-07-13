import App from '../containers/App';


export const wrapInAppContainer = (WrappedComponent) => {
    class WrappedInApp extends React.Component {
        render() {
            return (
                <App props={this.props} container={WrappedComponent}/>
            );
        }
    }

    WrappedInApp.displayName = `WrappedInApp(${WrappedComponent.name})`;

    return WrappedInApp;
};

export default wrapInAppContainer;
