import React, { Component } from "react";
import { Drawer, DrawerContent } from "rmwc/Drawer";
import { ListItem, ListItemText, ListItemGraphic } from "rmwc/List";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class AppDrawer extends Component {
  render() {
    return (
      <div>
        <Drawer temporary open={this.props.open}>
          <DrawerContent>
            {this.props.items.map(item => {
              return (
                <NavLink onClick={() => this.props.onClose()} className="drawerLink" key={item.link} to={item.link} activeStyle={this.props.activeStyle} >
                  <ListItem>
                    {item.icon ? (
                      <ListItemGraphic>{item.icon}</ListItemGraphic>
                    ) : (
                      ""
                    )}
                    <ListItemText style={{marginBottom: "-3px"}}>{item.text}</ListItemText>
                  </ListItem>
                </NavLink>
              );
            })}
          </DrawerContent>
        </Drawer>
      </div>
    );
  }
}

AppDrawer.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  items: PropTypes.array,
  activeStyle: PropTypes.object
};


export default AppDrawer;
