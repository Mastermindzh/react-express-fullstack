/* eslint-disable import/no-named-as-default */
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import Routes from "./../constants/routes";
import HomePage from "./../containers/home/home-container.jsx";
import AboutPage from "./../containers/about/about-container.jsx";
import ErrorPage from "./../containers/error/error-container.jsx";
import NavBar from "./layout/toolbar/toolbar.jsx";

import AppDrawer from "./layout/drawer/drawer.jsx";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  state = {
    drawerOpen: false
  };

  toggleDrawer = () => {
    this.setState({ drawerOpen: true });
  };

  render() {
    const activeStyle = { color: "red" };
    return (
      <div>
        <NavBar menuIconOnClick={this.toggleDrawer} />

        <AppDrawer
          open={this.state.drawerOpen}
          onClose={() => this.setState({drawerOpen: false})}
          activeStyle = {activeStyle}
          items={[
            {
              icon: "home",
              link: Routes.home,
              text: "Home"
            },
            {
              icon: "account_box",
              link: Routes.about,
              text: "About"
            }
          ]}
        />

        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path={Routes.home} component={HomePage} />
          <Route path={Routes.about} component={AboutPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
