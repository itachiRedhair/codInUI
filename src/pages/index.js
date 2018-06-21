import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Components imports
import PrivateRoute from './../components/PrivateRoute';
import Index from './Index/index';
import Dashboard from './Dashboard';
import LandingComponent from './Landing';
import NotFound from './NotFound';
import Loader from './../components/Loader';
import Toaster from './../components/Toaster';

// ActionCreatorImports
import { actions as authAction } from './../modules/auth';
import { setLoadingStatus } from './../modules/loader';

// API imports
import { getUser } from './../utilities/api';


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
        if (response && response.message !== 'UNAUTHORIZED') {
          this.props.login(response);
          const { from } = this.props.location.state || { from: { pathname: '/landing' } };
          this.props.history.push(from);
        } else {
          this.props.history.push('/');
        }
        this.props.setLoadingStatus(false);
      })
      .catch((err) => {
        this.setState({ isUserRequestComplete: true });
        this.props.setLoadingStatus(false);
        console.log(err);
      });
  }

  /* eslint-disable react/jsx-filename-extension */
  render() {
    return this.state.isUserRequestComplete ? (
      <React.Fragment>
        <Loader />
        <Toaster />
        <div>
          <Switch>
            <Route exact key="login" path="/" component={Index} />
            <Route exact key="signup" path="/signup" component={Index} />
            <PrivateRoute path="/projects/:projectId/:submittedAt/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/landing" component={LandingComponent} />
            <Route path="/notfound" component={NotFound} />
          </Switch>
        </div>
      </React.Fragment>
    ) : null;
  }
  /* eslint-enable react/jsx-filename-extension */
}
/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  setLoadingStatus: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.shape({}).isRequired,
};
/* eslint-enable react/forbid-prop-types */

const mapDispatchToProps = (dispatch) => ({
  login: (userResponse) => dispatch(authAction.login(userResponse)),
  setLoadingStatus: (loadingStatus) => dispatch(setLoadingStatus(loadingStatus)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
    null,
    { pure: false }
  )(App)
);
// export default App;
