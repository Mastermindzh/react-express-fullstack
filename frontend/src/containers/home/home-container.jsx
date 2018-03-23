import React, { Component } from 'react';
import { connect } from "react-redux";
import { changeColor } from './../../actions/color-actions/color-actions.jsx';
import PropTypes from "prop-types";
import Footer from "./../../components/layout/footer.jsx";
import {getRandomColor} from "./../../utils/colors/colors";
import { Button } from 'rmwc/Button';
import { Typography } from 'rmwc/Typography';

export class HomePage extends Component {

  render() {

    const { color, changeColor } = this.props;

    return (
      <div>
        <Typography use="headline">React sane starter</Typography>
        <Typography use="body1"><p>Current footer color: {color}</p></Typography>

        <Button unelevated onClick={() => { changeColor(getRandomColor()); }}>Change color</Button>
        <Footer color={color}  />
      </div>
    );
  }
}

HomePage.propTypes = {
  color: PropTypes.string,
  changeColor: PropTypes.func
}

function mapStateToProps(state) {
  return {
    color: state.colorReducer.color
  };
}

export default connect(mapStateToProps, { changeColor })(HomePage);

