import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Components imports
import PrivateRoute from './../components/PrivateRoute';
import Index from './Index/index';
import Dashboard from './Dashboard';
import LandingComponent from './Landing';
import Loader from './../components/Loader';
import ReduxToastr from 'react-redux-toastr';
// ActionCreatorImports
import { actions as authAction } from './../modules/auth';
import { setLoadingStatus } from './../modules/loader';
// API imports
import { getUser } from './../utilities/api';
// Styles imports
import './../styles/_theme.scss';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserRequestComplete: false,
    };
  }

  componentDidMount() {
    this.props.setLoadingStatus(true);
    getUser()
      .then((response) => {
        this.setState({
          isUserRequestComplete: true,
        });
        if (response.message !== 'UNAUTHORIZED') {
          this.props.login();
          this.props.history.push('/landing');
        }
        else {
          this.props.history.push('/')
        }
        this.props.setLoadingStatus(false);
      })
      .catch((err) => {
        this.setState({ isUserRequestComplete: true });
        this.props.setLoadingStatus(false);
        console.log(err);
      });
  }

  render() {
    return this.state.isUserRequestComplete ? (
      <React.Fragment>
        <Loader />
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        // progressBar
        />
        <div>
          <Switch>
            <Route exact key="login" path="/" component={Index} />
            <Route exact key="signup" path="/signup" component={Index} />
            <PrivateRoute path="/landing" component={LandingComponent} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </React.Fragment>
    ) : (
        <div>
          <Loader />
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
          // progressBar
          />
        </div>

      );
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(authAction.login()),
  setLoadingStatus: loadingStatus => dispatch(setLoadingStatus(loadingStatus)),
});

export default withRouter(connect(null, mapDispatchToProps, null, { pure: false })(App));
// export default App;
