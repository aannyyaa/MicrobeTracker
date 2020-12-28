import React from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryLegend,
} from 'victory';

const microbe1 = [
  { sample: '1', relativeFreq: 55 },
  { sample: '2', relativeFreq: 5 },
  { sample: '3', relativeFreq: 10 },
  { sample: '4', relativeFreq: 15 },
  { sample: '5', relativeFreq: 65 },
];
const microbe2 = [
  { sample: '1', relativeFreq: 5 },
  { sample: '2', relativeFreq: 45 },
  { sample: '3', relativeFreq: 20 },
  { sample: '4', relativeFreq: 10 },
  { sample: '5', relativeFreq: 10 },
];
const microbe3 = [
  { sample: '1', relativeFreq: 15 },
  { sample: '2', relativeFreq: 15 },
  { sample: '3', relativeFreq: 25 },
  { sample: '4', relativeFreq: 20 },
  { sample: '5', relativeFreq: 5 },
];
const microbe4 = [
  { sample: '1', relativeFreq: 20 },
  { sample: '2', relativeFreq: 5 },
  { sample: '3', relativeFreq: 5 },
  { sample: '4', relativeFreq: 35 },
  { sample: '5', relativeFreq: 10 },
];
const microbe5 = [
  { sample: '1', relativeFreq: 5 },
  { sample: '2', relativeFreq: 30 },
  { sample: '3', relativeFreq: 40 },
  { sample: '4', relativeFreq: 20 },
  { sample: '5', relativeFreq: 10 },
];

class MicrobeGraph extends React.Component {
  render() {
    return (
      <div className="charts">
        <div id="barChart">
          <h2>Jane's Carousel</h2>
          <h4>January 1, 2021</h4>
          <VictoryChart domainPadding={25}>
            <VictoryLegend
              title="Legend"
              orientation="horizontal"
              data={[
                { name: 'Microbe 1' },
                { name: 'Microbe 2' },
                { name: 'Microbe 3' },
                { name: 'Microbe 4' },
                { name: 'Microbe 5' },
              ]}
            />
            <VictoryAxis
              tickValues={[1, 2, 3, 4, 5]}
              tickFormat={(x) => `Location ${x}`}
            />
            <VictoryAxis dependentAxis tickFormat={(x) => `${x}%`} />
            <VictoryStack>
              <VictoryBar data={microbe1} x="sample" y="relativeFreq" />
              <VictoryBar data={microbe2} x="sample" y="relativeFreq" />
              <VictoryBar data={microbe3} x="sample" y="relativeFreq" />
              <VictoryBar data={microbe4} x="sample" y="relativeFreq" />
              <VictoryBar data={microbe5} x="sample" y="relativeFreq" />
            </VictoryStack>
          </VictoryChart>
        </div>
      </div>
    );
  }
}

export default MicrobeGraph;
