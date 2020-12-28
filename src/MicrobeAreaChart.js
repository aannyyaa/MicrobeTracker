import React from 'react';
import {
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryLegend,
  VictoryArea,
} from 'victory';

const location1 = [
  { x: 1, y: Math.floor(Math.random() * 1000)+1000 },
  { x: 2, y: Math.floor(Math.random() * 1000)+1000 },
  { x: 3, y: Math.floor(Math.random() * 1000)+1000 },
  { x: 4, y: Math.floor(Math.random() * 1000)+1000 },
  { x: 5, y: Math.floor(Math.random() * 1000)+1000 },
  { x: 6, y: Math.floor(Math.random() * 1000)+1000 },
  { x: 7, y: Math.floor(Math.random() * 1000)+1000 },
  { x: 8, y: Math.floor(Math.random() * 1000)+1000 },
  { x: 9, y: Math.floor(Math.random() * 1000)+1000 },
  { x: 10, y: Math.floor(Math.random() * 1000)+1000 },
  { x: 11, y: Math.floor(Math.random() * 1000)+1000 },
  { x: 12, y: Math.floor(Math.random() * 1000)+1000 },
];

const location2 = [
  { x: 1, y: Math.floor(Math.random() * 500)+750 },
  { x: 2, y: Math.floor(Math.random() * 500)+750 },
  { x: 3, y: Math.floor(Math.random() * 500)+750 },
  { x: 4, y: Math.floor(Math.random() * 500)+750 },
  { x: 5, y: Math.floor(Math.random() * 500)+750 },
  { x: 6, y: Math.floor(Math.random() * 500)+750 },
  { x: 7, y: Math.floor(Math.random() * 500)+750 },
  { x: 8, y: Math.floor(Math.random() * 500)+750 },
  { x: 9, y: Math.floor(Math.random() * 500)+750 },
  { x: 10, y: Math.floor(Math.random() * 500)+750 },
  { x: 11, y: Math.floor(Math.random() * 500)+750 },
  { x: 12, y: Math.floor(Math.random() * 500)+750 },
];

const location3 = [
  { x: 1, y: Math.floor(Math.random() * 2000)+250 },
  { x: 2, y: Math.floor(Math.random() * 2000)+250 },
  { x: 3, y: Math.floor(Math.random() * 2000)+250 },
  { x: 4, y: Math.floor(Math.random() * 2000)+250 },
  { x: 5, y: Math.floor(Math.random() * 2000)+250 },
  { x: 6, y: Math.floor(Math.random() * 2000)+250 },
  { x: 7, y: Math.floor(Math.random() * 2000)+250 },
  { x: 8, y: Math.floor(Math.random() * 2000)+250 },
  { x: 9, y: Math.floor(Math.random() * 2000)+250 },
  { x: 10, y: Math.floor(Math.random() * 2000)+250 },
  { x: 11, y: Math.floor(Math.random() * 2000)+250 },
  { x: 12, y: Math.floor(Math.random() * 2000)+250 },
];

const location4 = [
  { x: 1, y: Math.floor(Math.random() * 2500)+100 },
  { x: 2, y: Math.floor(Math.random() * 2500)+100 },
  { x: 3, y: Math.floor(Math.random() * 2500)+100 },
  { x: 4, y: Math.floor(Math.random() * 2500)+100 },
  { x: 5, y: Math.floor(Math.random() * 2500)+100 },
  { x: 6, y: Math.floor(Math.random() * 2500)+100 },
  { x: 7, y: Math.floor(Math.random() * 2500)+100 },
  { x: 8, y: Math.floor(Math.random() * 2500)+100 },
  { x: 9, y: Math.floor(Math.random() * 2500)+100 },
  { x: 10, y: Math.floor(Math.random() * 2500)+100 },
  { x: 11, y: Math.floor(Math.random() * 2500)+100 },
  { x: 12, y: Math.floor(Math.random() * 2500)+100 },
];

const location5 = [
  { x: 1, y: Math.floor(Math.random() * 1000)+500 },
  { x: 2, y: Math.floor(Math.random() * 1000)+500 },
  { x: 3, y: Math.floor(Math.random() * 1000)+500 },
  { x: 4, y: Math.floor(Math.random() * 1000)+500 },
  { x: 5, y: Math.floor(Math.random() * 1000)+500 },
  { x: 6, y: Math.floor(Math.random() * 1000)+500 },
  { x: 7, y: Math.floor(Math.random() * 1000)+500 },
  { x: 8, y: Math.floor(Math.random() * 1000)+500 },
  { x: 9, y: Math.floor(Math.random() * 1000)+500 },
  { x: 10, y: Math.floor(Math.random() * 1000)+500 },
  { x: 11, y: Math.floor(Math.random() * 1000)+500 },
  { x: 12, y: Math.floor(Math.random() * 1000)+500 },
];


class MicrobeAreaChart extends React.Component {
  render() {
    return (
      <div className="charts">
        <div id="areaChart">
          <h2>Species of Microbes in Surrounding Area</h2>
          <h3>January 2020 - December 2020</h3>
          <h4>Brooklyn, NY</h4>
          <VictoryChart>
          <VictoryLegend
              title="Legend"
              orientation="horizontal"
              data={[
                { name: 'Location 1' },
                { name: 'Location 2' },
                { name: 'Location 3' },
                { name: 'Location 4' },
                { name: 'Location 5' },
              ]}
            />
            <VictoryAxis
              tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              tickFormat={(x) => `${x}`}
              label="Month"
            />
            <VictoryAxis dependentAxis/>
            <VictoryStack>
              <VictoryArea data={location1} />
              <VictoryArea data={location2} />
              <VictoryArea data={location3} />
              <VictoryArea data={location4} />
              <VictoryArea data={location5} />
            </VictoryStack>
          </VictoryChart>
        </div>
      </div>
    );
  }
}

export default MicrobeAreaChart;
