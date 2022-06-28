import React from 'react';
import PropTypes from 'prop-types';

class planetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img height="120px" src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name" className="nome-planeta">{ planetName }</p>
      </div>
    );
  }
}
planetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
export default planetCard;
