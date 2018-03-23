import React, { Component } from "react";
import {
  Toolbar,
  ToolbarRow,
  ToolbarSection,
  ToolbarTitle,
  ToolbarMenuIcon,
  ToolbarIcon,
  ToolbarFixedAdjust
} from "rmwc/Toolbar";
import Ripple from "rmwc/Ripple";
import PropTypes from "prop-types";

class NavBar extends Component {

  state = {
    navBarOpen: true
  }

  render() {
    return (
      <div>
        <Toolbar fixed>
          <ToolbarRow>
            <ToolbarSection alignStart>
              <Ripple>
                <ToolbarMenuIcon
                  use="menu"
                  style={{ color: "inherit", alignSelf: "center" }}
                  onClick={this.props.menuIconOnClick != undefined ? this.props.menuIconOnClick : () => {alert('hello')}}
                  className="material-icons mdc-ripple-upgraded--unbounded mdc-ripple-upgraded mdc-ripple-surface  mdc-toolbar__menu-icon"
                />
              </Ripple>

              <ToolbarTitle>React-sane-starter</ToolbarTitle>
            </ToolbarSection>

            <ToolbarSection alignEnd>
              <ToolbarIcon use="save" />
              <ToolbarIcon use="print" />
            </ToolbarSection>
          </ToolbarRow>
        </Toolbar>
        <ToolbarFixedAdjust />
      </div>
    );
  }
}

NavBar.propTypes = {
  menuIconOnClick: PropTypes.func
};


export default NavBar;
