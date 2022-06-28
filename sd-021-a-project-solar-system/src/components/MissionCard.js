import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="div-missoes" data-testid="mission-card">
        <p className="item" id="nome-missao" data-testid="mission-name">{name}</p>
        <hr />
        <p className="item" id="ano-missao" data-testid="mission-year">{year}</p>
        <hr />
        <p className="item" id="pais-missao" data-testid="mission-country">{country}</p>
        <hr />
        <p className="item" id="dest" data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}
MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
export default MissionCard;
