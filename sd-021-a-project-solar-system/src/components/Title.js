import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div className="titulo">
        <h2>{ headline }</h2>
      </div>
    );
  }
}
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default Title;
