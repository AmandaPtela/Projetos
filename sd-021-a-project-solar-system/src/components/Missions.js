import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../App.css';

class missoes extends React.Component {
  render() {
    return (
      <div className="missoes-titulo" data-testid="missions">
        <Title headline="Missões" />
        <div className="missoes">
          {missions.map((item) => (
            <MissionCard
              key={ item.name }
              name={ item.name }
              year={ item.year }
              country={ item.country }
              destination={ item.destination }
            />
          ))}
        </div>
      </div>
    );
  }
}
export default missoes;
