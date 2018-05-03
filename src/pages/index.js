import React, { Component } from "react";
import { Redirect, Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

//Components imports
import PrivateRoute from "./../components/PrivateRoute";
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";
import Loader from "./../components/Loader";

//ActionCreatorImports
import { actions } from "./../modules/auth";
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
      .then(userInfo => {
        this.setState({
          isUserRequestComplete: true
        });
        if (!userInfo) {
          this.props.login();
          this.props.history.push("/dashboard/overview");
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
    login: () => dispatch(actions.login()),
    setLoadingStatus: loadingStatus => dispatch(setLoadingStatus(loadingStatus))
  };
};

export default withRouter(
  connect(null, mapDispatchToProps, null, { pure: false })(App)
);
// export default App;
