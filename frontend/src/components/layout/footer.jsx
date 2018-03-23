import React, {Component} from "react";
import PropTypes from "prop-types";

class Footer extends Component {
  render() {

    return (
        <footer style={{background: this.props.color, height: "40px", width: "90%", marginTop: "50px"}}>
          I am the footer :)
        </footer>
      );
  }
}

Footer.propTypes = {
  color: PropTypes.string
};

export default Footer;
