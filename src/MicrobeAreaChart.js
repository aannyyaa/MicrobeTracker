import React from 'react';
import {
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryLegend,
  VictoryArea,
  VictoryZoomContainer,
} from 'victory';
import LocationCards from './LocationCards';

const location1 = [
  { x: 1, y: Math.floor(Math.random() * 1000) + 1000 },
  { x: 2, y: Math.floor(Math.random() * 1000) + 1000 },
  { x: 3, y: Math.floor(Math.random() * 1000) + 1000 },
  { x: 4, y: Math.floor(Math.random() * 1000) + 1000 },
  { x: 5, y: Math.floor(Math.random() * 1000) + 1000 },
  { x: 6, y: Math.floor(Math.random() * 1000) + 1000 },
  { x: 7, y: Math.floor(Math.random() * 1000) + 1000 },
  { x: 8, y: Math.floor(Math.random() * 1000) + 1000 },
  { x: 9, y: Math.floor(Math.random() * 1000) + 1000 },
  { x: 10, y: Math.floor(Math.random() * 1000) + 1000 },
  { x: 11, y: Math.floor(Math.random() * 1000) + 1000 },
  { x: 12, y: Math.floor(Math.random() * 1000) + 1000 },
];

const location2 = [
  { x: 1, y: Math.floor(Math.random() * 500) + 750 },
  { x: 2, y: Math.floor(Math.random() * 500) + 750 },
  { x: 3, y: Math.floor(Math.random() * 500) + 750 },
  { x: 4, y: Math.floor(Math.random() * 500) + 750 },
  { x: 5, y: Math.floor(Math.random() * 500) + 750 },
  { x: 6, y: Math.floor(Math.random() * 500) + 750 },
  { x: 7, y: Math.floor(Math.random() * 500) + 750 },
  { x: 8, y: Math.floor(Math.random() * 500) + 750 },
  { x: 9, y: Math.floor(Math.random() * 500) + 750 },
  { x: 10, y: Math.floor(Math.random() * 500) + 750 },
  { x: 11, y: Math.floor(Math.random() * 500) + 750 },
  { x: 12, y: Math.floor(Math.random() * 500) + 750 },
];

const location3 = [
  { x: 1, y: Math.floor(Math.random() * 2000) + 250 },
  { x: 2, y: Math.floor(Math.random() * 2000) + 250 },
  { x: 3, y: Math.floor(Math.random() * 2000) + 250 },
  { x: 4, y: Math.floor(Math.random() * 2000) + 250 },
  { x: 5, y: Math.floor(Math.random() * 2000) + 250 },
  { x: 6, y: Math.floor(Math.random() * 2000) + 250 },
  { x: 7, y: Math.floor(Math.random() * 2000) + 250 },
  { x: 8, y: Math.floor(Math.random() * 2000) + 250 },
  { x: 9, y: Math.floor(Math.random() * 2000) + 250 },
  { x: 10, y: Math.floor(Math.random() * 2000) + 250 },
  { x: 11, y: Math.floor(Math.random() * 2000) + 250 },
  { x: 12, y: Math.floor(Math.random() * 2000) + 250 },
];

const location4 = [
  { x: 1, y: Math.floor(Math.random() * 2500) + 100 },
  { x: 2, y: Math.floor(Math.random() * 2500) + 100 },
  { x: 3, y: Math.floor(Math.random() * 2500) + 100 },
  { x: 4, y: Math.floor(Math.random() * 2500) + 100 },
  { x: 5, y: Math.floor(Math.random() * 2500) + 100 },
  { x: 6, y: Math.floor(Math.random() * 2500) + 100 },
  { x: 7, y: Math.floor(Math.random() * 2500) + 100 },
  { x: 8, y: Math.floor(Math.random() * 2500) + 100 },
  { x: 9, y: Math.floor(Math.random() * 2500) + 100 },
  { x: 10, y: Math.floor(Math.random() * 2500) + 100 },
  { x: 11, y: Math.floor(Math.random() * 2500) + 100 },
  { x: 12, y: Math.floor(Math.random() * 2500) + 100 },
];

