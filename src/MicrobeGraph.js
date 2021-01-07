import React from 'react';
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryLegend,
  VictoryTooltip,
} from 'victory';
import MicrobeCards from './MicrobeCards';

const microbe1 = [
  { sample: '1', relativeFreq: 55, label: 'info 1' },
  { sample: '2', relativeFreq: 5, label: 'info 2' },
  { sample: '3', relativeFreq: 10, label: 'info 3' },
  { sample: '4', relativeFreq: 15, label: 'info 4' },
  { sample: '5', relativeFreq: 65, label: 'info 5' },
];
const microbe2 = [
  { sample: '1', relativeFreq: 5, label: 'info 6' },
  { sample: '2', relativeFreq: 45, label: 'info 7' },
  { sample: '3', relativeFreq: 20, label: 'info 8' },
  { sample: '4', relativeFreq: 10, label: 'info 9' },
  { sample: '5', relativeFreq: 10, label: 'info 10' },
];
const microbe3 = [
  { sample: '1', relativeFreq: 15, label: 'info 11' },
  { sample: '2', relativeFreq: 15, label: 'info 12' },
  { sample: '3', relativeFreq: 25, label: 'info 13' },
  { sample: '4', relativeFreq: 20, label: 'info 14' },
  { sample: '5', relativeFreq: 5, label: 'info 15' },
];
const microbe4 = [
  { sample: '1', relativeFreq: 20, label: 'info 16' },
  { sample: '2', relativeFreq: 5, label: 'info 17' },
  { sample: '3', relativeFreq: 5, label: 'info 18' },
  { sample: '4', relativeFreq: 35, label: 'info 19' },
  { sample: '5', relativeFreq: 10, label: 'info 20' },
];
const microbe5 = [
  { sample: '1', relativeFreq: 5, label: 'info 21' },
  { sample: '2', relativeFreq: 30, label: 'info 22' },
  { sample: '3', relativeFreq: 40, label: 'info 23' },
  { sample: '4', relativeFreq: 20, label: 'info 24' },
  { sample: '5', relativeFreq: 10, label: 'info 25' },
];

const microbes = [microbe1, microbe2, microbe3, microbe4, microbe5]

class MicrobeGraph extends React.Component {
  constructor() {
    super()
    this.state = {
      data: this.getData()
    }
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(()=> {
      this.setState({
        data: this.getData()
      })
    }, 3000)
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval)
  }

  getData() {
    return microbes
  }

  render() {
    return (
      <div className="charts">
        <div id="barChart">
          <h2>Microbial Composition at Jane's Carousel</h2>
          <h4>January 1, 2021</h4>
          <div id="barChartContainer">
            <VictoryChart domainPadding={25}
            animate={{duration: 500}}>
              <VictoryLegend
                orientation="horizontal"
                x={270}
                itemsPerRow={3}
                style={{
                  labels: { fontSize: 6 },
                }}
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
              <VictoryStack
                events={[
                  {
                    childName: 'all',
                    target: 'data',
                    eventHandlers: {
                      onClick: () => {
                        return [
                          {
                            childName: 'microbe-1',
                            target: 'data',
                            mutation: (props) => ({
                              style: Object.assign({}, props.style, {
                                fill: props.style.fill ==='#390099' ? '#252525':'#390099',
                              }),
                            }),
                          },
                          {
                            childName: 'microbe-2',
                            target: 'data',
                            mutation: (props) => ({
                              style: Object.assign({}, props.style, {
                                fill: props.style.fill ==='#9e0059' ? '#525252':'#9e0059',
                              }),
                            }),
                          },
                          {
                            childName: 'microbe-3',
                            target: 'data',
                            mutation: (props) => ({
                              style: Object.assign({}, props.style, {
                                fill: props.style.fill ==='#ff0054' ? '#737373':'#ff0054',
                              }),
                            }),
                          },
                          {
                            childName: 'microbe-4',
                            target: 'data',
                            mutation: (props) => ({
                              style: Object.assign({}, props.style, {
                                fill: props.style.fill ==='#ff5400' ? '#969696':'#ff5400',
                              }),
                            }),
                          },
                          {
                            childName: 'microbe-5',
                            target: 'data',
                            mutation: (props) => ({
                              style: Object.assign({}, props.style, {
                                fill: props.style.fill ==='#ffbd00' ? '#bdbdbd': '#ffbd00',
                              }),
                            }),
                          },
                        ];
                      },
                    },
                  },
                ]}
              >
                <VictoryBar
                  data={microbe1}
                  labelComponent={<VictoryTooltip />}
                  x="sample"
                  y="relativeFreq"
                  name="microbe-1"
                />
                <VictoryBar
                  data={microbe2}
                  labelComponent={<VictoryTooltip />}
                  x="sample"
                  y="relativeFreq"
                  name="microbe-2"
                />
                <VictoryBar
                  data={microbe3}
                  labelComponent={<VictoryTooltip />}
                  x="sample"
                  y="relativeFreq"
                  name="microbe-3"
                />
                <VictoryBar
                  data={microbe4}
                  labelComponent={<VictoryTooltip />}
                  x="sample"
                  y="relativeFreq"
                  name="microbe-4"
                />
                <VictoryBar
                  data={microbe5}
                  labelComponent={<VictoryTooltip />}
                  x="sample"
                  y="relativeFreq"
                  name="microbe-5"
                />
              </VictoryStack>
            </VictoryChart>
          </div>
        </div>
        <h2 className="learnMore">Learn More about Each Microbe</h2>
        <MicrobeCards />
      </div>
    );
  }
}

export default MicrobeGraph;
