import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis} from 'victory';

const data = [
  { bacteria: 'bacteria1', number: 10 },
  { bacteria: 'bacteria2', number: 5 },
  { bacteria: 'bacteria3', number: 7 },
  { bacteria: 'bacteria4', number: 2 },
  { bacteria: 'bacteria5', number: 4 },
];

class MicrobeGraph extends React.Component {
  render() {
    return (
      <VictoryChart domainPadding={25}>
        <VictoryBar data={data} x="bacteria" y="number" />
      </VictoryChart>
    );
  }
}

export default MicrobeGraph;
