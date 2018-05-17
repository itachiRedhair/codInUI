import React, { Component } from "react";
import { Redirect, Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

//Components imports
import PrivateRoute from "./../components/PrivateRoute";
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";
import LandingComponent from "./Dashboard/LandingComponent"
import Loader from "./../components/Loader";

//ActionCreatorImports
import { actions as authAction } from "./../modules/auth";
import { setLoadingStatus } from "./../modules/loader";

//API imports
import { getUser } from "./../utilities/api";

//Styles imports
import "./../styles/_theme.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserRequestComplete: false
    };
  }

  componentDidMount() {
    this.props.setLoadingStatus(true);
    getUser()
      .then(response => {
        this.setState({
          isUserRequestComplete: true
        });
        if (response.message !== "UNAUTHORIZED") {
          this.props.login();
          this.props.history.push("/landing");
        }
        this.props.setLoadingStatus(false);
      })
      .catch(err => {
        this.setState({ isUserRequestComplete: true });
        this.props.setLoadingStatus(false);
        console.log(err);
      });
  }

  render() {
    return this.state.isUserRequestComplete ? (
      <React.Fragment>
        <Loader />
        <div>
          <Switch>
            <Route exact key="login" path="/" component={Homepage} />
            <Route exact key="signup" path="/signup" component={Homepage} />
            <PrivateRoute path="/landing" component={LandingComponent} />
            <PrivateRoute path="/dashboard" component={Dashboard} />            
          </Switch>
        </div>
      </React.Fragment>
    ) : (
      <Loader />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(authAction.login()),
    setLoadingStatus: loadingStatus => dispatch(setLoadingStatus(loadingStatus))
  };
};

export default withRouter(
  connect(null, mapDispatchToProps, null, { pure: false })(App)
);
// export default App;
