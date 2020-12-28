import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis} from 'victory';

const data = [
  { bacteria: '1', relativeFreq: 10 },
  { bacteria: '2', relativeFreq: 5 },
  { bacteria: '3', relativeFreq: 7 },
  { bacteria: '4', relativeFreq: 2 },
  { bacteria: '5', relativeFreq: 4 },
];

class MicrobeGraph extends React.Component {
  render() {
    return (
      <VictoryChart domainPadding={25}>
        <VictoryAxis
          tickValues={[1,2,3,4,5,6,7,8,9,10,11,12]}
          tickFormat={(x)=>(`Sample ${x}`)}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x)=>(`${x}%`)}
        />
        <VictoryBar data={data} x="bacteria" y="relativeFreq" />
      </VictoryChart>
    );
  }
}

export default MicrobeGraph;