const location5 = [
  { x: 1, y: Math.floor(Math.random() * 1000) + 500 },
  { x: 2, y: Math.floor(Math.random() * 1000) + 500 },
  { x: 3, y: Math.floor(Math.random() * 1000) + 500 },
  { x: 4, y: Math.floor(Math.random() * 1000) + 500 },
  { x: 5, y: Math.floor(Math.random() * 1000) + 500 },
  { x: 6, y: Math.floor(Math.random() * 1000) + 500 },
  { x: 7, y: Math.floor(Math.random() * 1000) + 500 },
  { x: 8, y: Math.floor(Math.random() * 1000) + 500 },
  { x: 9, y: Math.floor(Math.random() * 1000) + 500 },
  { x: 10, y: Math.floor(Math.random() * 1000) + 500 },
  { x: 11, y: Math.floor(Math.random() * 1000) + 500 },
  { x: 12, y: Math.floor(Math.random() * 1000) + 500 },
];

const locations = [location1, location2, location3, location4, location5];

class MicrobeAreaChart extends React.Component {
  constructor() {
    super();
    this.state = {
      data: this.getData(),
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: this.getData(),
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData() {
    return locations;
  }

  render() {
    return (
      <div className="charts">
        <div id="areaChart">
          <h2>Number of Microbial Species per Location in Brooklyn</h2>
          <h3>January 2020 - December 2020</h3>
          <div id="areaChartContainer">
            <VictoryChart
              animate={{ duration: 2000 }}
              domain={{ y: [0, 10000] }}
              containerComponent={
                <VictoryZoomContainer
                  zoomDomain={{ x: [1, 12], y: [0, 10000] }}
                />
              }
            >
              <VictoryLegend
                orientation="horizontal"
                x={270}
                itemsPerRow={3}
                style={{
                  labels: { fontSize: 6 },
                }}
                data={[
                  { name: 'Location 1' },
                  { name: 'Location 2' },
                  { name: 'Location 3' },
                  { name: 'Location 4' },
                  { name: 'Location 5' },
                ]}
              />
              <VictoryAxis
                tickValues={[
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ]}
              />
              <VictoryAxis dependentAxis />
              <VictoryStack
                events={[
                  {
                    childName: 'all',
                    target: 'data',
                    eventHandlers: {
                      onClick: () => {
                        return [
                          {
                            childName: 'location-1',
                            target: 'data',
                            mutation: (props) => ({
                              style: Object.assign({}, props.style, {
                                fill:
                                  props.style.fill === '#390099'
                                    ? '#252525'
                                    : '#390099',
                              }),
                            }),
                          },
                          {
                            childName: 'location-2',
                            target: 'data',
                            mutation: (props) => ({
                              style: Object.assign({}, props.style, {
                                fill:
                                  props.style.fill === '#9e0059'
                                    ? '#525252'
                                    : '#9e0059',
                              }),
                            }),
                          },
                          {
                            childName: 'location-3',
                            target: 'data',
                            mutation: (props) => ({
                              style: Object.assign({}, props.style, {
                                fill:
                                  props.style.fill === '#ff0054'
                                    ? '#737373'
                                    : '#ff0054',
                              }),
                            }),
                          },
                          {
                            childName: 'location-4',
                            target: 'data',
                            mutation: (props) => ({
                              style: Object.assign({}, props.style, {
                                fill:
                                  props.style.fill === '#ff5400'
                                    ? '#969696'
                                    : '#ff5400',
                              }),
                            }),
                          },
                          {
                            childName: 'location-5',
                            target: 'data',
                            mutation: (props) => ({
                              style: Object.assign({}, props.style, {
                                fill:
                                  props.style.fill === '#ffbd00'
                                    ? '#bdbdbd'
                                    : '#ffbd00',
                              }),
                            }),
                          },
                        ];
                      },
                    },
                  },
                ]}
              >
                <VictoryArea data={location1} name="location-1" />
                <VictoryArea data={location2} name="location-2" />
                <VictoryArea data={location3} name="location-3" />
                <VictoryArea data={location4} name="location-4" />
                <VictoryArea data={location5} name="location-5" />
              </VictoryStack>
            </VictoryChart>
          </div>
        </div>
        <h2 className="learnMore">Learn More about Each Location</h2>
        <LocationCards />
      </div>
    );
  }
}

export default MicrobeAreaChart;
